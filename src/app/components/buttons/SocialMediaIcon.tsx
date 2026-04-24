interface Props {
  text?: string;
  link: string;
  className?: string;
}

export default function SocialMediaIcon({ text, link, className }: Props) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className={`size-10 lg:size-12 clickable flex items-center justify-center rounded-full theme-bg-overlay ${className}`}
    >
      {text}
    </a>
  );
}
