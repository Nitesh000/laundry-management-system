const Button = (props) => {
  return (
    <div className="flex justify-center items-center my-4">
      <button className="bg-[#9C9EFE] px-4 py-2 rounded-md" type={props.type}>
        {props.label}
      </button>
    </div>
  );
};

export default Button;
