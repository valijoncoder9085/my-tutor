import { Container } from "./style";
import {Outlet} from "react-router-dom";
import Navbar from "../Navbar/index.jsx";
import Footer from "../Footer/Footer.jsx";

const App = () => {
  return (
    <Container>
      <Navbar/>
      <Outlet/>
      <Footer/>
    </Container>
  );
};

export default App;
