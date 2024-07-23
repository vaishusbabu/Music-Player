import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { IoPlay } from "react-icons/io5";
import { FaBackward } from "react-icons/fa";
import { TbPlayerTrackNextFilled } from "react-icons/tb";
import { FaPause } from "react-icons/fa6";
// import { HiMiniSpeakerWave } from "react-icons/hi2";
// import { HiMiniSpeakerXMark } from "react-icons/hi2";

const SpotifyPlayer = () => {
    const [album, setAlbum] = useState(null);
    const [currentTrack, setCurrentTrack] = useState(null);
    const [img, setImg] = useState(null);
    const [isPlaying, setIsplaying] = useState(false)

    const audioRef = useRef(null);

    useEffect(() => {
        const fetchAlbum = async () => {
            const options = {
                method: 'GET',
                url: 'https://spotify23.p.rapidapi.com/albums/',
                params: { ids: '3IBcauSj5M2A6lTeffJzdv' },
                headers: {
                    'x-rapidapi-key': '12bee6d5f7msh0678d481138dcf0p114d09jsne8bd4a5a74e3',
                    'x-rapidapi-host': 'spotify23.p.rapidapi.com'
                }
            };

            try {
                const response = await axios.request(options);
                setAlbum(response.data.albums[0]);
                setImg(response.data.albums[0].images[0])
                setCurrentTrack(response.data.albums[0].tracks.items[0]);
            } catch (error) {
                console.error(error);
            }
        };

        fetchAlbum();
    }, []);

    const playTrack = (track) => {
        setCurrentTrack(track);
    };

    if (!album) return <div>Loading...</div>;

    return (
        <div className="spotify-player">
            <div className="current-track">
                {console.log("currentTrack", currentTrack)}

                <div className='control-panel' id='control-panel' style={{ display: 'flex', padding: 10, alignItems: "center" }}>
                    <div>
                        <img width={70} height={70} src={img.url} style={{ borderRadius: 100 }}></img>
                    </div>
                    <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 15 }}>
                        <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                            <span>{currentTrack.name}</span>
                        </div>
                        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", flex: 1, gap: 30 }}>
                            <FaBackward style={{ cursor: "pointer" }} />
                            {!isPlaying ? <IoPlay style={{ cursor: "pointer" }} onClick={() => {

                                if (audioRef.current) {
                                    audioRef.current.play();
                                    setIsplaying(prevState => !prevState)
                                }
                            }} /> : <FaPause style={{ cursor: "pointer" }} onClick={() => {

                                if (audioRef.current) {
                                    audioRef.current.pause();
                                    setIsplaying(prevState => !prevState)
                                }
                            }} />
                            }
                            <TbPlayerTrackNextFilled style={{ cursor: "pointer" }} />
                            <HiMiniSpeakerWave />
                        </div>
                    </div>

                </div>
                <audio ref={audioRef} style={{ display: 'none' }} controls src={currentTrack.preview_url}>
                    Your browser does not support the audio element.
                </audio>
            </div>
            <div>
                <h3>Playlist:</h3>
                <ul className="track-list">
                    {album.tracks.items.slice(0, 10).map((track) => (
                        <li className='track-list' key={track.id} onClick={() => playTrack(track)}>
                            {track.name}
                        </li>
                    ))}
                </ul>
            </div>
        </div >
    );
};

export default SpotifyPlayer;