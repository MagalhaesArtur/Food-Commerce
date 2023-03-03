import { Route, Routes } from "react-router-dom";
import FoodModel from "./pages/Main/FoodModel";
import MainPage from "./pages/Main/MainPage";

export interface FoodDataProps {
  type: string;
  name: string;
  description: string;
  price: number;
  image: string;
}

function AppRoutes() {
  const foodData: Array<FoodDataProps> = [
    {
      type: "burguer",
      name: "Mega",
      description:
        "O artesanal tamanho família com três carnes suculentas, queijo e bacon.",
      price: 25.5,
      image: "https://i.imgur.com/upjIUnG.jpg",
    },
    {
      type: "burguer",
      name: "Extra bacon",
      description:
        "Criado para os amantes de bacon, possui em todas as suas camadas bacon bem assado e ainda carne e queijo",
      price: 23.5,
      image: "https://i.imgur.com/B4J04AJ.jpg",
    },
  ];

  return (
    <Routes>
      <Route path="/" element={<MainPage />}>
        <Route
          path="/"
          element={
            <FoodModel
              foodData={foodData}
              type="burguer"
              title="HAMBÚRGUERES"
            />
          }
        />
        <Route
          path="pizzas"
          element={
            <FoodModel foodData={foodData} type="pizza" title="PIZZAS" />
          }
        />
        <Route
          path="drinks"
          element={
            <FoodModel foodData={foodData} type="drink" title="BEBIDAS" />
          }
        />
        <Route
          path="ice-creams"
          element={
            <FoodModel foodData={foodData} type="iceCream" title="SORVETES" />
          }
        />
      </Route>
    </Routes>
  );
}

export default AppRoutes;
