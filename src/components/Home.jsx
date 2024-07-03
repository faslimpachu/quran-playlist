// Home.js

import React from 'react';
import { Container, IframeContainer, SessionList, SuraContainer, SuraTitle, Title, VideoTitle, VideoDescription, CardDiv } from './HomeStyle';

const Home = () => {
  // Define an array of video objects
  const playlist = [
    {
      url: "https://www.youtube.com/embed/Nnd641CP1k8?si=GC995je9w5XxyXa5",
      title: "Voice from Heart Beautiful Quran",
      description: "Sheikh Ahmed Mokhtar  Reciting Surah Luqman  Full  with Beautiful Voice "
    },
    {
      url: "https://www.youtube.com/embed/Nnd641CP1k8?si=GC995je9w5XxyXa5",
      title: "Voice from Heart Beautiful Quran",
      description: "Sheikh Ahmed Mokhtar  Reciting Surah Luqman  Full  with Beautiful Voice "
    },
    {
      url: "https://www.youtube.com/embed/Nnd641CP1k8?si=GC995je9w5XxyXa5",
      title: "Voice from Heart Beautiful Quran",
      description: "Sheikh Ahmed Mokhtar  Reciting Surah Luqman  Full  with Beautiful Voice "
    },
    {
      url: "https://www.youtube.com/embed/Nnd641CP1k8?si=GC995je9w5XxyXa5",
      title: "Voice from Heart Beautiful Quran",
      description: "Sheikh Ahmed Mokhtar  Reciting Surah Luqman  Full  with Beautiful Voice "
    },
  ];

  return (
    <Container>
      <Title>Quran Playlist</Title>
      <SuraContainer>
        <SuraTitle>Surah 1</SuraTitle>
        <SessionList>
          {playlist.map((video, index) => (
            <CardDiv>
                <IframeContainer key={index}>
              <iframe
                src={video.url}
                frameBorder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title={video.title}
              ></iframe>
            </IframeContainer> 
           <div className="card-title">
           <VideoTitle>{video.title}</VideoTitle>
           <VideoDescription>{video.description}</VideoDescription>
           </div>

            </CardDiv>
          ))}
        </SessionList>
      </SuraContainer>
     
      <SuraContainer>
        <SuraTitle>Surah 2</SuraTitle>
        <SessionList>
          {playlist.map((video, index) => (
            <CardDiv>
                <IframeContainer key={index}>
              <iframe
                src={video.url}
                frameBorder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title={video.title}
              ></iframe>
            </IframeContainer> 
           <div className="card-title">
           <VideoTitle>{video.title}</VideoTitle>
           <VideoDescription>{video.description}</VideoDescription>
           </div>

            </CardDiv>
          ))}
        </SessionList>
      </SuraContainer>
    </Container>
  );
};

export default Home;
