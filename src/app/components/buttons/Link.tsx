interface Props {
  text?: string;
  link: string;
  className?: string;
  target?: string;
}

export default function Link({ text, link, className, target }: Props) {
  return (
    <a
      href={link}
      className={`clickable hover:underline ${className}`}
      target={target}
      rel={target === "_blank" ? "noopener noreferrer" : undefined}
    >
      {text}
    </a>
  );
}
