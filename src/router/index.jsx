import { BrowserRouter, Routes, Route } from "react-router-dom";
import { About, BuyService, Home, Benefits, Contact,Login, Profile } from "../pages";
import { Layout } from "../Components";
export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/buyService" element={<BuyService />} />
          <Route path="/benefits" element={<Benefits />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/consulta-placa" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
