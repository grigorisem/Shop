import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Catalog } from "./pages/Catalog.tsx";
//import NotFound from "./pages/NotFound";
import { Link } from "react-router-dom";
import { Header } from "./components/Header";
import { NavbarRegistration } from "./components/NavbarRegistration";
import { Slider } from "./components/Slider";
import { Goods } from "./components/Goods";
import { AuthProvider, useAuth } from "./context/AuthContext";
import { NewGoods } from "./components/NewGoods";
import { productsData, slides } from "./data/ProductsData.tsx";
import { ProductPage } from "./components/ProductPage.tsx";
import LoginPage from "./pages/Login.tsx";
import RegisterPage from "./pages/Register.tsx";

function HomePage() {
  const { userName, logout } = useAuth();

  return (
    <>
      <NavbarRegistration />
      <Header />

      <div className="p-4 text-center">
        {userName ? (
          <div>
            <h2 className="text-xl font-bold">Привет, {userName}! 👋</h2>
          </div>
        ) : (
          <h2 className="text-xl font-bold">Добро пожаловать, гость!</h2>
        )}
      </div>

      <Slider>
        {slides.map((s, index) => (
          <img
            key={`slides-${index}`}
            src={s}
            className="w-full h-full object-center rounded-2xl max-h-[700px] object-contain"
          />
        ))}
      </Slider>

      <Goods>
        {productsData.map((item, index) => (
          <div
            key={`goods-${index}`}
            className={`relative w-full h-full ${
              index < 2 ? "h-[800px]" : "h-[420px]"
            }`}
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-[60px] left-[30px] text-white text-lg font-semibold bg-black/60 px-3 py-1 rounded">
              {item.title}
            </div>
            <Link
              to={`/product/${item.id}`}
              className="absolute bottom-[20px] left-[30px] px-4 py-2 bg-blue-500 text-white text-sm rounded hover:bg-blue-600"
            >
              Подробнее
            </Link>
          </div>
        ))}
      </Goods>

      <NewGoods>
        {productsData.slice(-4).map((item, index) => (
          <div
            key={`goods-${index}`}
            className={`relative w-full h-full ${
              index < 2 ? "h-[800px]" : "h-[500px]"
            }`}
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-[60px] left-[30px] text-white text-lg font-semibold bg-black/60 px-3 py-1 rounded">
              {item.title}
            </div>
            <Link
              to={`/product/${item.id}`}
              className="absolute bottom-[20px] left-[30px] px-4 py-2 bg-blue-500 text-white text-sm rounded hover:bg-blue-600"
            >
              Подробнее
            </Link>
          </div>
        ))}
      </NewGoods>
    </>
  );
}

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/product/:id" element={<ProductPage />} />
          {/* <Route path="*" element={<NotFound />} /> */}
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
