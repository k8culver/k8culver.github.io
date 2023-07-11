import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import StyleGuide from "./pages/StyleGuide";
import Lost from "./pages/Lost";


function Pages() {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/style-guide" element={<StyleGuide />} />
                <Route path="*" element={<Lost />} />
            </Routes>
        </BrowserRouter>
      
    );
  }
  
  export default Pages;
  