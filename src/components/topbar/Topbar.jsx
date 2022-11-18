import React from 'react'
import "./topbar.css"
import MarkEmailUnreadIcon from '@mui/icons-material/MarkEmailUnread';
import SettingsIcon from '@mui/icons-material/Settings';

const Topbar = () => {
  return (
    <div className="topbar">
        <div className='topbar-wrapper'>
            <div className="topleft">
              <img className="logo" src="../spacelogo.png" /><span className='title'>SpaceCoders</span>
            </div>
            <div className="topmiddle">
              <input className='search-container' type="text" placeholder='Search by language, user, asset...'></input>
                <span className='search'>Search</span>
            </div>
            <div className='topright'>
                <div className='icon-container'>
                   <MarkEmailUnreadIcon />
                   <SettingsIcon />
                
                
                <img src="https://static.independent.co.uk/s3fs-public/thumbnails/image/2020/05/01/09/avatar-sigourney-weaver.jpg?width=1200&auto=webp&quality=75" alt="avator" className='topAvator'/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Topbar