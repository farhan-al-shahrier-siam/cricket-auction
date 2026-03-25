import React, { use } from 'react';

const Players = ({playersPromise}) => {
    const players = use(playersPromise)
    console.log(players)
    return (
        <div>
            Players: {players.length}
        </div>
    );
};

export default Players;