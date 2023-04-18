import { BrowserRouter, Routes, Route } from "react-router-dom";

function RoutesReact() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="list-notes" element={<h1>HOME 1</h1>} />
                <Route path="about" element={<h1>ABOUT 123</h1>} />
                <Route path="*" element={<h1>NotFound 404</h1>} />
            </Routes>
        </BrowserRouter>
    );
}

export default RoutesReact;