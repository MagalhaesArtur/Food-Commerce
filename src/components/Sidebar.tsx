import { ReactSVG } from "react-svg";
import { Button } from "@mui/material";
import { useState } from "react";
import BurgerIcon from "../../assets/burger.svg";
import PizzaIcon from "../../assets/pizza.svg";
import SodaIcon from "../../assets/soda.svg";
import IceCreamIcon from "../../assets/ice-cream.svg";
import "./styles.css";
import menuIcon from "../../assets/menu.svg";

function Sidebar() {
  const [currentFood, setCurrentFood] = useState("");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const foods = [
    { name: "Hambúrgueres", svg: BurgerIcon },
    { name: "Pizzas", svg: PizzaIcon },
    { name: "Refrigerantes", svg: SodaIcon },
    { name: "Sorvetes", svg: IceCreamIcon },
  ];

  return (
    <aside
      className={`bg-red-600 transition-all h-full  ${
        isSidebarOpen ? "w-72" : "w-32"
      } py-8 px-0 overflow-hidden transition-all flex flex-col text-white items-start justify-center `}
    >
      <Button
        onClick={() => {
          setIsSidebarOpen(!isSidebarOpen);
          if (isSidebarOpen) {
            setCurrentFood("");
          }
        }}
        className="hover:cursor-pointer !mx-auto  "
      >
        <img src={menuIcon} className="w-12" alt="menuIcon" />
      </Button>
      <nav className="flex-1 w-full h-full">
        <ul className="flex transition-all gap-3 mt-4 justify-center flex-col h-full">
          {foods.map((food) => (
            <li
              onClick={() => {
                setCurrentFood(food.name);
              }}
              key={food.name}
            >
              <div className="flex transition-all relative gap-3 mt-4 h-full">
                <div
                  className={`w-[5px] h-full !transition-all absolute  bg-yellow-400 rounded-tr-lg rounded-br-lg ${
                    food.name == currentFood ? "" : "hidden"
                  }`}
                ></div>
                <a
                  href="#"
                  id={food.name == currentFood ? "active" : ""}
                  className={`  px-8 transition-all flex items-center gap-8`}
                >
                  <ReactSVG src={food.svg} className="w-16 " />
                  <span
                    className={`transition-all text-lg font-bold ${
                      food.name == currentFood
                        ? "text-yellow-400"
                        : "text-white"
                    }`}
                  >
                    {food.name}
                  </span>
                </a>
              </div>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;
