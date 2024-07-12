import { useRef } from "react";
import { handleMouseEnter } from "../hoverPlaySong";
import { handleMouseLeave } from "../hoverPlaySong";
function Playlist({playlist, audioRef, tooltipRef}){
    console.log(playlist);
    

    return (
        <div>
            <div>
                {playlist.name}
            </div>
        {playlist.tracks.map((track) => (
            <ul>
            <div key ={track.id}>
                <li key={track.id} onMouseEnter={(event) => handleMouseEnter(track.preview_url, event, tooltipRef, audioRef)}
                onMouseLeave={() => handleMouseLeave(track.preview_url, tooltipRef, audioRef)}
                >
                <img src={track.image} alt="no track pic" width="40" height="40"/>
                {track.name}
              </li>
              <audio ref={audioRef} />
              <div ref={tooltipRef} className="tooltip"></div>
            </div>
            </ul>
        ))}
        </div>
    );
};

export default Playlist;