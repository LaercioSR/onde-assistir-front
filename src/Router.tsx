import { Routes, Route } from "react-router-dom";
import { DefaultLayout } from "./layouts/DefaultLayout";
import { Home } from "./pages/Home";
import { Team } from "./pages/Team";
import { NotFound } from "./pages/NotFound";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/:name" element={<Team />} />
        <Route path="/" element={<Home />} />
        <Route path="404" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
