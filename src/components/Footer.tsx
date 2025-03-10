import Link from "next/link";
import TelegramIcon from "../assets/social/telegram.svg";
import TwitterIcon from "../assets/social/twitter.svg";
import VkIcon from "../assets/social/vk.svg";
import YoutubeIcon from "../assets/social/youtube.svg";

const socials = [
  { icon: TelegramIcon, link: "https://t.me/spblpr" },
  { icon: TwitterIcon, link: "https://x.com/spblpr" },
  { icon: VkIcon, link: "https://vk.com/spblpr" },
  { icon: YoutubeIcon, link: "https://www.youtube.com/spblpr" },
];

export default function Footer() {
  return (
    <footer className="flex justify-center p-5">
      {socials.map(({ icon: Icon, link }, index) => {
        return (
          <Link href={link} key={index} target="_blank">
            <Icon className="h-8 w-8 cursor-pointer" />
          </Link>
        );
      })}
    </footer>
  );
}
