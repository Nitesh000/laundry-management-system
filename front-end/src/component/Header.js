import { NavLink } from "react-router-dom";

const Header = (props) => {
  return (
    <div className="bg-blue-300 flex justify-between">
      <div className="px-8 py-6">
        <h1 className="text-3xl text-white font-bold">{props.title}</h1>
      </div>
      <div className="px-8 py-6">
        {props.links.map((singleLink, index) => (
          <NavLink
            className="text-white text-lg font-semibold hover:text-blue-600 px-2"
            to={singleLink.link}
            key={index}
          >
            {singleLink.display}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Header;
