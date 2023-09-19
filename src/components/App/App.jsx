import { Container } from "./style";
import {Outlet} from "react-router-dom";
import Navbar from "../Navbar/index.jsx";

const App = () => {
  return (
    <Container>
      <Navbar/>
      <Outlet/>
    </Container>
  );
};

export default App;
