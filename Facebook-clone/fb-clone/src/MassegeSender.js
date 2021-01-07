import React, { useState } from 'react';
import "./MassegeSender.css";
import { Avatar } from '@material-ui/core';
import VideocamIcon from '@material-ui/icons/Videocam';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import { useStateValue } from "./StateProvider";
import db from "./firebase";
import firebase from "firebase";

function MassegeSender() {
    const [{user},dispatch]=useStateValue();
    const [input,setInput]=useState("");
    const [imageUrl,setImageUrl]=useState("");

    const handleSubmit = e =>{
        e.preventDefault();

        db.collection("posts").add({
            message:input,
            timestamp:firebase.firestore.FieldValue.serverTimestamp(),
            profilePic:user.photoURL,
            username:user.displayName,
            image:imageUrl,
        });

        setInput("");
        setImageUrl("");
    }
    return (
        <div className="massegeSender">
            <div className="massegeSender__top">
                <Avatar src={user.photoURL} />
                <form>
                    <input
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    className="massegeSender__input" placeholder={"What is on your mind?"}
                    />
                    <input
                    value={imageUrl}
                    onChange={(e) => setImageUrl(e.target.value)}
                     className="massegeSender__input" placeholder={"Image url(optional)"}></input>
                    <button onClick={handleSubmit} type="submit">Post</button>
                </form>
            </div>
            <div className="massegeSender__bottom">
                <div className="massegeSender__option">
                    <VideocamIcon style={{ color:"red" }}/>
                    <h3>Live Video</h3>
                </div>
                <div className="massegeSender__option">
                    <PhotoLibraryIcon style={{ color:"green" }}/>
                    <h3>Photo/Video</h3>
                </div>
                <div className="massegeSender__option">
                    <InsertEmoticonIcon style={{ color:"orange" }}/>
                    <h3>Feeling/Activity</h3>
                </div>
            </div>
            
        </div>
    )
}

export default MassegeSender
