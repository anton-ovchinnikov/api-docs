import Navbar from "./components/UI/Navbar/Navbar";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Footer from "./components/UI/Footer/Footer";
import HomePage from "./pages/HomePage/HomePage";
import ContactsPage from "./pages/ContactsPage/ContactsPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";

function App() {
    return (
        <BrowserRouter>
            <Navbar/>
            <Routes>
                <Route element={<HomePage/>} path='/'/>
                <Route element={<ContactsPage/>} path='/contacts'/>
                <Route element={<NotFoundPage/>} path='*'/>
            </Routes>
            <Footer/>
        </BrowserRouter>
    );
}

export default App;
