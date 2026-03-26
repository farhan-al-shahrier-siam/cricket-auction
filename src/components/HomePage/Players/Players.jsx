import React, { use, useState } from "react";
import AvailablePlayers from "../../AvailablePlayers/AvailablePlayers";
import SelectedPlayers from "../../SelectedPlayers/SelectedPlayers";

const Players = ({ playersPromise, setCoin, coin }) => {
    const players = use(playersPromise);
    // console.log(players)

    const [toggle, setToggle] = useState(true);
    return (
        <div className="container mx-auto my-16">
            <div className="flex justify-between items-center mb-16">
                <div>{toggle === true ? <h2 className="font-bold text-3xl">Available Players</h2> : <h2 className="font-bold text-3xl">Selected Players(0/{players.length})</h2>}</div>
                <div>
                    <button onClick={() => setToggle(true)} className={`btn rounded-r-none ${toggle === true ? "bg-[#E7FE29]" : "bg-white"} rounded-l-xl`}>
                        Available
                    </button>
                    <button onClick={() => setToggle(false)} className={`btn rounded-l-none ${toggle === false ? "bg-[#E7FE29]" : "bg-white"} rounded-r-xl`}>
                        Selected (0)
                    </button>
                </div>
            </div>

            {toggle === true ? <AvailablePlayers coin={coin} setCoin={setCoin} players={players}></AvailablePlayers> : <SelectedPlayers></SelectedPlayers>}
        </div>
    );
};

export default Players;
