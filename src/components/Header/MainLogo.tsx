import Link from "next/link";
import Image from "next/image";
import alibabaLogo from "../../../public/images/download.gif";

const MainLogo = () => {
  return (
    <Link
      href="/"
      className="router-link-active router-link-exact-active flex ml-6 items-center lg:ml-9"
    >
      <div className="flex" style={{ height: "48px" }}>
        <Image alt="logo" src={alibabaLogo} height={48} />
      </div>
    </Link>
  );
};

export default MainLogo;
