import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import HomePage from "../pages/HomePage/HomePage";
import SearchPage from "../pages/SearchPage/SearchPage";
import CompanyPage from "../pages/CompanyPage/CompanyPage.1";
import DesignGuide from "../pages/DesignGuide/DesignGuide";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "", element: <HomePage /> },
      { path: "search", element: <SearchPage /> },
      { path: "company/:ticker", element: <CompanyPage /> },
      { path: "design-guide", element: <DesignGuide /> },
    ],
  },
]);
