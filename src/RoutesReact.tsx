import { BrowserRouter, Routes, Route } from "react-router-dom";

function RoutesReact() {

    return (
        <BrowserRouter>
            <Routes>
                {/* Componente da tela inicial */}
                <Route index element={<h1>HOME</h1>} />
                {/* Componente de uma rota específica */}
                <Route path="about" element={<h1>ABOUT</h1>} />
                {/* Componente para quando não encontrar uma rota */}
                <Route path="*" element={<h1>NotFound</h1>} />
            </Routes>
        </BrowserRouter>
    );
}

export default RoutesReact;