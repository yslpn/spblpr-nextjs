import { useState } from "react";
import Link from "next/link";
import { Icon } from "./Icon";

const menuItemClasses =
  "w-full flex items-center gap-3 p-3 px-6 text-sm tracking-wide text-slate-700 dark:text-slate-700 hover:text-slate-800 dark:hover:text-slate-950 hover:font-semibold transition-colors transition-all border-b border-b-slate-200 dark:border-b-slate-300 hover:bg-slate-100 dark:hover:bg-white";

const iconClasses = "size-4 opacity-70";

export default function Header() {
  const [navbar, setNavbar] = useState(false);

  return (
    <header className="pointer-events-none fixed z-10 flex w-full p-4 sm:p-6">
      <nav className="flex w-full items-center justify-between">
        <Link
          href="/"
          className="pointer-events-auto rounded-sm font-bold opacity-80 outline-offset-8 transition-opacity hover:opacity-100"
        >
          dc.tips
        </Link>

        <div className="group pointer-events-auto absolute top-4 right-0 sm:top-5">
          <button
            className="absolute right-4 z-10 rounded-lg bg-white p-2 text-xs font-bold text-slate-700 uppercase shadow-md transition-shadow hover:shadow-lg sm:right-6 dark:bg-slate-300"
            type="button"
            onClick={() => setNavbar(!navbar)}
          >
            {navbar ? (
              <span aria-label="Close menu" className="block w-4">
                <Icon name="close" className="size-4" />
              </span>
            ) : (
              <span className="group flex items-center gap-2 text-xs">
                Menu
                <Icon name="burger" className="size-4" />
              </span>
            )}
          </button>

          <div className={`${navbar ? "" : "hidden"}`}>
            <menu className="absolute right-4 flex min-w-48 flex-col rounded-xl bg-white py-3 shadow-md transition-shadow group-hover:shadow-lg sm:right-6 dark:bg-slate-100">
              <li>
                <Link
                  onClick={() => setNavbar(!navbar)}
                  href="/"
                  className={menuItemClasses}
                >
                  <Icon name="home" className={iconClasses} />
                  Home
                </Link>
              </li>
              <li>
                <Link
                  onClick={() => setNavbar(!navbar)}
                  href="/blog"
                  className={menuItemClasses}
                >
                  <Icon name="blog" className={iconClasses} />
                  Code Blog
                </Link>
              </li>
              <li>
                <Link
                  onClick={() => setNavbar(!navbar)}
                  href="/tags"
                  className={menuItemClasses}
                >
                  <Icon name="tag" className={iconClasses} />
                  All Tags
                </Link>
              </li>
              <li>
                <Link
                  onClick={() => setNavbar(!navbar)}
                  href="/inspiration"
                  className={menuItemClasses}
                >
                  <Icon name="inspiration" className={iconClasses} />
                  Inspiration
                </Link>
              </li>
              <li>
                <Link
                  onClick={() => setNavbar(!navbar)}
                  href="/podcasts"
                  className={menuItemClasses}
                >
                  <Icon name="podcasts" className={iconClasses} />
                  Podcasts
                </Link>
              </li>
              <li>
                <Link
                  onClick={() => setNavbar(!navbar)}
                  href="/tools"
                  className={menuItemClasses}
                >
                  <Icon name="tools" className={iconClasses} />
                  Tools
                </Link>
              </li>
              <li>
                <Link
                  onClick={() => setNavbar(!navbar)}
                  href="/resources"
                  className={menuItemClasses}
                >
                  <Icon name="resources" className={iconClasses} />
                  Resources
                </Link>
              </li>
            </menu>
          </div>
        </div>
      </nav>
    </header>
  );
}
