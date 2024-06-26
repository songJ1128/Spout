import { useState } from "react";
import Searchbar from "./searchbar";
import PlaylistDisplay from "./playlistDisplay";

function PlaylistCard() {
    const [playlist, setPlaylist] = useState([]);
    const addToPlayList = (song) => {
        setPlaylist([...playlist, song]);
        console.log(playlist);
    }
    return (
        <>
            <Searchbar addToPlaylist={addToPlayList}></Searchbar>
            <PlaylistDisplay playlist={playlist}></PlaylistDisplay>
        </>
    );
}

export default PlaylistCard;