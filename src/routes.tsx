import { Route, Routes } from "react-router-dom";
import Burgers from "./pages/Main/Burgers";
import IceCream from "./pages/Main/IceCream";
import MainPage from "./pages/Main/MainPage";
import Pizzas from "./pages/Main/Pizzas";
import Refris from "./pages/Main/Refris";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />}>
        <Route path="/" element={<Burgers />} />
        <Route path="pizzas" element={<Pizzas />} />
        <Route path="soda" element={<Refris />} />
        <Route path="icecream" element={<IceCream />} />
      </Route>
    </Routes>
  );
}

export default AppRoutes;
