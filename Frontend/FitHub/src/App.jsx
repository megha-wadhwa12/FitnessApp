import "./App.css";
import Login from "./Components/Login";
import AllRoutes from "./Components/Routes/AllRoutes";
import Diary from "./Components/Diary";
import SignUp from "./Components/SignUp";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

const App = () => {
  return (
    <>
      <Navbar />
      <AllRoutes />
      <Footer/>
    </>
  );
};

export default App;
