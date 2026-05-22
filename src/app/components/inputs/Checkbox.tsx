interface Props {
  label: string;
  className: string;
  labelClassName?: string;
  checked?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function Checkbox({
  label,
  className,
  labelClassName,
  checked,
  onChange,
}: Props) {
  return (
    <div className="flex items-center gap-[10px]">
      <input
        type="checkbox"
        className={`w-[20px] h-[20px] clickable checkbox ${className}`}
        checked={checked}
        onChange={onChange}
      />
      <label className={labelClassName}>{label}</label>
    </div>
  );
}
