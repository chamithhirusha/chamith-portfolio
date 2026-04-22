interface Props {
  label: string;
  showDot?: boolean;
  dotColor?: string;
  className?: string;
  textColor?: string;
}

const Badge = (props: Props) => {
  return (
    <div
      className={`flex flex-row sm:flex hidden gap-3 justify-center items-center px-5 py-2 h-fit rounded-full border-2 theme-border-secondary-light ${props.className || ""}`}
    >
      {props.showDot && (
        <div
          className={`rounded-full w-2 h-2 ${props.dotColor || "theme-bg-highlight"}`}
        ></div>
      )}
      <span
        className={`uppercase text-sm ${props.textColor || "theme-foreground"}`}
      >
        {props.label}
      </span>
    </div>
  );
};

export default Badge;
