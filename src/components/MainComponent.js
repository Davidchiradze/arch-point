import Home from "../pages/Home";
import GlobalStyles from "../GlobalStyles";
import Header from "../components/layout/Header";
import { Route, Switch } from "react-router-dom";
import ProjectDetails from "../components/projects/ProjectDetails";
import Footer from "../components/Footer";
import AboutCompany from "../pages/AboutCompany";
import ContactInfoPage from "../pages/ContactInfoPage.js";
import ProjectPage from "../pages/ProjectPage.js";
import ServicePage from "../pages/ServicePage.js";

function MainComponent() {
  return (
    <>
      <GlobalStyles />
      <Switch>
        <Route exact path={"/"}>
          <Home />
        </Route>
        <Route path={"/project/:projectId"}>
          <Header />
          <ProjectDetails />
          <Footer />
        </Route>
        <Route path={"/aboutCompany"}>
          <Header />
          <AboutCompany />
          <Footer />
        </Route>
        <Route path={"/contactinfo"}>
          <Header />
          <ContactInfoPage />
          <Footer />
        </Route>
        <Route path={"/projectpage"}>
          <Header />
          <ProjectPage />
          <Footer />
        </Route>
        <Route path={"/servicepage"}>
          <Header />
          <ServicePage />
          <Footer />
        </Route>
      </Switch>
    </>
  );
}

export default MainComponent;
