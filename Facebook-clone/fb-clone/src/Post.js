import React from 'react'
import "./Post.css";
import {Avatar} from '@material-ui/core';
import ThumbUpIcon from "@material-ui/icons/ThumbUp"
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline"
import NearMeIcon from "@material-ui/icons/NearMe"
import AccountCircleIcon from "@material-ui/icons/AccountCircle"
import ExpandMoreOutlined from "@material-ui/icons/ExpandLessOutlined"

function Post({profilePic,image,username,timestamp,massege}) {
    return (
        <div className="post">
            <div className="post__top">
                <Avatar src={profilePic} className="post__avatar"/>
                <div className="post__topinfo">
                    <h3>{username}</h3>
                    <p> {new Date(timestamp?.toDate()).toUTCString()} </p>
                </div>
            </div>
            <div className="post__bottom">
               <p>{massege}</p>
            </div>
            <div className="post__img">
                <img src={image} alt="" />
            </div>
            <div className="post__options">
                <div className="post__option">
                    <ThumbUpIcon />
                    <p>Like</p>
                </div>
                <div className="post__option">
                    <ChatBubbleOutlineIcon />
                    <p>Comment</p>
                </div>
                <div className="post__option">
                    <NearMeIcon />
                    <p>Share</p>
                </div>
                <div className="post__option">
                    <AccountCircleIcon />
                    <ExpandMoreOutlined /> 
        
                </div>

            </div>

            
        </div>
    )
}

export default Post
