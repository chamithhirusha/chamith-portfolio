interface Props {
  text?: string;
  link: string;
  className?: string;
}

export default function Link({ text, link, className }: Props) {
  return (
    <a href={link} className={`hover:underline ${className}`}>
      {text}
    </a>
  );
}
