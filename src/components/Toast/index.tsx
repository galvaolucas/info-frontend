import { toast, TypeOptions } from "react-toastify";
import "react-toastify/ReactToastify.min.css";

interface IShowToastProps {
  type: string;
  message: string;
}

export const showToast = ({ type, message }: IShowToastProps) => {
  const types = ["success", "error", "warning", "info"]
    // use a random type of notification
    toast(message, {
      type: types.find((type) => {return type}) as TypeOptions|| "success",
    });
};
