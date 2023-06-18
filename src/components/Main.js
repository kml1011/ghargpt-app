import React from 'react'
import './Main.css';
import AutorenewIcon from '@mui/icons-material/Autorenew';
import Avatar from '@mui/material/Avatar';
import { deepOrange, green } from '@mui/material/colors';


function Main() {
  return (
    <div className='main'>
      <div className='tittle'>
        <h1>HONER</h1>
        <h5 className='home'>HOMES</h5>
      </div>
      <div className='message-box'>
        <div className='input-msg'>
          <Avatar sx={{ bgcolor: deepOrange[500], color:'white' }} variant="square">MK</Avatar>
          <h3>What are the ready to move apartments in financial district, Hyderabad?</h3>
        </div>
        <div className='gpt-msg'>
          <Avatar sx={{ bgcolor:'#0da37f', color:'white' }} variant="square">HH~</Avatar>
          <h3>Honer Aquantis is one of the premium ready to move project near the financial district</h3>
        </div>
        <div className='input-msg'>
          <Avatar sx={{ bgcolor: deepOrange[500], color:'white' }} variant="square">MK</Avatar>
          <h3>Name a project that offers all sort of amenities</h3>
        </div>
        <div className='gpt-msg'>
          <Avatar sx={{ bgcolor: '#0da37f', color:'white' }} variant="square">HH~</Avatar>
          <h3>Honor Aquantis is one such project that offers all sorts of amenities</h3>
        </div>
        <div className='input-msg'>
          <Avatar sx={{ bgcolor: deepOrange[500], color:'white' }} variant="square">MK</Avatar>
          <h3>Is the location of Honor Aquantis convenient and suitable for my needs?</h3>
        </div>
        <div className='gpt-msg'>
          <Avatar sx={{ bgcolor: '#0da37f', color:'white' }} variant="square">HH~</Avatar>
          <h3>Yes, Honer Aquantis ensures you reach all your important destinations easily</h3>
        </div>
        <div className='input-msg'>
          <Avatar sx={{ bgcolor: deepOrange[500], color:'white' }} variant="square">MK</Avatar>
          <h3>What is the resale and rental potential in gopanpally?</h3>
        </div>
        <div className='gpt-msg'>
          <Avatar sx={{ bgcolor: '#0da37f', color:'white' }} variant="square">HH~</Avatar>
          <h3>The apartment value at Gopanpally is increasing by 12%YOY, determining a stern growth. The average rent in this area stays around 28000/month for 2BHK apartment.</h3>
        </div>
      </div>
      <div className='chatbox'>
        <button className='chatbtn'>
          <AutorenewIcon />
          <span>Regenerate response</span>
        </button>
        <textarea rows={1} className='text-area'></textarea>
        <p className='footer-text'>Free Research Preview, GharGPT may produce inaccurate information about people places, or facts, GharGPT june 23 version</p>
      </div>
    </div>
  )
}

export default Main