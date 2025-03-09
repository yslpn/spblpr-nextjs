import Link from "next/link";
import {
  Blog,
  Inspiration,
  Podcasts,
  Resources,
  Tools,
} from "../../.contentlayer/generated";
import { AUTHOR_NAME } from "../config";
import { formatDate } from "../utils";
import { Icon } from "./Icon";

export default function PostHeader({
  data,
}: {
  data: Blog | Inspiration | Podcasts | Resources | Tools;
}) {
  return (
    <>
      <header className="mt-2 mb-24 flex flex-col gap-4 sm:gap-6">
        <h1 className="text-4xl font-semibold text-balance text-slate-800 md:text-5xl lg:text-6xl dark:text-slate-200">
          {data.title}
        </h1>
        <div className="flex items-center gap-4 text-xs sm:text-base">
          <Link href={`/${data.templateKey}`} className="rounded-lg">
            <span className="flex items-center gap-2 rounded-lg bg-slate-700 px-3 py-2 text-slate-100 hover:underline dark:bg-slate-200 dark:text-slate-800">
              <Icon name={data.templateKey!} className="size-4" />
              <span className="font-semibold sm:text-sm">
                {data.templateKey &&
                  data.templateKey.charAt(0).toUpperCase() +
                    data.templateKey.slice(1)}
              </span>
            </span>
          </Link>
          <p className="leading-4 tracking-wide">
            <small>
              Posted by{" "}
              <Link href={"/about/"} className="font-semibold hover:underline">
                {AUTHOR_NAME}
              </Link>{" "}
              {data.date && (
                <span className="inline-flex">
                  {" "}
                  on {`${formatDate(new Date(data.date))}`}
                </span>
              )}
            </small>
          </p>
        </div>
      </header>
    </>
  );
}
