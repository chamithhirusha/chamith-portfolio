interface Props {
  label: string;
  className: string;
  labelClassName?: string;
}

export default function Checkbox({ label, className, labelClassName }: Props) {
  return (
    <div className="flex items-center gap-[10px]">
      <input
        type="checkbox"
        className={`w-[20px] h-[20px] clickable checkbox ${className}`}
      />
      <label className={labelClassName}>{label}</label>
    </div>
  );
}
