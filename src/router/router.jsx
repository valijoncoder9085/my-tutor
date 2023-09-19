import { createBrowserRouter, createRoutesFromElements, Route} from "react-router-dom";
import App from "../components/App/App.jsx";
import About from "../components/About/About.jsx";
import Home from "../components/Home/index.jsx";
import Courses from "../components/Couerses/Courses.jsx";
import Contact from "../components/Contact/Contact.jsx";
import BecomeInstructor from "../components/BecomeInstructor/BecomeInstructor.jsx";
import NotFound from "../components/NotFound/NotFound.jsx";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path={'/'} element={<App/>}>
          <Route index path={'/'} element={<Home/>}></Route>
          <Route path={'/about'} element={<About/>}></Route>
          <Route path={'/courses'} element={<Courses/>}></Route>
          <Route path={'/contact'} element={<Contact/>}></Route>
          <Route path={'/become'} element={<BecomeInstructor/>}></Route>
          <Route path={'*'} element={<NotFound/>}></Route>
        </Route>
    )
)

export { router }