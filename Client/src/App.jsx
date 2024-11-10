import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import React from "react";
import Homepage from "./pages/Homepage";
import MainLayout from "./layouts/MainLayout";
import Loginpage from "./pages/Loginpage";
import Sellpage from "./pages/Sellpage";
import Tradepage from "./pages/Tradepage";
import Buypage from "./pages/Buypage";
import Productpage from "./pages/Productpage";

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Homepage />} />
        <Route path="/login" element={<Loginpage />} />
        <Route path="/sell" element={<Sellpage />} />
        <Route path="/buy" element={<Buypage />} />
        <Route path="/trade" element={<Tradepage />} />
        <Route path="/product" element={<Productpage />} />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
};

export default App;
