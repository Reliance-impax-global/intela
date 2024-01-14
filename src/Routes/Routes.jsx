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
import WebDevelopment from "../pages/WebDevelopment/WebDevelopment";
import UiUxDesign from "../pages/UiUxDesign/UiUxDesign";
import CyberSecurity from "../pages/WebHostingSecurity/CyberSecurity";
import PartnerServices from "../pages/PartnerServices/PartnerServices";
import AppDevelopment from "../pages/SoftwareDevelopment/AppDevelopment";

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
        path: "partner-services",
        element: <PartnerServices />,
      },
      {
        path: "app-development",
        element: <AppDevelopment />,
      },
      {
        path: "web-development",
        element: <WebDevelopment />,
      },
      {
        path: "ui-ux-design",
        element: <UiUxDesign />,
      },
      {
        path: "cyber-security",
        element: <CyberSecurity />,
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
