import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Screenings from "./pages/screenings";
import Movies from "./pages/Movies";
import NoPage from "./pages/NoPage";
import Book from "./pages/Book";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Movies/>} />
          <Route path="screenings" element={<Screenings />} />
          <Route path="movies" element={<Movies />} />
          <Route path="DisplaySeats/:id" element={<Book/>} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);