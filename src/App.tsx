import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Session } from "./pages/Session";

export function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/s/:id" element={<Session />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </div>
  );
}
