//import { format } from "mysql2";
import { useRef, useState } from "react";
import { useEffect } from "react";
import axios from 'axios';
//import debounce from 'lodash/debounce';

function Searchbar({addToPlaylist}) {
    const [searchQuery, setSearchQuery] = useState("");
    const [songDisplay, setSongDisplay] = useState([{name: "kjqbd", id: "1"},{name:"mmmm", id:"2"},{name:"jlwenf", id:"3"}]);
    
    //TODO implement the add song to playlist function using setPlayist i.e setPlaylist(playlist => {...playlist, song})
    const handleSearch = async(val) => {
        setSearchQuery(val);

        if (val) {
            try {
              const response = await axios.get(`http://localhost:8080/songQuery`, {
                params: {q: val},
              });
              setSongDisplay(response.data);
              console.log(response.data);
            } catch (error) {
              console.error('Error fetching data from server', error);
            }
          } 
        };

        const audioRef = useRef(null);
        const tooltipRef = useRef(null);

        const handleMouseEnter = async (previewUrl, e) => {
          if (!previewUrl && tooltipRef.current) {
            const tooltip = tooltipRef.current;
            tooltip.style.display = 'block';
            tooltip.style.left = `${e.pageX + 10}px`;
            tooltip.style.top = `${e.pageY + 10}px`;
          }
          else if (previewUrl && audioRef.current) {
            try {
              await audioRef.current.pause(); // Pause the current audio 
              audioRef.current.src = previewUrl;
              await audioRef.current.play(); // Play the new audio
            } catch (error) {
              console.error(error);
            }
          }
        };
      
        const handleMouseLeave = (previewUrl) => {
          if (previewUrl && audioRef.current) {
            audioRef.current.pause();
            audioRef.current.src = "";
          }
          if (tooltipRef.current) {
            tooltipRef.current.style.display = 'none';
          }
        };
      
        const handleMouseMove = (e) => {
          if (tooltipRef.current) {
            const tooltip = tooltipRef.current;
            tooltip.style.left = `${e.pageX + 10}px`;
            tooltip.style.top = `${e.pageY + 10}px`;
          }
        };
        
        const handleAddtoPlaylist = (track) => {
          
          addToPlaylist(track);
        };
    return (
        <div>
        <input
          type="text"
          placeholder="Search..."
          value={searchQuery}
          onChange={(event) => handleSearch(event.target.value)}

        />
        <ul>
        {songDisplay.map((track) => (
          <div key={track.id} onMouseEnter={(event) => handleMouseEnter(track.preview_url, event)}
          onMouseLeave={() => handleMouseLeave(track.preview_url)} onMouseMove={handleMouseMove}
          value ={track}
          onClick={() => handleAddtoPlaylist(track)}>
            <img src={track.image} alt="no track pic"/>
            {track.name}
            
            </div>
        ))}
      </ul>
      <audio ref={audioRef} />
      <div ref={tooltipRef} className="tooltip">No preview</div>
      </div>
    );
}

export default Searchbar;