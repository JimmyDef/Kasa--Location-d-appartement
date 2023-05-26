import {
  Route,
  createRoutesFromElements,
  createHashRouter,
  RouterProvider,
} from "react-router-dom";
import NotFound from "./pages/404/NotFound";
import About from "./pages/about/About";
import Home from "./pages/home/Home";
import RootLayout from "./layout/RootLayout";
import Accomodation from "./pages/accomodation/Accomodation";

const router = createHashRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="Kasa--Location-d-appartement/" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="accomodation/:id" element={<Accomodation />} />
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
