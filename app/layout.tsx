import { Layout, Navbar } from "nextra-theme-docs";
import { Head } from "nextra/components";
import { getPageMap } from "nextra/page-map";
import {SearchWithCallback} from "./components/Search";
import "nextra-theme-docs/style.css";
import "./globals.css";

export const metadata = {
  title: "Veil Credit Scoring Documentation",
  description:
    "Documentation for Veil Credit Scoring, a credit scoring system built on Midnight blockchain technology.",
};

const navbar = <Navbar logo={<p className="font-bold">Veil</p>} />;



export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      // Not required, but good for SEO
      lang="en"
      // Required to be set
      dir="ltr"
      // Suggested by `next-themes` package https://github.com/pacocoursey/next-themes#with-app
      suppressHydrationWarning
    >
      <Head>
        {/* Your additional tags should be passed as `children` of `<Head>` element */}
      </Head>
      <body>
        <Layout
          navbar={navbar}
          search={<SearchWithCallback />}
          pageMap={await getPageMap()}
          docsRepositoryBase="https://github.com/shuding/nextra/tree/main/docs"
          darkMode={true}
          navigation={true}
          feedback={{
            labels: "",
            link: "https://github.com/codeBigInt/veil-credit-scoring/issues/new?title=Feedback%20for%20%E2%80%9CVeil%20Credit%20Scoring%E2%80%9D&labels=feedback",
          }}
          // footer={footer}
          // ... Your additional layout options
        >
          {children}
        </Layout>
      </body>
    </html>
  );
}
