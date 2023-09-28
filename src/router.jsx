import { Route, Routes } from "react-router";
import CarsPage from "./pages/carsPage";
const Ruter = () => {
  return (
    <Routes>
      <Route index path="/" element={<CarsPage />} />
    </Routes>
  );
};

export default Ruter;
//import MoviesPage from "./pages/Movies/MoviesPage";
