import { useRef } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Button from "../component/Button";
import Card from "../component/Card";
import Header from "../component/Header";
import Input from "../component/Input";

const Login = () => {
  const navigate = useNavigate();
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const link = [
    {
      display: "Home",
      link: "/"
    },
    {
      display: "About",
      link: "/about"
    },
    {
      display: "SignUp",
      link: "/signup"
    }
  ];

  const formSubmitHandler = async (e) => {
    e.preventDefault();
    const fetchRequest = async () => {
      let data = {};
      data.email = emailInputRef.current.value;
      data.password = passwordInputRef.current.value;
      const response = await fetch("http://localhost:3030/login", {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      });
      const resData = await response.json();
      if (resData) {
        navigate(`/dashboard/${resData.result._id}`, { replace: false });
      }
    };

    try {
      fetchRequest();
    } catch (error) {
      navigate("/", { replace: true });
    }
  };

  return (
    <>
      <Header title="Login" links={link} />
      <main>
        <Card title="Login">
          <form onSubmit={formSubmitHandler}>
            <Input
              ref={emailInputRef}
              type="email"
              name="email"
              label="Email"
            />
            <Input
              ref={passwordInputRef}
              type="password"
              name="password"
              label="Password"
            />
            <Button type="submit" label="Login" />
            <span className="flex justify-center pb-4">
              Don't have an account! &nbsp;
              <NavLink className="text-blue-500 underline" to="/signup">
                signup
              </NavLink>
            </span>
          </form>
        </Card>
      </main>
    </>
  );
};

export default Login;
