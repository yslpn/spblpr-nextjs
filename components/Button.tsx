import Link from 'next/link'

type ButtonProps = {
  name: string
  href: string
}

export const Button = (props: ButtonProps) => {
  return (
    <Link
      className="font-normal flex items-center justify-center w-[252px] bg-customGold h-[42px] text-customBlack text-sm hover:bg-customBlack hover:text-customGold transition-all duration-300"
      href={props.href}
    >
      {props.name}
    </Link>
  )
}
