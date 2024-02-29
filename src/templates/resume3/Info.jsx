import InfoStore from "../../features/infoStore";
import Contact from "./Conatct";
import Divider from "./Divider";

const Info = () => {
  const { info } = InfoStore();
  return (
    <>
      <div className="intro">
        <h1 className="text-center text-3xl text-gray-700">{info.name}</h1>
        <p className="text-lg text-center font-semibold text-gray-500">
          {info.jobRole}
        </p>
      </div>
      <Contact />
      <Divider/>
    </>
  );
};

export default Info;
