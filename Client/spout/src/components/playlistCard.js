import { useState } from "react";
import Searchbar from "./searchbar";
import PlaylistDisplay from "./playlistDisplay";

function PlaylistCard() {
    const [playlist, setPlaylist] = useState([{name: "aba"},{name: "debn"}]);

    return (
        <>
            <Searchbar setPlaylist={setPlaylist}></Searchbar>
            <PlaylistDisplay playlist={playlist}></PlaylistDisplay>
        </>
    );
}

export default PlaylistCard;