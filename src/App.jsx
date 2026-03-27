import { Suspense, useState } from "react";
import "./App.css";
import Banner from "./components/HomePage/Banner/Banner";
import Players from "./components/HomePage/Players/Players";
import Navbar from "./components/Navbar/Navbar";
import { ToastContainer } from "react-toastify";

const fetchPlayer = async () => {
    const res = await fetch("./data.json");
    return res.json();
};

function App() {
    const playersPromise = fetchPlayer();
    const [coin, setCoin] = useState(10000);
    return (
        <>
            <Navbar coin={coin}></Navbar>

            <Banner></Banner>

            <Suspense fallback={<span className="loading loading-bars loading-xl"></span>}>
                <Players coin={coin} setCoin={setCoin} playersPromise={playersPromise}></Players>
            </Suspense>


            {/* react tostify container */}
            <ToastContainer></ToastContainer>
        </>
    );
}

export default App;
