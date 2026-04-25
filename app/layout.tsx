import { Footer, Layout, Navbar } from "nextra-theme-docs";
import { Head } from "nextra/components";
import { getPageMap } from "nextra/page-map";
import "nextra-theme-docs/style.css";
import "./globals.css";
import Image from "next/image";

export const metadata = {
  title: "Veil Credit Scoring Documentation",
  description:
    "Documentation for Veil Credit Scoring, a credit scoring system built on Midnight blockchain technology.",
};

const navbar = <Navbar logo={<p className="font-bold">Veil</p>} />;

// const footer = (
//   <Footer className="dark:bg-[#0a0a0a] bg-[#ededed] w-screen">
//     <div className="flex items-center gap-2">
//       <Image
//         src={"/lucent-labs-logo.png"}
//         alt="Lucent Labs Logo"
//         width={30}
//         height={30}
//       ></Image>
//       <p>Powered by Lucent Labs</p>
//     </div>
//   </Footer>
// );

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
      <Head
      // ... Your additional head options
      >
        {/* Your additional tags should be passed as `children` of `<Head>` element */}
      </Head>
      <body>
        <Layout
          navbar={navbar}
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
