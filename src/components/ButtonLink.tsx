import Link, { LinkProps } from "next/link";

interface ButtonLinkProps extends LinkProps {
  children: React.ReactNode;
}
export const ButtonLink = (props: ButtonLinkProps) => {
  return (
    <Link
      className="bg-customGold text-customBlack hover:bg-customBlack hover:text-customGold flex h-[42px] w-[252px] items-center justify-center text-sm font-normal transition-all duration-300"
      {...props}
    >
      {props.children}
    </Link>
  );
};
