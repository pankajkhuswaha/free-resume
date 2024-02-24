import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Resume from "./resume";
import { useReactToPrint } from "react-to-print";
import { useRef } from "react";
import Layout from "./layout";
import Sidebar from "./components/Sidebar";
import AddExperience from "./components/forms/AddExperience";

const App = () => {
  
  return (
    <>
      <ToastContainer />
      <Layout>
        <div className="flex gap-4 py-3 justify-between">
          <div className="flex-[2]">
            <Sidebar />
          </div>
          <div className="flex-[7]">
            <AddExperience />
            <div className="rounded-xl border shadow-xl">
              <Resume />
            </div>
          </div>

          {/* <button onClick={handlePrint}>Print this out!</button> */}
        </div>
      </Layout>
    </>
  );
};

export default App;

// https://dummyjson.com/auth/login
