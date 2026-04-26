import { FacebookIcon, GithubIcon, LinkedinIcon, WhatsappIcon } from "../icons/Icons";

interface Props {
  text?: string;
  link: string;
  type: "whatsapp" | "linkedin" | "facebook" | "github";
  className?: string;
}

const iconMap = {
  whatsapp: WhatsappIcon,
  linkedin: LinkedinIcon,
  facebook: FacebookIcon,
  github: GithubIcon,
};

export default function SocialMediaIcon({
  text,
  link,
  type,
  className = "",
}: Props) {
  const Icon = iconMap[type];

  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      <div
        className={`inline-flex w-fit clickable aspect-square cursor-pointer items-center justify-center gap-2 rounded-full border-2 theme-border-foreground p-2 ${className}`}
      >
        <Icon className="size-8" />
        {text && <span>{text}</span>}
      </div>
    </a>
  );
}
