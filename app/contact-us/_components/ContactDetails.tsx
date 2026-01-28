import Image from "next/image";
import React from "react";
import second from "@public/png/Vector.png";
import Link from "next/link";
const ContactDetails = () => {
  return (
    <div>
      <Image src={second} alt="Vector" className="w-full" />

      <div className="clamp-[px,24px,80px] clamp-[py,40px,120px]">
        <h2 className="text-deep-blue clamp-[text,h2-m,h2-d] clamp-[leading,h2-m,h2-d] font-semibold">
          Contact Details
        </h2>

        <div className="grid md:grid-cols-2 clamp-[pt,20px,40px] clamp-[gap,20px,40px]">
          <div>
            <h5 className="clamp-[text,16px,24px] gap-[10px] flex items-center clamp-[leading,23px,36px] font-semibold text-black">
              <svg
                className="size-[28px]"
                viewBox="0 0 28 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4.10059 4.09961C9.56735 9.56637 9.56735 18.431 4.10059 23.8978C9.56735 18.431 18.432 18.431 23.8988 23.8978C18.432 18.431 18.432 9.56637 23.8988 4.09961C18.432 9.56637 9.56735 9.56637 4.10059 4.09961Z"
                  stroke="#002B5E"
                  stroke-miterlimit="10"
                />
                <path
                  d="M14 0C14 7.73314 7.73314 14 0 14C7.73314 14 14 20.2669 14 28C14 20.2669 20.2669 14 28 14C20.2669 14 14 7.73314 14 0Z"
                  fill="#1893C9"
                  stroke="#002B5E"
                  stroke-miterlimit="10"
                />
              </svg>
              Office Address
            </h5>
            <p className="clamp-[text,14px,20px] text-black pt-[8px] clamp-[leading,20px,30px]">
              No. 222, Second Floor (Trimaster Pvt. Ltd Building), Okhla
              Industrial Estate - Phase III, New Delhi - 110020 (India)
            </p>
          </div>
          <div>
            <h5 className="clamp-[text,16px,24px] gap-[10px] flex items-center clamp-[leading,23px,36px] font-semibold text-black">
              <svg
                width="29"
                height="29"
                viewBox="0 0 29 29"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.5 28.5C22.232 28.5 28.5 22.232 28.5 14.5C28.5 6.76801 22.232 0.5 14.5 0.5C6.76801 0.5 0.5 6.76801 0.5 14.5C0.5 22.232 6.76801 28.5 14.5 28.5Z"
                  stroke="#002B5E"
                  stroke-miterlimit="10"
                />
                <path
                  d="M23.231 14.5003C18.407 14.5003 14.5003 18.4104 14.5003 23.231C14.5003 18.407 10.5902 14.5003 5.76953 14.5003C10.5935 14.5003 14.5003 10.5902 14.5003 5.76953C14.5003 10.5935 18.4104 14.5003 23.231 14.5003Z"
                  fill="#1893C9"
                  stroke="#002B5E"
                  stroke-miterlimit="10"
                />
              </svg>
              Campus Address
            </h5>
            <p className="clamp-[text,14px,20px] text-black pt-[8px] clamp-[leading,20px,30px]">
              Plot No. 2, Rajiv Gandhi Education City, National Capital Region
              P.O. Rai, Sonepat, Haryana - 131029 (India)
            </p>
          </div>
          <div>
            <h5 className="clamp-[text,16px,24px] gap-[10px] flex items-center clamp-[leading,23px,36px] font-semibold text-black">
              <svg
                width="28"
                height="28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14 0C14 7.73314 7.73314 14 0 14C7.73314 14 14 20.2669 14 28C14 20.2669 20.2669 14 28 14C20.2669 14 14 7.73314 14 0Z"
                  stroke="#002B5E"
                  stroke-miterlimit="10"
                />
                <path
                  d="M13.9995 17.1162C15.7208 17.1162 17.1162 15.7208 17.1162 13.9995C17.1162 12.2782 15.7208 10.8828 13.9995 10.8828C12.2782 10.8828 10.8828 12.2782 10.8828 13.9995C10.8828 15.7208 12.2782 17.1162 13.9995 17.1162Z"
                  fill="#1893C9"
                  stroke="#002B5E"
                  stroke-miterlimit="10"
                />
              </svg>
              Email
            </h5>
            <Link
              href={"mailto:icpp@ashoka.edu.in"}
              className="clamp-[text,14px,20px] hover:text-electric-blue duration-300 ease-in-out transition-all text-black pt-[8px] clamp-[leading,20px,30px]"
            >
              icpp@ashoka.edu.in
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactDetails;
