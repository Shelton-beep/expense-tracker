import { Visibility } from "@mui/icons-material";
import Image from "../../assets/images/category1.jpg";
import "./CategoryCard.css";

interface Props {
  count: number;
  handleClick: () => void;
  buttonName: string;
  buttonColor: string;
}

export const CategoryCard = ({
  count,
  handleClick,
  buttonName,
  buttonColor,
}: Props) => {
  return (
    <div>
      <div className="card my-3 imageCard">
        <img src={Image} className="card-img-top" alt="Category Image" />
        <div className="card-body">
          <h5 className="card-title">{count} Categories</h5>
          <button onClick={handleClick} className={"btn btn-" + buttonColor}>
            <Visibility />
            {buttonName}
          </button>
        </div>
      </div>
    </div>
  );
};
