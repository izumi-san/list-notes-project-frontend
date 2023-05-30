import { HashRouter, Routes, Route } from "react-router-dom";
import ListNotes from "./pages/ListNotes";

function RoutesReact() {

    return (
        <HashRouter>
            <Routes>
                <Route path="list-notes" element={<ListNotes/>} />
                <Route path="about" element={<h1>ABOUT 123</h1>} />
                <Route path="*" element={<h1>NotFound 404</h1>} />
            </Routes>
        </HashRouter>
    );
}

export default RoutesReact;