



// import React, { useState, useEffect } from 'react';
// import './App.css';

// function App() {
//   const [searchResults, setSearchResults] = useState(null);
//   const [isLoading, setIsLoading] = useState(false);
//   const [error, setError] = useState(null);
//   const [currentTrack, setCurrentTrack] = useState(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       setIsLoading(true);
//       const url = 'https://spotify23.p.rapidapi.com/albums/?ids=3IBcauSj5M2A6lTeffJzdv';
//       const options = {
//         method: 'GET',
//         headers: {
//           'x-rapidapi-key': '12bee6d5f7msh0678d481138dcf0p114d09jsne8bd4a5a74e3',
//           'x-rapidapi-host': 'spotify23.p.rapidapi.com'
//         }
//       };

//       try {
//         const response = await fetch(url, options);
//         const result = await response.json();
//         setSearchResults(result.albums[0]);
//       } catch (error) {
//         setError(error.toString());
//       } finally {
//         setIsLoading(false);
//       }
//     };

//     fetchData();
//   }, []);


//   return (
//     <div>
//       <h3>Spotify</h3>
//       {isLoading && <p>Loading...</p>}
//       {error && <p>Error: {error}</p>}
//       {searchResults && (
//         <div>
//           <div>
//             <div className="album-details">

//               <h4>{searchResults.name}</h4>
//               <p>{searchResults.artists[0].name}</p>
//               <p>{searchResults.label}</p>
//               <p>Release Date: {searchResults.release_date}</p>
//             </div>
//           </div>


//           <div className="player">
//             <div id="info" className="info">


//               <span className="name"></span>
//               <div className="progress-bar">
//                 <div className="bar"></div>
//               </div>
//             </div>
//             <div id="control-panel" className="control-panel">
//               <div aria-label="Album Art">
//                 <img src={searchResults.images[0].url}
//                   alt={searchResults.name}
//                   className="album-art" />
//               </div>
//               <div className="controls">
//                 <button className="prev" aria-label="Previous Track"></button>
//                 <button id="play" className="play" aria-label="Play/Pause"></button>
//                 <button className="next" aria-label="Next Track"></button>
//               </div>
//             </div>
//           </div>
//         </div>
//       )
//       }
//     </div >
//   );
// }

// export default App
