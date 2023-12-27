import MainContent from "../MainContent/MainContent";
import "./App.css";
import Plants from "../../pages/PlantLibrary/Plants";
import { Route, Routes } from "react-router-dom";
import Layout from "../Layout/Layout";
import AboutUs from "../../pages/AboutUs/AboutUs";
import { SinglePlantPage } from "../../pages/SinglePlantPage/SinglePlantPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="aboutUs" element={<AboutUs />} />
        <Route index element={<MainContent />} />
        <Route path="plantLibrary" element={<Plants />} />
        <Route path="plantLibrary/:id" element={<SinglePlantPage />} />
      </Route>
      <Route path="*" element={<h1>404 Page is not found</h1>} />
    </Routes>
  );
}
export default App;
