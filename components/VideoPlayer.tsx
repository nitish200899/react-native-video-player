import React,{FC,useState} from 'react';
import {View,Text} from 'react-native';
import Video from 'react-native-video';

//def

type BufferProps = {isBuffering : boolean,target : number}

const VideoPlayerComponent : FC = () =>{
    const BufferHandler = (isBuffer : BufferProps)=>{
        console.log(isBuffer)
    }

    const videoError = ()=>{
        console.log("Video Error")
    }

    return (
            <Video
                source={{ uri: 'https://www.w3schools.com/html/mov_bbb.mp4' }}
                style={{ width: '100%' , height: 218 }}
                controls={true}
                fullscreen = {true}
                resizeMode = "cover"
                onBuffer={BufferHandler}               
                onError={videoError} 
            />   
    )
}

export default VideoPlayerComponent;