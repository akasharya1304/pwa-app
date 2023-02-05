import { useState } from "react";
import {
    HashRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import Home from "../components/Home";
import JdPrint from "../components/JdPrint";
import ArtworkMaker from "../components/ArtworkMaker"
import SideBar from "../components/SideBar";
import PratibhaArtwork from "../components/PratibhaArtWork";
import PratibhaPrint from "../components/PratibhaPrint";
import Nakd from "../components/Nakd";
import Barcode from "../components/Barcode";
import VinylBarcode from "../components/VinylBarcode";




let MainRouter = () => {
    let buttonData = '';
    const [clickButton , setClickButton] = useState('Home');
    
    function buttonClick(data) {
        buttonData = data;
        setClickButton(buttonData)
    }
    
    
    return (
        <Router>
            <div>
                <SideBar buttonClickedName={clickButton} />
            </div>
            <Routes>
                <Route exact path="/" element={<Home onButton={buttonClick} />} />
                <Route exact path="/jdPrint" element={<JdPrint />} />
                <Route exact path="/artworkMaker" element={<ArtworkMaker />} />
                <Route exact path="/pratibhaArtwork" element={<PratibhaArtwork />} />
                <Route exact path="/pratibhaPrint" element={<PratibhaPrint />} />
                <Route exact path="/nakd" element={<Nakd />} />
                <Route exact path="/barcode" element={<Barcode />} />
                <Route exact path="/vinylBarcode" element={<VinylBarcode />} />
            </Routes>
        </Router>
    )
}

export default MainRouter;