//import { format } from "mysql2";
import { useState } from "react";
import { useEffect } from "react";
function Searchbar({setPlaylist}) {
    const [searchQuery, setSearchQuery] = useState("");
    const [songDisplay, setSongDisplay] = useState({});
    //TODO implement the add song to playlist function using setPlayist i.e setPlaylist(playlist => {...playlist, song})
    const handleSearch = (event) => {
        setSearchQuery(event.target.value);
    }
    useEffect(function() {
        console.log("Search is" + searchQuery);
        async function getSongs() {
            try {
                const response = await fetch();
                //TODO implemnt fetch req songs
                if (response.ok) {
                    //TODO display songs and other info
                }   
            } catch (error) {
                console.log(error);
            }
        }
    }, [searchQuery]);
    return (
        <div className="search-bar">
        <input
          type="text"
          placeholder="Search..."
          value={searchQuery}
          onChange={handleSearch}
        />
      </div>
    );
}

export default Searchbar;