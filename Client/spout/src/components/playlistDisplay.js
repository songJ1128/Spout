import { useState } from "react";

function PlaylistDisplay ({playlist}) {
    //TODO Add song info for each song
    
    return (
        <div>
            {playlist.map((song, index) => (
                <div key ={index}>
                    <p>{song.name}</p>
                </div>
            ))}
        </div>
    );
};

export default PlaylistDisplay;