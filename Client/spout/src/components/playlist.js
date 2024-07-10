function Playlist({playlist}){
    console.log(playlist);
    return (
        <div>
            <div>
                {playlist.name}
            </div>
        {playlist.tracks.map((song) => (
            <div key ={song.id}>
                <div>
                    <img src={song.image} alt="no imag" width="40" height="40"/>
                    {song.name}
                    </div>
            </div>
        ))}
        </div>
    );
};

export default Playlist;