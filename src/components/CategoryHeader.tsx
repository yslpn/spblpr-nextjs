import { Icon } from "./Icon";

export default function CategoryHeader({
  title,
  templateKey,
}: {
  title: string;
  templateKey: string;
}) {
  return (
    <>
      <header className="mb-12 flex items-end justify-center">
        <div>
          <h1 className="flex items-center gap-3 text-3xl font-bold md:text-4xl">
            <Icon name={templateKey} className="size-6 opacity-60 sm:size-8" />
            <span>{title}</span>
          </h1>
        </div>

        {/* <button>Filters</button> */}
      </header>
    </>
  );
}
