import { Route, Router, Routes } from "@solidjs/router";
import Home from "./pages/Home";
import SortableDnd from "./pages/sortable-dnd/SortableDnd";

export function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sortable-dnd" element={<SortableDnd />} />
      </Routes>
    </Router>
  );
}
