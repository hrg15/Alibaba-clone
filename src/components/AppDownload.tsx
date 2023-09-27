import React from "react";
import Image from "next/image";
import apple from "../../public/images/apple.png";
import andro from "../../public/images/android.png";
import qrcode from "../../public/images/qrcode-97ae53b8.jpg";
import appMobile from "../../public/images/app-mobile@4x-e3e3b7dc.webp";
const AppDownload = () => {
  return (
    <div className="a-card is-flat px-8 pt-2 relative overflow-hidden">
      <div className="flex w-full flex-wrap items-center justify-center relative">
        <Image
          className="is-responsive is-animated ml-8"
          alt="download alibaba app"
          src={qrcode}
        />
        <div
          className="pl-12 whitespace-nowrap text-start"
          style={{ flex: "0 0 0%", marginLeft: "0px" }}
        >
          <p className="text-6 font-black mb-0">اپلیکیشن علی بابا</p>
          <span>سریع تر و مطمئن تر به سفر بروید</span>
          <div className="flex w-full items-stretch py-5">
            <div
              className="mr-2 text-secondary-400"
              style={{ flex: "0 1 50%" }}
            >
              <span className="h-full inline-flex items-center py-2 pl-7 cursor-pointer">
                مشاهده لینک های دانلود
                <svg
                  viewBox="0 0 24 24"
                  width="20"
                  height="20"
                  fill="currentColor"
                  className="mr-2"
                >
                  <path d="M16.698 21.266a.75.75 0 0 1-1.08 1.037l-.066-.069-8.25-9.75a.75.75 0 0 1-.058-.89l.058-.078 8.25-9.75a.75.75 0 0 1 1.202.893l-.056.075L8.858 12l7.84 9.266Z"></path>
                </svg>
              </span>
            </div>
          </div>
          <span className="flex items-end text-grays-300 text-2">
            <Image
              src={apple}
              alt="app for apple"
              width={20}
              className="is-responsive is-animated ml-2 mb-1"
            />
            <Image
              width={20}
              src={andro}
              alt="app for andriod"
              className="is-responsive is-animated ml-2 mb-1"
            />
            <span>قابلیت نصب روی ios, andriod</span>
          </span>
        </div>
        <Image
          width={334}
          height={294}
          src={appMobile}
          alt="app mobile demo"
          className="is-responsive is-animated shrink-0 self-end lazyloaded"
        />
      </div>
    </div>
  );
};

export default AppDownload;
