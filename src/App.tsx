import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Session } from "./pages/Session";
import { SectionPage } from "./pages/SectionPage";
import { Zen } from "./pages/Zen";
import { Books } from "./pages/Books";

export function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/section/:id" element={<SectionPage />} />
        <Route path="/s/:id" element={<Session />} />
        <Route path="/zen" element={<Zen />} />
        <Route path="/books" element={<Books />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </div>
  );
}
