import Link, { LinkProps } from "next/link";

interface ButtonLinkProps extends LinkProps {
  children: React.ReactNode;
}
export const ButtonLink = (props: ButtonLinkProps) => {
  return (
    <Link
      className="font-normal flex items-center justify-center w-[252px] bg-customGold h-[42px] text-customBlack text-sm hover:bg-customBlack hover:text-customGold transition-all duration-300"
      {...props}
    >
      {props.children}
    </Link>
  );
};
