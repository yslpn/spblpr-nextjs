import { pick } from "contentlayer2/client";
import { Metadata } from "next";
import Link from "next/link";
import {
  Blog,
  Inspiration,
  Podcasts,
  Resources,
  Tools,
  allBlogs,
  allInspirations,
  allPages,
  allPodcasts,
  allResources,
  allTools,
} from "../../.contentlayer/generated";
import { Icon } from "../components/Icon";
import Layout from "../components/Layout";
import BlogCardPost from "../components/cards/BlogPostCard";
import InspirationPostCard from "../components/cards/InspirationPostCard";
import PodcastPostCard from "../components/cards/PodcastPostCard";
import ToolsPostCard from "../components/cards/ToolsPostCard";
import { AUTHOR_NAME, SITE_NAME, SITE_URL } from "../config";

// Get page data
const home = allPages.find((home) => home?.slug === "home");

// Metadata function for SEO
export function generateMetadata(): Metadata {
  const SEO = {
    title: home?.title || "Home",
    description: home?.description || `Welcome to the Homepage of ${SITE_NAME}`,
    image: `${SITE_URL}/og-card.png`,
  };

  return {
    title: SEO.title,
    description: SEO.description,
    openGraph: {
      url: `${SITE_URL}/`,
      title: SEO.title,
      description: SEO.description,
      authors: `${AUTHOR_NAME}`,
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

// Get all posts and pick specific fields
export default function Home() {
  let blogs = allBlogs.map((post: Blog) =>
    pick(post, ["featured", "title", "date", "slug"]),
  );
  blogs = blogs
    .filter((post) => post.featured === true)
    .sort(
      (a, b) =>
        new Date(b.date ?? "").getTime() - new Date(a.date ?? "").getTime(),
    );

  let inspirations = allInspirations.map((post: Inspiration) =>
    pick(post, ["featured", "image", "title", "date", "slug"]),
  );
  inspirations = inspirations
    .filter((post) => post.featured === true)
    .slice(0, 6);

  let podcasts = allPodcasts.map((post: Podcasts) =>
    pick(post, ["featured", "image", "title", "date", "slug"]),
  );
  podcasts = podcasts.filter((post) => post.featured === true).slice(0, 4);

  let tools = allTools.map((post: Tools) =>
    pick(post, ["featured", "image", "title", "date", "slug", "description"]),
  );
  tools = tools.filter((post) => post.featured === true).slice(0, 6);

  let resources = allResources.map((post: Resources) =>
    pick(post, ["featured", "image", "title", "date", "slug", "description"]),
  );

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  resources = resources.filter((post) => post.featured === true).slice(0, 4);

  return (
    <Layout>
      <div className="m-auto flex flex-col gap-24 px-4 pb-24 md:max-w-[87%] md:px-12 xl:gap-32 xl:pb-36">
        <h1 className="mt-24 max-w-[36rem] text-5xl text-balance lg:text-6xl">
          {home?.title}
        </h1>

        <section className="flex flex-col gap-4">
          <div className="mb-4 flex items-end justify-between">
            <h2 className="flex items-center gap-3 text-2xl font-bold sm:text-3xl">
              <Icon name="blog" className="size-6 opacity-60 sm:size-8" />
              <span>Code Blog</span>
            </h2>
            <Link href="/blog">View all &rarr;</Link>
          </div>
          <div className="grid flex-wrap gap-4 xl:grid-cols-2">
            {blogs.map((post) => (
              <BlogCardPost key={post.slug} post={post as Blog} />
            ))}
          </div>
        </section>

        <section className="flex flex-col gap-4">
          <div className="mb-4 flex items-end justify-between">
            <h2 className="flex items-center gap-3 text-2xl font-bold sm:text-3xl">
              <Icon
                name="inspiration"
                className="size-6 opacity-60 sm:size-8"
              />
              <span>Inspiration</span>
            </h2>
            <Link href="/inspiration">View all &rarr;</Link>
          </div>
          <div className="grid flex-wrap gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {inspirations.map((post) => (
              <InspirationPostCard key={post.slug} post={post as Inspiration} />
            ))}
          </div>
        </section>

        <section className="flex flex-col gap-4">
          <div className="mb-4 flex items-end justify-between">
            <h2 className="flex items-center gap-3 text-2xl font-bold sm:text-3xl">
              <Icon name="podcasts" className="size-6 opacity-60 sm:size-8" />
              <span>Podcasts</span>
            </h2>
            <Link href="/podcasts">View all &rarr;</Link>
          </div>
          <div className="grid flex-wrap gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {podcasts.map((post) => (
              <PodcastPostCard key={post.slug} post={post as Podcasts} />
            ))}
          </div>
        </section>

        <section className="flex flex-col gap-4">
          <div className="mb-4 flex items-end justify-between">
            <h2 className="flex items-center gap-3 text-2xl font-bold sm:text-3xl">
              <Icon name="tools" className="size-6 opacity-60 sm:size-8" />
              <span>Tools</span>
            </h2>
            <Link href="/tools">View all &rarr;</Link>
          </div>
          <div className="grid flex-wrap gap-4 xl:grid-cols-2">
            {tools.map((post) => (
              <ToolsPostCard key={post.slug} post={post as Tools} />
            ))}
          </div>
        </section>
      </div>
    </Layout>
  );
}
