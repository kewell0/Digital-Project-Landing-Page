import { Outlet } from "react-router-dom";
import { Navbar } from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
