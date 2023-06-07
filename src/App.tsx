import { Routes, Route } from "react-router-dom";
import { TopBar } from "./components/Navs/TopBar";
import { SideBar } from "./components/Navs/SideBar";
import "./App.css";
import { Suspense, lazy } from "react";

const HomePage = lazy(() => import("./pages/homePage/HomePage"));
const CategoriesPage = lazy(
  () => import("./pages/categoriesPage/CategoriesPage")
);
const RevenuePage = lazy(() => import("./pages/revenuePage/RevenuePage"));
const ErrorPage = lazy(() => import("./pages/errorPage/ErrorPage"));

function App() {
  return (
    <>
      <TopBar />
      <div className="appContainer">
        <div className="sideBarContainer">
          <SideBar />
        </div>
        <div className="contentContainer">
          <Suspense fallback={<div className="container">Loading...</div>}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/categories" element={<CategoriesPage />} />
              <Route path="/revenue" element={<RevenuePage />} />
              <Route path="*" element={<ErrorPage />} />
            </Routes>
          </Suspense>
        </div>
      </div>
    </>
  );
}

export default App;
