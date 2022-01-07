import React from 'react';
import '../App.css';
import { Button } from '../components/Button';
import './VideoPlay.css';
import PlayCircleFilledWhiteOutlinedIcon from '@mui/icons-material/PlayCircleFilledWhiteOutlined';
import video from '../media/videos/video-1.mp4'
//VideoPlay
function VideoPlay() {
  return (
    <div className='hero-container'>
      <video src={video} autoPlay loop muted />
      <h1>ADVENTURE AWAITS</h1>
      <p>What are you waiting for?</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          GET STARTED
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
          WATCH TRAILER 
        </Button>
      </div>
    </div>
  );
}

export default VideoPlay;