import Layout from "./components/Layout";
import "./assets/images/favicon.ico";
import "./assets/css/libs.min.css";
import "./assets/css/nairobi.css?v=1.0.0";
import Home from "./components/home/home";
import Maps from "./components/maps/maps";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Icons from "./components/iconsJS/icons";
import Error from "./components/error/error";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/maps" element={<Maps />} />
          <Route exact path="/icons" element={<Icons />} />
          <Route exact path="/error" element={<Error />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
