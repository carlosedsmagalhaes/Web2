import { BrowserRouter, Route, Routes } from "react-router";
import Menu from "./components/Header";
import Home from "./components/Home";
import Palpite from "./components/Palpite";
import Historico from "./components/Historico";
import { PalpiteProvider } from "./contexts/Context";

export default function App() {
  return (
    <PalpiteProvider>
      <BrowserRouter>
        <Menu />
        <Rotas />
      </BrowserRouter>
    </PalpiteProvider>
  );
}

function Rotas() {
  return (
    <Routes>
      <Route path="*" element={<Home />} />
      <Route path="/palpite" element={<Palpite />} />
      <Route path="/historico" element={<Historico />} />
    </Routes>
  );
}
