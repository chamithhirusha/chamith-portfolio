interface Props {
  placeholder?: string;
  className?: string;
}

export default function TextField({ placeholder, className }: Props) {
  return (
    <input
      type="text"
      placeholder={placeholder}
      className={`w-full clickable border-0 border-b theme-border-secondary focus:outline-none focus:ring-0 p-[20px] focus:border-b-2 transition-all duration-300 ${className}`}
    />
  );
}
