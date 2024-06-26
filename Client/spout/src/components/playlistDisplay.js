import { useState } from "react";

function PlaylistDisplay ({playlist}) {
    //TODO Add song info for each song
    
    return (
        <div>
            {playlist.map((song) => (
                <div key ={song.id}>
                    <div>
                        <img src={song.image} alt="no imag" width="40" height="40"/>
                        {song.name}
                        </div>
                </div>
            ))}
        </div>
    );
};

export default PlaylistDisplay;