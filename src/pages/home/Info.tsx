
const Info = () => {
  return (
    <div className="container mx-auto p-3">
      <div className="grid gap-4">
        <div className="space-y-4">
          <h1 className="text-sky-600 w-full text-center">Why Choose Us?</h1>
          <p className="text-gray-500 text-md mb-4 max-w-2xl text-center mx-auto">
            Our platform offers a seamless experience for creating your perfect
            resume. Here are some reasons to choose us:
          </p>
          <div className="flex flex-wrap justify-around">
            <ul className="list-disc list-inside text-gray-500">
              <li>Professional templates to choose from</li>
              <li>Intuitive design tools for customization</li>
              <li>Instant preview of your resume as you build it</li>
              <li>Expertly crafted templates for various industries</li>
              <li>Effortless download and sharing options</li>
            </ul>
            <ul className="list-disc list-inside text-gray-500">
              <li>Easy-to-use interface for quick resume creation</li>
              <li>No account needed for immediate access</li>
              <li>Download your resume in various formats</li>
              <li>Customize and tailor your resume effortlessly</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;
