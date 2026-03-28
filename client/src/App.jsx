import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";

import Home from "./pages/Home";
import About from "./pages/About";
import Collection from "./pages/Collection";
import Products from "./pages/Products";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import PageNotFound from "./pages/PageNotFound";
import UserDashboard from "./pages/user/UserDashboard";
import PrivateRoute from "./components/routes/PrivateRoute";

function App() {
  return (
    <div>
        <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="dashboard" element={<PrivateRoute/>}>
              <Route path="" element={<UserDashboard/>} />
        </Route>
        
        <Route path="about" element={<About />} />
        <Route path="collection" element={<Collection />} />
        <Route path="products" element={<Products />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
        <Route path="*" element={<PageNotFound />} />
      </Route>
    </Routes>
    </div>
  );
}

export default App;