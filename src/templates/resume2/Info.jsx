import InfoStore from "../../features/infoStore";

const Info = () => {
  const { info } = InfoStore();
  return (
    <div className="intro">
      <h1 className="text-3xl">{info.name}</h1>
      <p className="text-xl text-primary font-semibold">{info.jobRole}</p>
    </div>
  );
};

export default Info;
