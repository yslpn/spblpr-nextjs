"use client";

// Marks this as a client component
import type { MDXComponents } from "mdx/types";
import { useMDXComponent } from "next-contentlayer2/hooks";
import Link from "next/link";
import { Inspiration } from "../../.contentlayer/generated";
import PostFooter from "./PostFooter";
import PostHeader from "./PostHeader";
import Video from "./Video";

export default function InspirationPost({
  inspiration,
}: {
  inspiration: Inspiration;
}) {
  const MDXContent = useMDXComponent(inspiration.body.code);

  // Define custom MDX components.
  const mdxComponents: MDXComponents = {
    // Override the default <a> element to use the next/link component.
    a: ({ href, children }) => <Link href={href}>{children}</Link>,
    Video: ({ src }: { src: string }) => <Video src={src} />,

    // Add more custom components...
  };

  return (
    <article className="m-auto max-w-5xl p-4 sm:p-12 sm:pt-0">
      <PostHeader data={inspiration as Inspiration} />

      <div className="blog-post mt-12">
        <MDXContent components={mdxComponents} />
      </div>

      <PostFooter data={inspiration as Inspiration} />
    </article>
  );
}
