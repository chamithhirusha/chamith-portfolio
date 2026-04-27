import { FacebookIcon, GithubIcon, LinkedinIcon, WhatsappIcon } from "../icons/Icons";

interface Props {
  text?: string;
  link: string;
  type: "whatsapp" | "linkedin" | "facebook" | "github";
  className?: string;
  varient?: "primary" | "secondary";
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
  varient = "primary",
}: Props) {
  const Icon = iconMap[type];

  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      <div
        className={`inline-flex w-fit clickable aspect-square cursor-pointer items-center justify-center gap-2 rounded-full border-2 ${varient === "primary" ? "theme-border-foreground theme-foreground" : "theme-border-background theme-background"} p-2 ${className}`}
      >
        <Icon className="size-8" />
        {text && <span>{text}</span>}
      </div>
    </a>
  );
}
