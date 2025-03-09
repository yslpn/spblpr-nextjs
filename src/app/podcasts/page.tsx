import { pick } from "contentlayer2/client";
import { Metadata } from "next";
import {
  Podcasts as PodcastType,
  allPodcasts,
} from "../../../.contentlayer/generated";
import CategoryHeader from "../../components/CategoryHeader";
import Layout from "../../components/Layout";
import PodcastPostCard from "../../components/cards/PodcastPostCard";
import { AUTHOR_NAME, SITE_NAME, SITE_URL } from "../../config";

// Metadata function for SEO
export function generateMetadata(): Metadata {
  const SEO = {
    title: `A Selection of Podcasts by ${AUTHOR_NAME} | ${SITE_NAME}`,
    description:
      "Listen to a curated selection of podcasts covering web development, design, business, and electronic music. Perfect for creatives and tech enthusiasts.",
  };

  return {
    title: SEO.title,
    description: SEO.description,
    openGraph: {
      type: "article",
      url: `${SITE_URL}/podcasts/`,
      title: SEO.title,
      description: SEO.description,
      authors: `${AUTHOR_NAME}`,
      images: [
        {
          url: `${SITE_URL}/og-card.png`,
          width: 1600,
          height: 800,
          alt: `${SITE_NAME}`,
          type: "image/jpeg",
        },
      ],
      siteName: `${SITE_NAME}`,
    },
  };
}
//  help of pick get require filter value
export default function Podcasts() {
  const podcasts = allPodcasts.map((podcasts) =>
    pick(podcasts, [
      "title",
      "date",
      "slug",
      "description",
      "image",
      "templateKey",
    ]),
  );

  return (
    <Layout>
      <section className="m-auto mb-32 flex flex-col gap-6 px-4 sm:px-12 md:max-w-[87%]">
        <CategoryHeader
          title={`Podcasts`}
          templateKey={podcasts[0].templateKey!}
        />
        <div className="grid w-full gap-4 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
          {podcasts.map((post) => {
            return (
              <PodcastPostCard key={post.slug} post={post as PodcastType} />
            );
          })}
        </div>
      </section>
    </Layout>
  );
}
