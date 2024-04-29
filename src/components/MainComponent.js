import Home from "../pages/Home";
import GlobalStyles from "../GlobalStyles";
// import Header from "../components/Header";
import { Route } from "react-router-dom";
import ProjectDetails from "../pages/ProjectDetails.js";
import Footer from "../components/Footer";
import AboutCompany from "../pages/AboutCompany";
import ContactInfoPage from "../pages/ContactInfoPage.js";
import ProjectPage from "../pages/ProjectPage.js";
import ServicePage from "../pages/ServicePage.js";
function MainComponent() {
  return (
    <>
      <GlobalStyles />
      <Route exact path={"/"}>
        <Home />
      </Route>
      <Route path={"/project/:projectId"}>
        <ProjectDetails />
      </Route>
      <Route path={"/aboutCompany"}>
        <AboutCompany />
      </Route>
      <Route path={"/contactinfo"}>
        <ContactInfoPage />
      </Route>
      <Route path={"/projectpage"}>
        <ProjectPage />
      </Route>
      <Route path={"/servicepage"}>
        <ServicePage />
      </Route>
      <Footer />
    </>
  );
}

export default MainComponent;
