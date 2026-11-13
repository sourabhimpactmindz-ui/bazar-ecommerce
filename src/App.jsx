import Home from "./pages/Home.jsx";
import useSmoothScroll from "./hooks/useSmoothScroll.js";

// Routing goes here later (e.g. react-router). For now there is one page.
export default function App() {
  useSmoothScroll();
  return <Home />;
}
