import SnackCard from "../../components/SnackCard";
import { FoodDataProps } from "../../routes";
import "./styles.css";

export interface FoodModelProps {
  title: string;
  type: string;
  foodData: Array<FoodDataProps>;
}

function FoodModel({ title, type, foodData }: FoodModelProps) {
  return (
    <>
      <div className="flex items-center gap-3">
        <div className="bg-white w-10 h-1 rounded-xl"></div>
        <h1 className="text-white text-4xl font-semibold">{title}</h1>
      </div>
      <div id="gridBox">
        {foodData.map((food) => (
          <SnackCard key={food.type + food.name} type={type} data={food} />
        ))}
      </div>
    </>
  );
}

export default FoodModel;
