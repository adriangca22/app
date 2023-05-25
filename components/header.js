import Image from "next/image";

function Header() {
  return (
    <div className="opacity-80 p-1 flex justify-center items-center bg-blue-900 ">
      <Image
        src="/static/images/falao.png"
        width={40}
        height={40}
        alt="logo "
        className=" translate-y-0 group-hover:translate-y-5 text-xl   "
      />
      <h1 className="p-2 font-bold text-base ">Adrian_web.design</h1>
    </div>
  );
}
export default Header;
