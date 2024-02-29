import resumeTemplates from "../../templates";
import resumeStore from "../../features/resumeStore";
// import resumeThemeStore from "../../features/themeStore";

const Theme = () => {
  const { selectResume, selectedResume } = resumeStore();
  // const { setPrimaryColor, primaryColor } = resumeThemeStore();
  return (
    <div className="rounded-2xl shadow p-3 mt-2">
      {/* <div className="flex flex-wrap w-full border justify-between p-3 rounded-2xl items-center shadow-lg mb-4">
        <h1 className="text-2xl text-primary">Change Resume Color</h1>
        <div
          className={`border-2  w-1/2 rounded-md h-10 flex items-center overflow-hidden`}
        >
          <input
            style={{ background: primaryColor }}
            type="text"
            value={primaryColor}
            onChange={(e) => setPrimaryColor(e.target.value)}
            className="w-[80%] pl-4 h-full"
          />
          <input
            className="w-[20%] h-full form-control-color"
            type="color"
            value={primaryColor}
            onChange={(e) => setPrimaryColor(e.target.value)}
            name="mainbg"
          />
        </div>
      </div> */}
      <h1 className="text-2xl text-primary px-3">Change Resume Template</h1>
      <div className="flex flex-wrap gap-4 mt-4 px-3">
        {resumeTemplates.map((template, i) => {
          return (
            <div
              key={i}
              className={`w-[45%] md:w-60 shadow rounded-2xl hover:shadow-xl p-1 cursor-pointer border-2 overflow-hidden transition-all duration-300 ${selectedResume.name == template.name && "border-primary"}`}
            >
              <img
                onClick={() => {
                  selectResume(i);
                }}
                src={template.image}
                alt="resume-image h-[200px] md:h-[350px]"
              />
              <p className="text-lg font-semibold text-center mt-4">
                {template.name}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Theme;
