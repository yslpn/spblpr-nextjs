import { Metadata } from "next";
import ExportedImage from "next-image-export-optimizer";
import Link from "next/link";
import { notFound } from "next/navigation";
import { allPodcasts, Podcasts } from "../../../../.contentlayer/generated";
import Layout from "../../../components/Layout";
import PostFooter from "../../../components/PostFooter";
import PostHeader from "../../../components/PostHeader";
import { SITE_URL, SITE_NAME, AUTHOR_NAME } from "../../../config";

// Metadata function for SEO
export async function generateMetadata(props: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const params = await props.params;
  const podcast = allPodcasts.find(
    (podcast) => podcast.slug === params.slug,
  ) as Podcasts;

  if (!podcast) {
    return notFound();
  }

  return {
    title: podcast.title,
    description: podcast.description,
    openGraph: {
      type: "article",
      url: `${SITE_URL}/podcast/${podcast.slug}`,
      title: podcast.title,
      description: podcast.description,
      publishedTime: podcast.date,
      authors: `${AUTHOR_NAME}`,
      tags: podcast.tags,
      images: [
        {
          url: `${SITE_URL}${podcast.image}`,
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

export default async function PodcastPage(props: {
  params: Promise<{ slug: string }>;
}) {
  const params = await props.params;
  const podcast = allPodcasts.find(
    (podcast: Podcasts) => podcast.slug === params.slug,
  );

  if (!podcast) {
    return notFound();
  }

  return (
    <Layout>
      <article className="m-auto max-w-4xl p-4 sm:p-12 sm:pt-0">
        <PostHeader data={podcast} />
        <Link
          href={podcast.link as string}
          title="Open podcast on a new tab"
          target="_blank"
          className="mb-16 block lg:mb-24"
        >
          <ExportedImage
            src={podcast.image}
            alt={podcast.title}
            width={1800}
            height={1800}
            className="transition-300 rounded-xl shadow-md transition-shadow hover:shadow-xl dark:hover:shadow-2xl"
            loading="lazy"
          />
        </Link>
        <div
          className="blog-post"
          dangerouslySetInnerHTML={{ __html: podcast.body.html }}
        ></div>
        <PostFooter data={podcast} />
      </article>
    </Layout>
  );
}
