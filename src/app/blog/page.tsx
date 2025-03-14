import { pick } from "contentlayer2/client";
import { Metadata } from "next";
import { allBlogs, Blog } from "../../../.contentlayer/generated";
import CategoryHeader from "../../components/CategoryHeader";
import Layout from "../../components/Layout";
import BlogPostCard from "../../components/cards/BlogPostCard";
import { SITE_NAME, SITE_URL } from "../../config";
import { sortByDate } from "../../utils";
import { extractUniqueTags } from "../../utils/tags";

export function generateMetadata(): Metadata {
  const SEO = {
    title: "Code Blog by Nuno Marques | Design & Development Tips",
    description:
      "Discover the latest blogs on code, web design and development. Stay up to date with the latest trends and technologies, with code examples.",
    image: `${SITE_URL}/og-card.png`,
  };

  return {
    title: SEO.title,
    description: SEO.description,
    openGraph: {
      url: `${SITE_URL}/blog/`,
      title: SEO.title,
      description: SEO.description,
      images: [
        {
          url: SEO.image,
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

export default async function BlogPage(props: {
  params: Promise<{ page: string }>;
}) {
  const params = await props.params;
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const currentPage = parseInt(params.page || "1", 10);

  // Pick relevant fields from blogs and sort by date
  let blogs = allBlogs.map((blog) =>
    pick(blog, ["title", "date", "slug", "description", "templateKey"]),
  );
  blogs = blogs.sort(sortByDate);

  // Group blogs by year
  const groupedBlogs = blogs.reduce((acc: Record<string, Blog[]>, blog) => {
    const year = new Date(blog.date!).getFullYear().toString();
    if (!acc[year]) acc[year] = [];
    acc[year].push(blog as Blog);
    return acc;
  }, {});

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const uniqueTags = extractUniqueTags(allBlogs);

  return (
    <Layout>
      <section className="m-auto mb-32 flex flex-col gap-6 px-4 sm:px-12 md:max-w-[87%]">
        <CategoryHeader title="Code Blog" templateKey={blogs[0].templateKey!} />

        <div className="flex items-start gap-8">
          <div className="flex w-full flex-wrap gap-4">
            {Object.keys(groupedBlogs)
              .sort((a, b) => parseInt(b) - parseInt(a))
              .map((year) => (
                <div key={year}>
                  <h2 className="mb-8 text-2xl text-slate-700 dark:text-slate-300">
                    {year}
                  </h2>
                  <div
                    className={`grid ${
                      groupedBlogs[year].length < 2
                        ? "xl:grid-cols-2"
                        : "xl:grid-cols-3"
                    } mb-24 gap-4`}
                  >
                    {groupedBlogs[year].map((post) => (
                      <BlogPostCard key={post.slug} post={post as Blog} />
                    ))}
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
