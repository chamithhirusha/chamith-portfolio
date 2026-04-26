export default function NotFound() {
  return (
    <div className="flex flex-col justify-center items-center h-screen min-h-[700px] overflow-hidden theme-default-padding-x theme-default-padding-y">
      <h1 className="font-moho-condensed font-bold tracking-wide text-[100px] md:text-[200px] xl:text-[250px] uppercase">
        404
      </h1>
      <p className="text-[18px] md:text-[32px] leading-relaxed w-xs md:w-sm text-center">
        Page not found!
      </p>
    </div>
  );
}
