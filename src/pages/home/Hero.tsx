
const Hero = () => {
  return (
    <section>
      <div className="container mx-auto p-3 flex py-10 md:py-20 md:px-10 justify-around items-center">
        <div className="space-y-4 md:space-y-6 w-full md:w-[50%]">
          <p className="text-gray-500 bg-sky-100 w-fit px-3 py-1 rounded">
            THE BEST RESUME BUILDER ONLINE
          </p>
          <h1 className="text-3xl md:text-5xl text-gray-800 capitalize">
            Create a Professional resume{" "}
            <span className="text-sky-600">in Minutes</span>
          </h1>
          <p className="max-w-prose text-gray-500 md:text-md">
            Stand out with a professionally designed resume. No login required.
            Simply enter your details and download your resume.
          </p>

          <div className="bg-primary text-white font-semibold px-6 py-2.5 rounded-md transition-all duration-200 hover:mb-10 w-fit ">
            <a href="#templates">Start Building Resume</a>
          </div>
        </div>

        <div className="hidden md:grid gap-4 w-full md:w-[40%]">
          <img
            src="/resumes/2.png"
            alt=""
            className="w-full border rounded-xl shadow"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
