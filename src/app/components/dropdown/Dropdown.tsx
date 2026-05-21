interface Props {
  options: string[];
  value?: string;
  onChange?: (value: string) => void;
  showDot?: boolean;
  dotColor?: string;
  className?: string;
  textColor?: string;
  textClassName?: string;
}

const Dropdown = (props: Props) => {
  return (
    <div
      className={`flex flex-row gap-3 justify-center items-center px-5 py-2 h-fit rounded-full border-2 ${props.className || ""}`}
    >
      {props.showDot && (
        <div
          className={`rounded-full w-2 h-2 ${props.dotColor || "theme-bg-highlight"}`}
        ></div>
      )}

      <select
        value={props.value || ""}
        onChange={(e) => props.onChange?.(e.target.value)}
        className={`
          bg-transparent
          outline-none
          border-none
          text-sm
          cursor-pointer
          ${props.textColor || "theme-foreground"}
          ${props.textClassName || ""}
        `}
      >
        {props.options.map((option, index) => (
          <option
            key={index}
            value={option}
            className="theme-bg-background theme-foreground"
          >
            {option} &nbsp;
          </option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;
