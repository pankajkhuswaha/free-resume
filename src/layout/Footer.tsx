import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <>
      <footer className="w-full text-center flex gap-1 items-center justify-center py-2  bottom-0 absolute bg-gray-200">
        Made With <Heart fill="red" color="red" /> | By
        <a href="http://pankajkushwaha.vercel.app/" target="_blank">
          Pankaj Khuswaha
        </a>
      </footer>
      <div className="h-14"></div>
    </>
  );
};

export default Footer;
