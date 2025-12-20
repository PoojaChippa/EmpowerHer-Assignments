import React, { useRef, useState } from "react";

const videos = [
  "https://www.w3schools.com/html/mov_bbb.mp4",
  "https://www.w3schools.com/html/movie.mp4",
  "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4",
];

function MultiVideoPlayer() {
  const videoRef = useRef(null);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  const playVideo = () => videoRef.current.play();
  const pauseVideo = () => videoRef.current.pause();

  const forward = () => {
    videoRef.current.currentTime += 5;
  };

  const rewind = () => {
    videoRef.current.currentTime -= 5;
  };

  const nextVideo = () => {
    setCurrentVideoIndex((prev) => (prev + 1) % videos.length);
  };

  const prevVideo = () => {
    setCurrentVideoIndex((prev) => (prev - 1 + videos.length) % videos.length);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Multi Video Player</h2>

      <video ref={videoRef} width="600" src={videos[currentVideoIndex]} />

      <div
        style={{
          marginTop: "25px",
          display: "flex",
          justifyContent: "center",
          gap: "12px",
        }}
      >
        <button onClick={playVideo}>▶️ Play</button>
        <button onClick={pauseVideo}>⏸ Pause</button>
        <button onClick={forward}>⏩ Forward</button>
        <button onClick={rewind}>⏪ Rewind</button>
      </div>

      <div
        style={{
          marginTop: "25px",
          display: "flex",
          justifyContent: "center",
          gap: "12px",
        }}
      >
        <button onClick={prevVideo}>⏮ Previous</button>
        <button onClick={nextVideo}>⏭ Next</button>
      </div>
    </div>
  );
}

export default MultiVideoPlayer;
