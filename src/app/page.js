"use client"
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faStop } from '@fortawesome/free-solid-svg-icons';
import Head from 'next/head';
import './globals.css';

function App() {
  const phrases = [
    {
      id: 1,
      text: "Rowa awẽ",
      audio: "/audio/001.mp3"
    },
    {
      id: 2,
      text: "E niha atsitsi.",
      audio: "/audio/002.mp3"
    },
    {
      id: 3,
      text: "Wa hã Jeová Watsu'uꞌwa",
      audio: "/audio/003.mp3"
    }
  ];

  const [currentAudio, setCurrentAudio] = useState({});
  const [playbackSpeeds, setPlaybackSpeeds] = useState({});

  const toggleAudio = (phrase) => {
    if (currentAudio[phrase.id] && !currentAudio[phrase.id].paused) {
      // If the audio is playing, pause it
      currentAudio[phrase.id].pause();
      setCurrentAudio({ ...currentAudio, [phrase.id]: null });
    } else {
      // Otherwise, pause the current audio (if any) and play the new one
      if (currentAudio[phrase.id]) {
        currentAudio[phrase.id].pause();
      }
      const newAudio = new Audio(phrase.audio);
      newAudio.playbackRate = playbackSpeeds[phrase.id] || 1;
      newAudio.play();
      setCurrentAudio({ ...currentAudio, [phrase.id]: newAudio });
    }
  };

  const changeSpeed = (phrase) => {
    const speedOptions = [0.25, 0.5, 0.75, 1];
    const currentIndex = speedOptions.indexOf(playbackSpeeds[phrase.id] || 1);
    const newIndex = (currentIndex + 1) % speedOptions.length;
    const newSpeed = speedOptions[newIndex];
    setPlaybackSpeeds({ ...playbackSpeeds, [phrase.id]: newSpeed });
    if (currentAudio[phrase.id]) {
      currentAudio[phrase.id].playbackRate = newSpeed;
    }
  };

  return (
    <>
      <Head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#fff" />
      </Head>
      <div className="container">
        {phrases.map(phrase => (
          <div key={phrase.id} className="card">
            <p>{phrase.text}</p>
            <div className="controls">
              <button onClick={() => toggleAudio(phrase)}>
                {currentAudio[phrase.id] && !currentAudio[phrase.id].paused ? (
                  <FontAwesomeIcon icon={faStop} />
                ) : (
                  <FontAwesomeIcon icon={faPlay} />
                )}
              </button>
              <button className="rate-button" onClick={() => changeSpeed(phrase)}>{(playbackSpeeds[phrase.id] || 1) + 'x'}</button>
            </div>
          </div>
        ))}
      </div>
    </>

  );
}

export default App;
