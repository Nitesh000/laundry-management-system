import { useRef } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Button from "../component/Button";
import Card from "../component/Card";
import Header from "../component/Header";
import Input from "../component/Input";

const Signup = () => {
  const navigate = useNavigate();
  const nameInputRef = useRef();
  const emailInputRef = useRef();
  const phoneInputRef = useRef();
  const addressInputRef = useRef();
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
      display: "Login",
      link: "/login"
    }
  ];

  const formSubmitHandler = async (e) => {
    e.preventDefault();
    const postForm = async () => {
      let data = {
        name: nameInputRef.current.value,
        email: emailInputRef.current.value,
        phone: phoneInputRef.current.value,
        address: addressInputRef.current.value,
        password: passwordInputRef.current.value
      };
      const response = await fetch("http://localhost:3030/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      });
      const res = await response.json();
      return res;
    };
    try {
      const data = await postForm();
      console.log(data);
      navigate("/login", { replace: true });
    } catch (error) {
      navigate("/");
    }
  };

  return (
    <>
      <Header title="SignUp" links={link} />
      <main>
        <Card title="Signup">
          <form onSubmit={formSubmitHandler}>
            <Input ref={nameInputRef} type="text" name="name" label="Name" />
            <Input
              ref={emailInputRef}
              type="email"
              name="email"
              label="Email"
            />
            <Input
              ref={phoneInputRef}
              type="number"
              name="phone"
              label="Phone No."
            />
            <Input
              ref={addressInputRef}
              type="text"
              name="address"
              label="Address"
            />
            <Input
              ref={passwordInputRef}
              type="password"
              name="password"
              label="Password"
            />
            <Button type="submit" label="SignUp" />
            <span className="flex justify-center pb-4">
              Already have an account! &nbsp;
              <NavLink className="text-blue-500 underline" to="/login">
                Login
              </NavLink>
            </span>
          </form>
        </Card>
      </main>
    </>
  );
};

export default Signup;
