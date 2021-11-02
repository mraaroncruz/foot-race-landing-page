import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import { Helmet } from "react-helmet";
import AppStoreBadge from "../images/AppStoreBadge.svg";
import GoogleStoreBadge from "../images/GoogleStoreBadge.png";
import LandingBackgroundShape from "../images/LandingBackground.svg";

const LANDING_QUERY = graphql`
  query {
    landingPage: contentfulLandingPage(
      id: { eq: "aa0b45f8-3074-5538-b1c0-3a1d336d5846" }
    ) {
      id
      title
      headline
      subheadline
      headerBlurb {
        childMarkdownRemark {
          html
        }
      }
      headerImage {
        file {
          url
        }
      }
      appleAppStoreLink
      googleAppStoreLink
    }
  }
`;

// markup
const IndexPage = () => {
  const { landingPage } = useStaticQuery(LANDING_QUERY);
  const sendAnalytics = (platform) => {
    window.gtag("event", "appstore_intent", { platform });
  };
  return (
    <div>
      <header className="px-16 py-6">
        <Helmet>
          <script
            async
            data-uid="f376f49380"
            src="https://successful-author-1806.ck.page/f376f49380/index.js"
          ></script>
        </Helmet>
        <span className="logo-text font-bold text-xl">FootRace App</span>
      </header>
      <main className="px-16 flex justify-between items-center">
        <div className="content">
          <h1 className="font-bold text-6xl mb-6 max-w-[545px] leading-tight">
            {landingPage.headline}
          </h1>
          <h2 className="font-bold text-3xl mb-6">{landingPage.subheadline}</h2>

          <div
            className="text-xl max-w-[545px] mb-6"
            dangerouslySetInnerHTML={{
              __html: landingPage.headerBlurb.childMarkdownRemark.html,
            }}
          ></div>
          <div className="appstore-buttons flex items-center">
            <a
              className="mr-12"
              data-formkit-toggle="f376f49380"
              href="https://successful-author-1806.ck.page/f376f49380"
              onClick={() => sendAnalytics("ios")}
            >
              <img className="h-[50px]" src={AppStoreBadge} />
            </a>
            <a
              data-formkit-toggle="f376f49380"
              href="https://successful-author-1806.ck.page/f376f49380"
              onClick={() => sendAnalytics("android")}
            >
              <img className="h-[50px]" src={GoogleStoreBadge} />
            </a>
          </div>
        </div>
        <div className="images max-w-[500px]">
          <img
            className="absolute top-[-112px] right-0"
            src={LandingBackgroundShape}
          />
          <img className="relative" src={landingPage.headerImage.file.url} />
        </div>
      </main>
    </div>
  );
};

export default IndexPage;
