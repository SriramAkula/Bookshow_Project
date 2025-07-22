// import React, { useState } from "react";
// import ReactPlayer from "react-player";
// import { Icon } from "@iconify/react";

// import trailers from "../../../../data/trailers.json";
// import styles from "./trailers.module.scss";
// import Button from "../../../../components/atoms/Button";

// function Trailers() {
//   const [currentSrc, setCurrentSrc] = useState(trailers[0].src);
//   return (
//     <section className={styles.container}>
//       <header>
//         <h2>Trailers</h2>
//       </header>
//       <div className={styles.trailers}>
//         {/* Player */}
//         <ReactPlayer src={currentSrc} className={styles.videoPlayer} />
//         {/* Content Menu */}
//         <ul>
//           {trailers.map((trailer) => {
//             return (
//               <li key={trailer.id} onClick={() => setCurrentSrc(trailer.src)}>
//                 <img src={trailer.image} alt={trailer.alt} width={150} />
//                 <Icon icon={"icon-park-twotone:play"} />
//               </li>
//             );
//           })}
//         </ul>
//       </div>
//     </section>
//   );
// }

// export default Trailers;

import ReactPlayer from "react-player";
import React,{useState} from "react";


import styles from "./trailers.module.scss";


const getYouTubeID = (url) => {
  const regExp = /(?:youtu\.be\/|youtube\.com\/(?:.*v=|v\/|embed\/|shorts\/))([\w-]{11})/;
  const match = url.match(regExp);
  return match && match[1] ? match[1] : null;
};
function Trailers() {
  
  const trailerLinks = [
    {
      id: 1,
      title: "Saaho",
      url: "https://youtu.be/HNnt00swZ5Q?si=v2jJw5j7VinrxTME"
    },
    {
      id: 2,
      title: "Salaar: Part 1 - Ceasefire",
      url: "https://youtu.be/Joo_jE8kMDg?si=Lpp-PKvtDoC3r-mJ"
    },
    {
      id: 3,
      title: "Bahubali: The Begining",
      url: "https://youtu.be/sOEg_YZQsTI?si=xZlTz_QEDCH5nSL7"
    },
    {
      id: 4,
      title: "Bahubali 2: The Conclusion",
      url: "https://youtu.be/qD-6d8Wo3do?si=-mVq1x7X-QeN05xQ"
    }
  ];
  const [currentVideo,setCurrentVideo]=useState(trailerLinks[0].url);
  
  return (
    <section className={styles.container}>
      <header>
        <h2>Trailers</h2>
      </header>
      <div className={styles.trailers}>
        {/* Player */}
        <ReactPlayer
            src={currentVideo}
            className={styles.videoPlayer}
            controls
            width="100%"
            height="100%"
          />
        {/* Content Menu */}
        <ul className={styles.trailerList}>
          {trailerLinks.map((trailer) => {
            const videoId = getYouTubeID(trailer.url);
            const thumbnail = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;

            return (
              <li key={trailer.id} onClick={() => setCurrentVideo(trailer.url)}>
                <img src={thumbnail} alt={trailer.title} className={styles.thumbnail} />
                <span>{trailer.title}</span>
              </li>
            );
          })}
        </ul>
          
      </div>
    </section>
  );
}

export default Trailers;
