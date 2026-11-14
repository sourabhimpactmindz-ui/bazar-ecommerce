import useSmoothScroll from "./hooks/useSmoothScroll.js";
import { RouterProvider } from "react-router-dom";
import router from "./route/router.jsx";

export default function App() {
  useSmoothScroll();
  return (
    <>
    <RouterProvider router={router} />
    </>
  );
}
