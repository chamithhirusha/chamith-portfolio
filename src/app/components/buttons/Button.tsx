interface Props {
  text: string;
  className?: string;
  varient?: "primary" | "secondary";
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
}

export default function Button({
  text,
  className,
  varient = "primary",
  startIcon,
  endIcon,
  onClick,
  disabled,
}: Props) {
  return (
    <button
      className={`flex items-center justify-center clickable font-bold ${varient ? `btn-${varient}` : "btn-primary"} ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {startIcon && <span className="mr-2">{startIcon}</span>}
      {text}
      {endIcon && <span className="ml-2">{endIcon}</span>}
    </button>
  );
}
