import InfoStore from "../../features/infoStore";

const Info = () => {
  const { info } = InfoStore();
  return (
    <div className="intro">
      <h1>{info.name}</h1>
      <p className="text-xl text-gray-500">{info.jobRole}</p>
    </div>
  );
};

export default Info;
