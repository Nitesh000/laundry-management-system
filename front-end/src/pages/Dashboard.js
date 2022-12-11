import Header from "../component/Header";
import ClientTable from "../component/ClientTable";
import AdminTable from "../component/AdminTable";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Cookie from "js-cookie";

const Dashboard = () => {
  const [isAdmin, setIsAdmin] = useState(null);
  const [data, setData] = useState({});
  const navigate = useNavigate();
  const { userId } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `http://localhost:3030/dashboard/${userId}`,
        {
          credentials: "include"
        }
      );
      if (!response.ok) navigate("/login");
      const resData = await response.json();
      console.log(resData);
      setData(resData);
      setIsAdmin(resData.isAdmin);
    };

    fetchData();
  }, [userId, navigate, data.status]);

  const link = [
    {
      display: "Home",
      link: "/"
    }
  ];

  const logoutHandler = () => {
    Cookie.remove("token", { path: "/" });
    navigate("/", { replace: true });
  };

  return (
    <>
      <Header title={data.name} links={link} />
      <button
        className="rounded-md bg-gray-400 border-gray-700 hover:bg-gray-700 hover:text-white px-4 py-2 ml-4 mt-2"
        onClick={logoutHandler}
      >
        Logout
      </button>
      {!isAdmin ? (
        <ClientTable name={data.name} status={data.status} />
      ) : (
        <AdminTable users={data.users} />
      )}
    </>
  );
};

export default Dashboard;
