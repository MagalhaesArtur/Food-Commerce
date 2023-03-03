import { Button, IconButton } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import Add from "@mui/icons-material/Add";

interface FoodDataProps {
  data: {
    type: string;
    name: string;
    description: string;
    price: number;
    image: string;
  };
  type: string;
}

function SnackCard({ data, type }: FoodDataProps) {
  return (
    <>
      {data.type == type ? (
        <div className="max-w-[550px] border-2 border-gray-800 flex gap-3 flex-col p-[1.75rem] rounded-lg text-white bg-[#09071c]">
          <h2 className="text-3xl mb-3 font-bold">{data.name}</h2>
          <img
            className="max-w-[100%] h-[11.75rem] object-cover rounded-md max-h-[200px]"
            src={data.image}
            alt={data.type + data.name}
          />
          <p className="text-lg mt-3">{data.description}</p>
          <div className="flex mt-3 justify-between">
            <strong className="text-2xl">R$ {data.price}</strong>
            <IconButton
              aria-label="Add"
              className="!text-white !bg-red-600 hover:!bg-red-800 transition-all"
              size="large"
              color="primary"
            >
              <Add />
            </IconButton>
          </div>
        </div>
      ) : null}
    </>
  );
}

export default SnackCard;
