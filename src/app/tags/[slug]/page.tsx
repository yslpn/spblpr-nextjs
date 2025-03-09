import { Metadata } from "next";
import ExportedImage from "next-image-export-optimizer";
import Link from "next/link";
import {
  Blog,
  Inspiration,
  Podcasts,
  Resources,
  Tools,
  allBlogs,
  allInspirations,
  allPodcasts,
  allResources,
  allTools,
} from "../../../../.contentlayer/generated";
import { Icon } from "../../../components/Icon";
import Layout from "../../../components/Layout";
import { AUTHOR_NAME, SITE_NAME, SITE_URL } from "../../../config";

// Metadata function for SEO
export async function generateMetadata(props: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const params = await props.params;
  const SEO = {
    title: `Tag: #${params.slug}`,
    description: `Browse all posts tagged with #${params.slug}. Discover related articles, inspiration, podcasts, tools and resources.`,
  };

  return {
    title: SEO.title,
    description: SEO.description,
    openGraph: {
      type: "article",
      url: `${SITE_URL}/tags/${params.slug}/`,
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

export default async function TagPage(props: {
  params: Promise<{ slug: string }>;
}) {
  const params = await props.params;
  const allPosts = [
    ...allBlogs,
    ...allInspirations,
    ...allPodcasts,
    ...allResources,
    ...allTools,
  ];

  // const posts = extractUniqueTags(allPosts)

  // get all the posts from this tag
  const posts = allPosts.filter((post) => post.tags?.includes(params.slug));

  return (
    <>
      <Layout>
        <section className="m-auto mb-32 flex max-w-3xl flex-col gap-6 px-4 sm:px-12">
          <header className="mb-4">
            <h1 className="text-3xl font-bold">#{params.slug}</h1>
            <p>All content tagged with this tag.</p>
          </header>

          <main className="flex w-full flex-col gap-4">
            {(
              posts as
                | Blog[]
                | Inspiration[]
                | Podcasts[]
                | Resources[]
                | Tools[]
            ).map((post) => {
              return (
                <div key={post.slug}>
                  <Link
                    href={`/${post.templateKey}/${post.slug}`}
                    className="flex w-full flex-col gap-8 rounded-xl bg-white p-4 shadow-md transition-shadow hover:shadow-xl sm:p-8 md:flex-row-reverse md:gap-12 dark:bg-slate-800 dark:transition-colors dark:hover:bg-slate-700 dark:hover:shadow-2xl"
                  >
                    {/* @ts-expect-error Property 'image' does not exist on type 'Blog'. */}
                    {post.image ? (
                      <figure className="flex w-full items-center justify-center md:max-w-48">
                        <ExportedImage
                          width={240}
                          height={240}
                          // @ts-expect-error Property 'image' does not exist on type 'Blog'.
                          src={post.image}
                          alt={post.title}
                          className="h-auto w-full rounded-xl"
                        />
                      </figure>
                    ) : (
                      <div className="flex w-full items-center justify-center rounded-xl border border-white bg-slate-200 md:max-w-48 dark:border-slate-700 dark:bg-slate-800">
                        <Icon
                          name={post.templateKey}
                          className="size-12 h-auto w-full opacity-60 sm:size-16"
                        />
                      </div>
                    )}

                    <div className="flex w-full flex-col gap-2">
                      <span className="flex items-center gap-2 text-xs font-bold text-slate-500 dark:text-slate-400">
                        <Icon name={post.templateKey} className="size-3" />{" "}
                        {post.type}
                      </span>
                      <h2 className="text-lg font-bold text-balance">
                        {post.title}
                      </h2>
                      <p className="line-clamp-3 overflow-hidden text-sm font-light tracking-wide text-ellipsis">
                        {post.description}
                      </p>
                      <span className="mt-auto pt-4 text-sm font-bold text-slate-500 dark:text-slate-400">
                        Read more &rarr;
                      </span>
                    </div>
                  </Link>
                </div>
              );
            })}
          </main>
        </section>
      </Layout>
    </>
  );
}
