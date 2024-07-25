import { useEffect, useRef, useState } from "react";
import axios from 'axios';
import { useSwipeable } from 'react-swipeable';
import PlaylistDisplay from "./playlistDisplay";
import Playlist from "./playlist";
import '../css/votingComponent.css'; 

function VotingComponent() {
    const [playlists, setPlaylists] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    
    const audioRef = useRef(null);
    const tooltipRef = useRef(null);

    useEffect(function() {
        fetchPlaylists();
    } ,[]);


    const fetchPlaylists = async () => {
        try {
          const response = await axios.get('http://localhost:8080/vote/getPlaylists');
          setPlaylists(response.data);
        } catch (error) {
          console.error('Error fetching playlists', error);
        }
      };

      const handleVote = async (votedPlaylist) => {
        try {
            console.log(typeof votedPlaylist.id, votedPlaylist.id, votedPlaylist);
            await axios.post('http://localhost:8080/vote/like', {
                playlistId: votedPlaylist.id,
            });
            fetchPlaylists();
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
            <Playlist playlist={playlists[currentIndex]} audioRef={audioRef} tooltipRef={tooltipRef} />
          </div>
          <div {...handleRight} className="playlist-card">
          <Playlist playlist={playlists[currentIndex+1]} audioRef={audioRef} tooltipRef={tooltipRef} />
          </div>
        </div>
      );
    };

    export default VotingComponent;
