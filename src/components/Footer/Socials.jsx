import React from "react";
import IconFacebook from "../../assets/facebook.svg";
import IconInstagram from "../../assets/instagram.svg";
import IconWhatsapp from "../../assets/whatsapp.svg";

const Socials = () => {
  const socialHandles = [IconFacebook, IconInstagram, IconWhatsapp];
  return (
    <div>
      <div className=" w-11/12 m-auto bg-white h-[2px]" />
      <div className=" flex justify-between py-5 mx-16 flex-wrap gap-2">
        <p className=" text-white font-light">
          Sambhaji Nagar, No2, St. Antony Road, Chembur, Mumbai - 400071,
          Maharashtra
        </p>
        <div className=" flex gap-5">
          {socialHandles.map((item, index) => (
            <img
              src={item}
              alt="social"
              key={index}
              className=" cursor-pointer hover:scale-110 duration-200"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Socials;
