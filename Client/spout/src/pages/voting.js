import { useEffect, useState } from "react";
import Logo from "../components/logo";
import Navbar from "../components/navbar";
import VotingComponent from "../components/votingComponent";
function Voting() {
    const [playlistOptions, setPlaylistOptions] = useState([{name: "wke"}, {name:"wqqq"}]);
    const [voted, setVoted] = useState(false);

    const handleVote = () => {
        setVoted(true);
    }
    useEffect(function() {
        async function fetchMorePlaylists() {
            if (voted) {

            }
            //TODO fetch more options
            //SetPlaylistOptions and then set vote back to false
        }
        fetchMorePlaylists();
    }, [voted])
    return (
        <div>
            <Logo></Logo>
            <Navbar></Navbar>
            <VotingComponent></VotingComponent>
        </div>
            
    );
};

export default Voting;