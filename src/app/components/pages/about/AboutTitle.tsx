export default function AboutTitle() {
  return (
    <div className="theme-default-padding-x theme-default-padding-y">
      <hr className="theme-border-secondary mt-[140px] md:mt-[80px] mb-[25px] md:mb-[0px]" />
      <div className="flex flex-col md:flex-row justify-between items-center gap-[20px] md:gap-[50px] lg:gap-[100px] py-[10px]">
        <h1 className="font-moho-condensed text-[100px] md:text-[180px] xl:text-[200px] uppercase">
          <div className="flex items-center h-[80px] md:h-[160px]">About</div>
        </h1>
        <h2 className="text-center md:text-start text-[18px] md:text-[24px] xl:text-[28px] theme-secondary">
          7+ years of experience in the field of digital design working with
          national and international clients.
        </h2>
      </div>
      <hr className="theme-border-secondary mt-[25px] md:mt-[0px]" />
    </div>
  );
}
