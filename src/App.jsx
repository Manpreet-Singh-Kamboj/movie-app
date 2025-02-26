import { BrowserRouter, Routes, Route } from "react-router";
import AuthLayout from "./_components/auth/AuthLayout";
import Home from "./_components/core/Home";
import Trending from "./_components/core/Trending";
import MovieDetails from "./_components/core/MovieDetails";
import MoviePlayer from "./_components/core/_components/MoviePlayer";
import Discover from "./_components/core/Discover";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/trending" element={<Trending />} />
        <Route path="/discover" element={<Discover />} />
        <Route path="/movie/:id/details" element={<MovieDetails />} />
        <Route path="/movie/watch/:id" element={<MoviePlayer />} />
        <Route path="/sign-in" element={<AuthLayout />} />
        <Route path="/sign-up" element={<AuthLayout />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
