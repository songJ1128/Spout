//import { format } from "mysql2";
import { useState } from "react";
import { useEffect } from "react";
import axios from 'axios';
//import debounce from 'lodash/debounce';

function Searchbar({setPlaylist}) {
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
              //console.log(response.data);
            } catch (error) {
              console.error('Error fetching data from server', error);
            }
          } 
        };
    
    return (
        <div className="search-bar">
        <input
          type="text"
          placeholder="Search..."
          value={searchQuery}
          onChange={(event) => handleSearch(event.target.value)}
        />
        <ul>
        {songDisplay.map((track) => (
          <li key={track.id}>{track.name}</li>
        ))}
      </ul>
      </div>
    );
}

export default Searchbar;