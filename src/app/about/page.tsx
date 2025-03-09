import ReactMarkdown from "react-markdown";
import { Metadata } from "next";
import gfm from "remark-gfm";
import { allPages, Page } from "../../../.contentlayer/generated";
import Layout from "../../components/Layout";
import { AUTHOR_NAME, SITE_NAME, SITE_URL } from "../../config";

// Get page data
const about = allPages.find((about: Page) => about?.slug === "about") as Page;

export function generateMetadata(): Metadata {
  return {
    title: about?.title || "About",
    description: about?.description || "Welcome to the about page",
    openGraph: {
      url: `${SITE_URL}/about/`,
      title: `${about?.title}`,
      description: `${about?.description}`,
      authors: `${AUTHOR_NAME}`,
      images: [
        {
          url: `${SITE_URL}/og-card.png`,
          width: 1600,
          height: 800,
          alt: "banner",
          type: "image/jpeg",
        },
      ],
      siteName: `${SITE_NAME}`,
    },
  };
}

export default function About() {
  return (
    <Layout>
      <section className="mx-auto my-24 flex max-w-5xl flex-col gap-12 text-center">
        <h1 className="text-3xl font-bold">{about?.title}</h1>
        <div className="flex flex-col gap-8">
          <ReactMarkdown remarkPlugins={[gfm]}>
            {about?.description}
          </ReactMarkdown>
        </div>
        <div className="flex flex-wrap justify-center gap-2"></div>
      </section>
    </Layout>
  );
}
