import Image from "next/image";

import klarnaSrc from "./img/klarna.svg";
import paypalSrc from "./img/paypal.svg";
import razorpay from "./img/razorpay.svg";
import stripeSrc from "./img/stripe.svg";

export const LogoSlider = () => {
  return (
    <div className="w-full bg-black rounded-full py-2 overflow-hidden">
      <div className="animate-first-infinite-scroll w-[490px] flex gap-8">
        <Image src={stripeSrc} alt="logo" />
        <Image src={klarnaSrc} alt="logo" />
        <Image src={paypalSrc} alt="logo" />
        <Image src={razorpay} alt="logo" />
        <Image src={stripeSrc} alt="logo" />
        <Image src={klarnaSrc} alt="logo" />
        <Image src={paypalSrc} alt="logo" />
        <Image src={razorpay} alt="logo" />
        <Image src={stripeSrc} alt="logo" />
        <Image src={klarnaSrc} alt="logo" />
        <Image src={paypalSrc} alt="logo" />
        <Image src={razorpay} alt="logo" />
      </div>
    </div>
  );
};
