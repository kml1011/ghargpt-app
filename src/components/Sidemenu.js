import React from 'react';
import './Sidemenu.css';
import Siderows from './Siderows';
import AddIcon from '@mui/icons-material/Add';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import SportsEsportsOutlinedIcon from '@mui/icons-material/SportsEsportsOutlined';
import IosShareOutlinedIcon from '@mui/icons-material/IosShareOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';

function Sidemenu() {
    return (
        <div className='sidemenu'>
            <h1 className='margn'>GharGPT</h1>
            <div className='sideitems'>
                <div className='first'>
                    <Siderows selected Icon={AddIcon} tittle="New chat" />
                    <Siderows selected Icon={ChatBubbleOutlineIcon} tittle="GharGPT Al Overview" />
                    <Siderows Icon={ChatBubbleOutlineIcon} tittle="Honer Aquantis" />
                    <Siderows Icon={ChatBubbleOutlineIcon} tittle="Honer Homes" />
                    <Siderows Icon={ChatBubbleOutlineIcon} tittle="2 & 3 BHK Appartments" />
                    <Siderows Icon={ChatBubbleOutlineIcon} tittle="Ready to move Appartments" />
                    <Siderows Icon={ChatBubbleOutlineIcon} tittle="Flats in gopanpally" />
                </div>
                <div className='second'>
                    <Siderows Icon={LightModeOutlinedIcon} tittle="Light mode " />
                    <Siderows Icon={SportsEsportsOutlinedIcon} tittle="OpenAl Discard" />
                    <Siderows Icon={IosShareOutlinedIcon} tittle="Updates & FaQ" />
                    <Siderows Icon={LogoutOutlinedIcon} tittle="Logout" />
                </div>
            </div>
        </div>
    )
}

export default Sidemenu