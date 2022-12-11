const Card = (props) => {
  return (
    <div className="flex justify-center items-center py-12">
      <div className="border border-blue-400 w-1/3 rounded-lg">
        <div className="flex justify-center bg-[#9C9EFE]">
          <h2 className="text-white text-xl font-semibold py-4">
            {props.title}
          </h2>
        </div>
        <div>{props.children}</div>
      </div>
    </div>
  );
};

export default Card;
