interface Props {
  handleClick: () => void;
  buttonName: string;
  buttonColor?: "primary" | "success" | "danger";
}

const AddExpenseButton = ({
  handleClick,
  buttonName,
  buttonColor = "success",
}: Props) => {
  return (
    <>
      <button className={"btn btn-" + buttonColor} onClick={handleClick}>
        {buttonName}
      </button>
    </>
  );
};

export default AddExpenseButton;
