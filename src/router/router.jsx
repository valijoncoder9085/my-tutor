import { createBrowserRouter, createRoutesFromElements, Route} from "react-router-dom";
import App from "../components/App/App.jsx";
import About from "../components/About/About.jsx";
import HomePage from "../components/HomePage/HomePage.jsx";
import Courses from "../components/Courses/Courses.jsx";
import Contact from "../components/Contact/Contact.jsx";
import BecomeInstructor from "../components/BecomeInstructor/BecomeInstructor.jsx";
import NotFound from "../components/NotFound/NotFound.jsx";
import SignUp from "../components/SignUp/SignUp.jsx";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path={'/'} element={<App/>}>
          <Route index path={'/'} element={<HomePage/>}></Route>
          <Route path={'/about'} element={<About/>}></Route>
          <Route path={'/courses'} element={<Courses/>}></Route>
          <Route path={'/contact'} element={<Contact/>}></Route>
          <Route path={'/become-instructor'} element={<BecomeInstructor/>}></Route>
          <Route path={'*'} element={<NotFound/>}></Route>
          <Route path={'/sign-up'} element={<SignUp/>}></Route>
        </Route>
    )
)

export { router }