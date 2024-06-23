import Navbar from "../components/navbar";
import Logo from "../components/logo";
import Prompt from "../components/prompt";
import Searchbar from "../components/searchbar";
import PlaylistDisplay from "../components/playlistDisplay";
import { useState } from "react";
import PlaylistCard from "../components/playlistCard";
function Home() {
    

    
    return (
        <div>
            <Logo></Logo>  
            <Navbar></Navbar>  
            <Prompt></Prompt>
            <PlaylistCard></PlaylistCard>
        </div>
    )
};

export default Home;

