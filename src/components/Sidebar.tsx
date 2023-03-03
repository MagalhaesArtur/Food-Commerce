import { ReactSVG } from "react-svg";
import { Button } from "@mui/material";
import { useState } from "react";
import BurgerIcon from "../../assets/burger.svg";
import PizzaIcon from "../../assets/pizza.svg";
import SodaIcon from "../../assets/soda.svg";
import IceCreamIcon from "../../assets/ice-cream.svg";
import "./styles.css";
import menuIcon from "../../assets/menu.svg";
import { NavLink } from "react-router-dom";

function Sidebar() {
  const [currentFood, setCurrentFood] = useState("Hambúrgueres");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const foods = [
    { name: "Hambúrgueres", svg: BurgerIcon, path: "/" },
    { name: "Pizzas", svg: PizzaIcon, path: "pizzas" },
    { name: "Refrigerantes", svg: SodaIcon, path: "drinks" },
    { name: "Sorvetes", svg: IceCreamIcon, path: "ice-creams" },
  ];

  return (
    <aside
      id="sidebarTransition"
      className={`bg-red-600  h-full  ${
        isSidebarOpen ? "w-72" : "w-32"
      } py-8 px-0 overflow-hidden  flex flex-col text-white items-start justify-center `}
    >
      <Button
        id="menuButton"
        onClick={() => {
          setIsSidebarOpen(!isSidebarOpen);
        }}
        className="hover:cursor-pointer !mx-auto  "
      >
        <img src={menuIcon} className="w-12" alt="menuIcon" />
      </Button>
      <nav id="navItens" className=" w-full h-full">
        <ul
          id="navItens"
          className="flex transition-all gap-3 mt-4 justify-center flex-col h-full"
        >
          {foods.map((food) => (
            <li
              onClick={() => {
                setCurrentFood(food.name);
              }}
              key={food.name}
            >
              <div className="flex transition-all  relative gap-3 mt-4 h-full">
                <div
                  id="foodName"
                  className={`w-[5px] h-full !transition-all absolute  bg-yellow-400 rounded-tr-lg rounded-br-lg ${
                    food.name == currentFood ? "" : "hidden"
                  }`}
                ></div>

                <NavLink
                  onClick={() => {
                    document.title = ` Food Commerce  ${
                      food.name != "Hambúrgueres" ? "| " + food.name : ""
                    }
                        `;
                  }}
                  to={food.path}
                  id={food.name == currentFood ? "active" : "item"}
                  className={`  px-8 transition-all flex items-center gap-8`}
                >
                  <ReactSVG src={food.svg} className="w-16 " />
                  <span
                    id="foodName"
                    className={`transition-all text-lg font-bold ${
                      food.name == currentFood
                        ? "text-yellow-400"
                        : "text-white"
                    }`}
                  >
                    <div>{food.name}</div>
                  </span>
                </NavLink>
              </div>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;
