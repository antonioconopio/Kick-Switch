import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import axios from "axios";
import { FaTrash } from "react-icons/fa";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../state/store";
import { refresh } from "@/state/mylisting/mylistingState";

const ShoeCard = ({
  id,
  name,
  size,
  image,
  price,
}: {
  id: number;
  name: string;
  size: number | string;
  image: string;
  price: number | string;
}) => {
  const user = useSelector((state: RootState) => state.user);
  const refreshState = useSelector((state: RootState) => state.mylisting);
  const dispatch = useDispatch();
  const [imageData, setImageData] = useState(null);
  
  useEffect(() => {
  const fetchImage = async () => {
    try {
      const response = await axios.get(`/api/uploads/images/${image}`);
      setImageData(response.data);
    } catch (error) {
      console.error(error);
    }
  };
}, [image]);

  const handleDelete = () => {
    try {
      axios.delete(`http://localhost:8800/api/listings/${id}`, {
        headers: {
          Authorization: `Bearer ${user.token}`,
          "Content-Type": "application/json",
        },
      });
      dispatch(refresh());
      console.log("Deleted successfully");
      console.log(refreshState);
    } catch (error) {
      console.error("Unexpected error:", error);
    }
  };

  return (
    <Card className="p-2 max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg" key={id}>
      <button className="float-right text-xs" onClick={handleDelete}>
        <FaTrash />
      </button>
      <CardHeader>
        <CardTitle>{name}</CardTitle>

        <div className="flex justify-center items-center">
          <img
            className="w-[80%] h-auto object-cover rounded-md"
            src={imageData || "/default-image.jpg"}
            alt={name}
          />
        </div>
        <CardDescription>
          Size: {size} <br />
          Price: ${price}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex sm:flex-row flex-col justify-center items-center ">
          <button className="border-[0.5px] rounded-sm py-1 px-2 text-green-600 hover:bg-green-600 hover:text-white w-full sm:w-auto mx-1">
            BUY
          </button>
          <button className="border-[0.5px] rounded-sm py-1 px-2 text-red-600 hover:bg-red-600 hover:text-white w-full sm:w-auto mx-1">
            SELL
          </button>
          <button className="border-[0.5px] rounded-sm py-1 px-2 hover:bg-black hover:text-white w-full sm:w-auto mx-1">
            TRADE
          </button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ShoeCard;
