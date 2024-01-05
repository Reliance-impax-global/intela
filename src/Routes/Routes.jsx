import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";

import Solution from "../pages/Solution/Solution/Solution";
import Services from "../pages/Services/Service/Services";
import Blog from "../pages/Blog/Blog/Blog";
import About from "../pages/About/About/About";
import Contact from "../pages/Contact/Contact/Contact";
import UnifiedCommunication from "../pages/UnifiedCommunication/UnifiedCommunication/UnifiedCommunication";
import NetworkSecurity from "../pages/NetworkSecurity/NetworkSecurity/NetworkSecurity";
import Application from "../pages/Application/Application/Application";
import ErrorPage from "../pages/ErrorPage/ErrorPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "services",
        element: <Services />,
      },
      {
        path: "solution",
        element: <Solution />,
      },
      {
        path: "blog",
        element: <Blog />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "unified-communication",
        element: <UnifiedCommunication />,
      },
      {
        path: "network-security",
        element: <NetworkSecurity />,
      },
      {
        path: "application",
        element: <Application />,
      },
    ],
  },
]);
