import { BrowserRouter, Routes, Route } from "react-router";
import AuthLayout from "./_components/auth/AuthLayout";
import Home from "./_components/core/Home";
import Trending from "./_components/core/Trending";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/trending" element={<Trending />} />
        <Route path="/sign-in" element={<AuthLayout />} />
        <Route path="/sign-up" element={<AuthLayout />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
