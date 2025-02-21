import { BrowserRouter, Routes, Route } from "react-router";
import AuthLayout from "./_components/auth/AuthLayout";
import Home from "./_components/home/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/sign-in" element={<AuthLayout />} />
        <Route path="/sign-up" element={<AuthLayout />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
