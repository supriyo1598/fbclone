import React from 'react';
import './Story.css';
import {Avatar} from '@material-ui/core';

function Story({image,proficeSrc,title}) {
    return (
        <div style={{ backgroundImage:`url(${image})` }} className="story">
            <Avatar className="story_avatar" src={proficeSrc} />
            <h4>{title}</h4>
             
        </div>
    )
}

export default Story
