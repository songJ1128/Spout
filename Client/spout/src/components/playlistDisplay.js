import { useState } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
function PlaylistDisplay ({playlist}) {
    const [playlistName, setPlaylistName] = useState("Epic Music");
    const navigate = useNavigate();
    const handleNameChange = (e) => {
        setPlaylistName(e.target.value);
    };
    const handlePlaylistSubmit = async () => {
        try {
            console.log(playlist);
            const response = await axios.post('http://localhost:8080/songQuery/addPlaylist', {playlistName: playlistName, playlist: playlist,});
            console.log("Success");
            navigate('/voting');
        } catch(error) {
            console.log("Error" , error);
        }
    }
    return (
        <div>
            <div>
                <input
                    type="text"
                    value={playlistName}
                    onChange={handleNameChange}
                    
                />
            </div>
            {playlist.map((song) => (
                <div key ={song.id}>
                    <div>
                        <img src={song.image} alt="no imag" width="40" height="40"/>
                        {song.name}
                        </div>
                </div>
            ))}
            <div>
                <button onClick={handlePlaylistSubmit}>
                    Submit
                </button>
            </div>
        </div>
    );
};

export default PlaylistDisplay;