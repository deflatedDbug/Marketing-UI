import React from "react";
import Head from "next/head";
import FooterPage from "./Footer";
import Navigation from "./Navigation";
// import { getBaseUrl } from '@paymentlabs/utils';
import Script from "next/script";

export default function Layout({ children, navigationText, footerText }) {
  return (
    <div>
      <Head>
        <title>MALLO - Pay People Effortlessly</title>

        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>

        <style
          dangerouslySetInnerHTML={{
            __html: `
          @font-face {
            font-family: 'Faktum';
            src: url('/fonts/FAKTUM/Faktum-Medium.ttf') format('truetype');
            font-weight: 500;
            font-style: normal;
            font-display: swap;
          }

          @font-face {
            font-family: 'Faktum';
            src: url('/fonts/FAKTUM/Faktum-Bold.ttf') format('truetype');
            font-weight: bold;
            font-style: normal;
            font-display: swap;
          }

          @font-face {
            font-family: 'Faktum';
            src: url('/fonts/FAKTUM/Faktum-Regular.ttf') format('truetype');
            font-weight: normal;
            font-style: normal;
            font-display: swap;
          }

          @font-face {
            font-family: 'Faktum';
            src: url('/fonts/FAKTUM/Faktum-Light.ttf') format('truetype');
            font-weight: 300;
            font-style: normal;
            font-display: swap;
          }
        `,
          }}
        />

        <link
          rel="preload"
          href="/fonts/FAKTUM/Faktum-Medium.ttf"
          as="font"
          crossOrigin=""
        />
        <link
          rel="preload"
          href="/fonts/FAKTUM/Faktum-Bold.ttf"
          as="font"
          crossOrigin=""
        />
        <link
          rel="preload"
          href="/fonts/FAKTUM/Faktum-Regular.ttf"
          as="font"
          crossOrigin=""
        />
        <link
          rel="preload"
          href="/fonts/FAKTUM/Faktum-Light.ttf"
          as="font"
          crossOrigin=""
        />

        <meta
          key="title"
          name="title"
          content="MALLO - Pay People Effortlessly"
        />
        <meta
          key="description"
          name="description"
          content="MALLO enables businesses to make fast and compliant global payments with low, flat-rate fees."
        />

        <link rel="icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="57x57"
          href="/apple-icon-57x57.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="60x60"
          href="/apple-icon-60x60.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="72x72"
          href="/apple-icon-72x72.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="76x76"
          href="/apple-icon-76x76.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="114x114"
          href="/apple-icon-114x114.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="120x120"
          href="/apple-icon-120x120.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="144x144"
          href="/apple-icon-144x144.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="152x152"
          href="/apple-icon-152x152.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-icon-180x180.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href="/android-icon-192x192.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="96x96"
          href="/favicon-96x96.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/manifest.json" />
        <meta name="msapplication-TileColor" content="#79A94D" />
        <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
        <meta name="theme-color" content="#79A94D" />

        <meta key="og:type" property="og:type" content="website" />
        <meta key="og:url" property="og:url" content="https://www.mallo.io" />
        <meta
          key="og:title"
          property="og:title"
          content="MALLO - Pay People Effortlessly"
        />
        <meta
          key="og:description"
          property="og:description"
          content="MALLO enables businesses to make fast and compliant global payments with low, flat-rate fees."
        />

        <meta key="twitter:site" name="twitter:site" content="@malloapp" />
        <meta
          key="twitter:creator"
          name="twitter:creator"
          content="@malloapp"
        />
        <meta
          key="twitter:card"
          property="twitter:card"
          content="summary_large_image"
        />
        <meta
          key="twitter:url"
          property="twitter:url"
          content="https://www.mallo.io"
        />
        <meta
          key="twitter:title"
          property="twitter:title"
          content="MALLO - Pay People Effortlessly"
        />
        <meta
          key="twitter:description"
          property="twitter:description"
          content="MALLO enables businesses to make fast and compliant global payments with low, flat-rate fees."
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "http://schema.org/",
              "@type": "Organization",
              url: "https://www.mallo.io",
              legalName: "Payment Pro Logistics, LLC",
              name: "MALLO",
              alternateName: "MALLO",
              logo: {
                "@type": "ImageObject",
                url: "https://cdn.mallo.io/branding/logo.png",
                height: "1024",
                width: "1024",
              },
              description:
                "MALLO enables businesses to make fast and compliant global payments with low, flat-rate fees.",
              sameAs: [
                "https://www.linkedin.com/company/mallo",
                "https://www.crunchbase.com/organization/mallo-app",
                "https://twitter.com/malloapp",
                "https://www.instagram.com/malloapp",
                "https://www.twitch.tv/influencerpay",
                "https://www.reddit.com/user/influencerpay",
                "https://www.youtube.com/channel/UCXmMQW37d3ngofsfzGIFrCA?view_as=subscriber",
              ],
              contactPoint: [
                {
                  "@type": "ContactPoint",
                  url: "https://www.mallo.io",
                  contactType: "customer service",
                  email: "hello@mallo.io",
                  availableLanguage: ["English"],
                },
              ],
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "http://schema.org",
              "@type": "WebSite",
              name: "MALLO",
              url: "https://www.mallo.io",
              description:
                "MALLO enables businesses to make fast and compliant global payments with low, flat-rate fees.",
            }),
          }}
        />

        <script
          type="text/javascript"
          id="hs-script-loader"
          async
          defer
          src="//js.hs-scripts.com/6553783.js"
        ></script>
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-3M5BWGKERX"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-3M5BWGKERX');
        `,
          }}
        ></script>
      </Head>
      <Script
        strategy="lazyOnload"
        dangerouslySetInnerHTML={{
          __html: `
          (function () {
            if (typeof window !== 'undefined') {
              var zi = document.createElement('script');
              zi.type = 'text/javascript';
              zi.async = true;
              zi.referrerPolicy = 'unsafe-url';
              zi.src = 'https://ws.zoominfo.com/pixel/62a38bc309d5e60090d695db';
              var s = document.getElementsByTagName('script')[0];
              s.parentNode.insertBefore(zi, s);
            }
          })();
          `,
        }}
      />
      <Navigation navigationText={navigationText} />
      <div>{children}</div>
      <div className="bg-dark">
        <div className="position-relative">
          <FooterPage footerText={footerText} />
          <noscript>
            <img
              src="https://ws.zoominfo.com/pixel/62a38bc309d5e60090d695db"
              width="1"
              height="1"
              style={{
                display: "none",
              }}
              alt="websights"
            />
          </noscript>
        </div>
      </div>
    </div>
  );
}
