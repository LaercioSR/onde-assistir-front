import { Routes, Route } from "react-router-dom";
import { DefaultLayout } from "./layouts/DefaultLayout";
import { Home } from "./pages/Home";
import { Team } from "./pages/Team";
import { NotFound } from "./pages/NotFound";
import { About } from "./pages/About";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/404" element={<NotFound />} />
        <Route path="/about" element={<About />} />
        <Route path="/:name" element={<Team />} />
      </Route>
    </Routes>
  );
}
