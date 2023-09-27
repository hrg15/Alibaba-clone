import React from "react";
import Link from "next/link";
import Image from "next/image";

const Slide = ({ imgLink }: any) => {
  return (
    <Link className="btn is-md is-raw h-[14rem] relative block" href="/">
      <img
        className="is-responsive is-cover is-rounded w-full h-full"
        alt="slider image"
        src={imgLink}
      />
    </Link>
  );
};

export default Slide;
