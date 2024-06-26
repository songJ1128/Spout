import { useState } from "react";
import Searchbar from "./searchbar";
import PlaylistDisplay from "./playlistDisplay";

function PlaylistCard() {
    const [playlist, setPlaylist] = useState([]);
    const addToPlayList = (song) => {
        let tempPlaylist = [];
        for (let i = 0; i < playlist.length; i++) {
            if (playlist[i].id !== song.id) {
                tempPlaylist.push(playlist[i]);
            }
        }
        tempPlaylist.push(song);
        setPlaylist(tempPlaylist);
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