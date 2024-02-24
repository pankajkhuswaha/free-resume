import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Layout from "./layout";
import Resumebuilder from "./pages/resume-builder";
import Homepage from "./pages/Homepage";
import AddExperience from "./pages/resume-builder/AddExperience";
import AddProjects from "./pages/resume-builder/AddProjects";

const App = () => {
  return (
    <>
      <ToastContainer />
      <Layout>
        <Routes>
          <Route index element={<Homepage />} />
          <Route path="/app" element={<Resumebuilder />}>
            <Route path="*" element={<AddExperience />} />
            <Route path="experiences" element={<AddExperience />} />
            <Route path="projects" element={<AddProjects />} />
          </Route>
        </Routes>
      </Layout>
    </>
  );
};

export default App;
