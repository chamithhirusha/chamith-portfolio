interface Props {
  placeholder?: string;
  className?: string;
  rows?: number;
  cols?: number;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

export default function TextArea({
  placeholder,
  className,
  rows,
  cols,
  value,
  onChange,
}: Props) {
  return (
    <textarea
      placeholder={placeholder}
      rows={rows}
      cols={cols}
      className={`w-full clickable border-0 border-b theme-border-secondary focus:outline-none focus:ring-0 p-[20px] focus:border-b-2 transition-all duration-300 ${className}`}
      value={value}
      onChange={onChange}
    />
  );
}
