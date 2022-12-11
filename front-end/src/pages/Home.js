import Header from "../component/Header";

const Home = () => {
  const link = [
    {
      display: "About",
      link: "/about"
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
      <Header title="Home" links={link} />
      <main className="flex justify-center items-center bg-gray-300 h-screen">
        <h2 className="text-black text-xl">
          This is just a demo project about the laundry management system.
        </h2>
      </main>
      <footer className="bg-gray-300 flex justify-center items-center text-gray-600">
        just a demo footer
      </footer>
    </>
  );
};

export default Home;
