import { useEffect, useState } from "react";
import axios from 'axios';
import { useSwipeable } from 'react-swipeable';
import PlaylistDisplay from "./playlistDisplay";

function VotingComponent() {
    const [playlists, setPlaylists] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    
    useEffect(function() {
        fetchPlaylists();
    } ,[]);

    const fetchPlaylists = async () => {
        try {
          const response = await axios.get('http://localhost:8080/getPlaylists');
          setPlaylists(response.data);
        } catch (error) {
          console.error('Error fetching playlists', error);
        }
      };

      const handleVote = async (votedPlaylist) => {
        try {
            await axios.post('http://localhost:8080/vote', {
                playlistId: votedPlaylist,
            });
            setCurrentIndex((prevIndex) => prevIndex + 1);
        } catch (error) {
            console.log("error submitting vote", error);
        }
      };

      const handleLeft = useSwipeable({
        onSwipedLeft: () => handleVote(playlists[currentIndex]),
        preventDefaultTouchmoveEvent: true,
        trackMouse: true,       
      });
      const handleRight = useSwipeable({
        onSwipedRight: () => handleVote(playlists[currentIndex+1]),
        preventDefaultTouchmoveEvent: true,
        trackMouse: true,       
      });
      if (playlists.length === 0 || currentIndex >= playlists.length - 1) {
        return <div>Loading...</div>;
      }
      return (
        <div className="voting-container">
          <div {...handleLeft} className="playlist-card">
            <PlaylistDisplay playlist={playlists[currentIndex]} />
          </div>
          <div {...handleRight} className="playlist-card">
            <PlaylistDisplay playlist={playlists[currentIndex + 1]} />
          </div>
        </div>
      );
    };

    export default VotingComponent;
