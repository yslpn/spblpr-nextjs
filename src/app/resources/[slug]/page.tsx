import { Metadata } from "next";
import ExportedImage from "next-image-export-optimizer";
import { notFound } from "next/navigation";
import { Resources, allResources } from "../../../../.contentlayer/generated";
import Layout from "../../../components/Layout";
import PostFooter from "../../../components/PostFooter";
import PostHeader from "../../../components/PostHeader";
import { SITE_URL, SITE_NAME, AUTHOR_NAME } from "../../../config";

// Metadata function for SEO
export async function generateMetadata(props: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const params = await props.params;
  const resource = allResources.find(
    (resource) => resource.slug === params.slug,
  ) as Resources;

  if (!resource) {
    return notFound();
  }

  return {
    title: resource.title,
    description: resource.description,
    openGraph: {
      type: "article",
      url: `${SITE_URL}/resources/${resource.slug}/`,
      title: resource.title,
      description: resource.description,
      publishedTime: resource.date,
      authors: `${AUTHOR_NAME}`,
      tags: resource.tags,
      images: [
        {
          url: `${SITE_URL}${resource.image}`,
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

export default async function ResourcePage(props: {
  params: Promise<{ slug: string }>;
}) {
  const params = await props.params;
  const resource = allResources.find(
    (resource) => resource.slug === params.slug,
  );

  if (!resource) {
    return notFound();
  }

  return (
    <Layout>
      <article className="m-auto max-w-4xl p-4 sm:p-12 sm:pt-0">
        <PostHeader data={resource as Resources} />
        <figure className="mt-12 flex flex-col gap-2 overflow-hidden rounded-lg bg-slate-200 dark:bg-slate-700">
          <a
            href={resource.link}
            target="_blank"
            title={`Open resource on a new tab`}
            rel="noreferrer"
          >
            <ExportedImage
              src={resource.image}
              alt={resource.title}
              className="h-auto w-full"
              loading="lazy"
            />
          </a>
        </figure>
        <div
          className="blog-post"
          dangerouslySetInnerHTML={{ __html: resource.body.html }}
        ></div>
        <PostFooter data={resource} />
      </article>
    </Layout>
  );
}
