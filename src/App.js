import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { APP_ROUTES } from "./constants/routes";
import HomePage from "./pages/Home";
import AboutPage from "./pages/About";
import TopicPage from "./pages/Topic";
import HeaderComponent from "./components/HeaderComponent";
import LoginPage from "./pages/LoginPage";
import ProductDetail from "./pages/ProductDetail";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <HeaderComponent />
        <Routes>
          <Route path="/" element={<Navigate to={APP_ROUTES.HOME_PAGE} />} />
          <Route path={APP_ROUTES.HOME_PAGE} element={<HomePage />} />
          <Route path={APP_ROUTES.ABOUT_PAGE} element={<AboutPage />} />
          <Route path={APP_ROUTES.TOPIC_PAGE} element={<TopicPage />} />
          <Route path={APP_ROUTES.LOGIN_PAGE} element={<LoginPage />} />
          <Route
            path={APP_ROUTES.PRODUCT_DETAILS}
            element={<ProductDetail />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
