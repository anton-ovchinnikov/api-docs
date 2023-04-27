import Navbar from "./components/UI/Navbar/Navbar";
import {BrowserRouter} from "react-router-dom";
import Footer from "./components/UI/Footer/Footer";

function App() {
    return (
        <BrowserRouter>
            <Navbar/>
            <Footer/>
        </BrowserRouter>
    );
}

export default App;
