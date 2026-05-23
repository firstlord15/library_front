import { BrowserRouter, Routes, Route } from "react-router";
import HomePage from "../pages/public/HomePage";
import LoginPage from "../pages/public/LoginPage";
import RegisterPage from "../pages/public/RegisterPage";

const AppRouter = () => (
    <BrowserRouter>
        <Routes>
            {/* Публичные */}
            <Route path="/" element={ <HomePage /> } />
            <Route path="/login" element={ <LoginPage /> } />
            <Route path="/register" element={ <RegisterPage /> } />
            
            {/* ── Авторизованные ── */}
            {/* ── Только ADMIN ── */}
            {/* ── ADMIN или MODERATOR ── */}
            {/* ── Fallback ── */}
        </Routes>
    </BrowserRouter>
);

export default AppRouter;