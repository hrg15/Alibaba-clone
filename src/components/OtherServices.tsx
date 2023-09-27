import React from "react";
import Image from "next/image";
import Link from "next/link";

const OtherServices = () => {
  return (
    <div className="mb-5" data-v-bcfff104>
      <h3 className="text-headline-md text-start text-6">
        سایر خدمات علی بابا
      </h3>
      <div className="flex md:gap-4 flex-wrap">
        <Link className="btn is-md is-raw flex-1" href="/">
          <div className="a-card badge-wrapper" data-v-bcfff104>
            <div className="a-card__body flex md:flex-row flex-col items-center md:px-3 md:py-2 p-0 w-full">
              <div className="product-image" data-v-bcfff104>
                <Image
                  className="is-responsive is-animated"
                  width={46}
                  height={46}
                  alt="product iamage"
                  src="https://cdn.alibaba.ir/h2/desktop/assets/images/insurance-icon-bb51c425.svg"
                />
              </div>
              <span className="text-body-md md:mr-2 text-grays-500">
                بیمه مسافرتی
              </span>
              <div className="flex mr-auto items-center">
                <svg
                  viewBox="0 0 24 24"
                  width="16px"
                  height="16px"
                  fill="currentColor"
                  className="text-grays-200 mr-1"
                  data-v-bcfff104=""
                >
                  <path d="M16.698 21.266a.75.75 0 0 1-1.08 1.037l-.066-.069-8.25-9.75a.75.75 0 0 1-.058-.89l.058-.078 8.25-9.75a.75.75 0 0 1 1.202.893l-.056.075L8.858 12l7.84 9.266Z"></path>
                </svg>
              </div>
            </div>
          </div>
        </Link>
        <Link className="btn is-md is-raw flex-1" href="/">
          <div className="a-card badge-wrapper" data-v-bcfff104>
            <div className="a-card__body flex md:flex-row flex-col items-center md:px-3 md:py-2 p-0 w-full">
              <div className="product-image" data-v-bcfff104>
                <Image
                  className="is-responsive is-animated"
                  width={46}
                  height={46}
                  alt="product iamage"
                  src="https://cdn.alibaba.ir/h2/desktop/assets/images/visa-icon-d8507c8e.svg"
                />
              </div>
              <span className="text-body-md md:mr-2 text-grays-500">
                ویزای سفر
              </span>
              <div className="flex mr-auto items-center">
                <svg
                  viewBox="0 0 24 24"
                  width="16px"
                  height="16px"
                  fill="currentColor"
                  className="text-grays-200 mr-1"
                  data-v-bcfff104=""
                >
                  <path d="M16.698 21.266a.75.75 0 0 1-1.08 1.037l-.066-.069-8.25-9.75a.75.75 0 0 1-.058-.89l.058-.078 8.25-9.75a.75.75 0 0 1 1.202.893l-.056.075L8.858 12l7.84 9.266Z"></path>
                </svg>
              </div>
            </div>
          </div>
        </Link>
        <Link className="btn is-md is-raw flex-1" href="/">
          <div className="a-card badge-wrapper" data-v-bcfff104>
            <div className="a-card__body flex md:flex-row flex-col items-center md:px-3 md:py-2 p-0 w-full">
              <div className="product-image" data-v-bcfff104>
                <Image
                  className="is-responsive is-animated"
                  width={46}
                  height={46}
                  alt="product iamage"
                  src="https://cdn.alibaba.ir/h2/desktop/assets/images/gtour-icon-5e641f1b.svg"
                />
              </div>
              <span className="text-body-md md:mr-2 text-grays-500">
                تور گروهی
              </span>
              <div className="flex mr-auto items-center">
                <span className="badge-new" data-v-bcfff104="">
                  {" "}
                  جدید{" "}
                </span>
                <svg
                  viewBox="0 0 24 24"
                  width="16px"
                  height="16px"
                  fill="currentColor"
                  className="text-grays-200 mr-1"
                  data-v-bcfff104=""
                >
                  <path d="M16.698 21.266a.75.75 0 0 1-1.08 1.037l-.066-.069-8.25-9.75a.75.75 0 0 1-.058-.89l.058-.078 8.25-9.75a.75.75 0 0 1 1.202.893l-.056.075L8.858 12l7.84 9.266Z"></path>
                </svg>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default OtherServices;
