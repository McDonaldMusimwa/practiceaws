import { createBrowserRouter } from "react-router";
import Home from "./pages/Questionare";
import About from "./pages/Home";
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";
import SolutionsArchitect from "./pages/Exam/SolutionsArchitect";
import Practitioner from "./pages/Exam/Practioner";
const router = createBrowserRouter([
    {
        path: "/",
        Component: Home,
        children: [
            { index: true, Component: Home },
            { path: "saa03", Component: SolutionsArchitect },
            { path: "pactioner", Component: Practitioner },
            { path: "about", Component: About },
            {
                path: "auth",
                Component: Login,
                children: [
                    { path: "login", Component: Login },
                    { path: "register", Component: Register },
                ],
            },
            { /*  
      {
        path: "concerts",
        children: [
          { index: true, Component: ConcertsHome },
          { path: ":city", Component: ConcertsCity },
          { path: "trending", Component: ConcertsTrending },
        ],
      },
       */}
        ],
    },
]);


export default router;