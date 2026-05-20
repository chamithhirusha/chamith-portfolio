export default function ContactLocation() {
  return (
    <div className="theme-default-padding-x theme-default-padding-y">
      <div className="flex flex-col justify-center items-center h-[400px] lg:min-h-[600px] theme-bg-foreground theme-inverted-foreground rounded-[15px] w-full">
        <div className="w-full h-[400px] lg:h-[600px] rounded-[12px] overflow-hidden">
          <iframe
            title="Google Map Location"
            className="w-full h-full border-0 grayscale brightness-70 contrast-125"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31686.123456789!2d79.900000!3d6.850000!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0000000000000000%3A0x0000000000000000!2sMaharagama!5e0!3m2!1sen!2slk!4v0000000000000"
            allowFullScreen
          />
        </div>
      </div>
    </div>
  );
}
