import Header from "../component/Header";

const About = () => {
  const link = [
    {
      display: "Home",
      link: "/"
    },
    {
      display: "Login",
      link: "/login"
    },
    {
      display: "SignUp",
      link: "/signup"
    }
  ];

  return (
    <>
      <Header title="About" links={link} />
      <main className="flex justify-center items-center bg-gray-300 h-screen">
        <h2 className="text-black text-xl px-4">
          Just a demo project for the laundry management system where the user
          can see the status of his laundry, means he can check time to time if
          the laundry has been finished or not, so he/she don't have to call the
          manager all the time and ask about the laundry.
        </h2>
      </main>
      <footer className="bg-gray-300 flex justify-center items-center text-gray-600">
        just a demo footer
      </footer>
    </>
  );
};

export default About;
