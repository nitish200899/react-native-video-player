import React,{FC,useState} from 'react';
import {View,Text} from 'react-native';
import Video from 'react-native-video';
import VideoPlayer from 'react-native-video-controls';

type BufferProps = {isBuffering : boolean,target : number}

const VideoPlayerComponent : FC = () =>{
    const BufferHandler = (isBuffer : BufferProps)=>{
        console.log(isBuffer)
    }

    const videoError = ()=>{
        console.log("Video Error")
    }

    return (
            <VideoPlayer
                source={{ uri: 'https://www.w3schools.com/html/mov_bbb.mp4' }}
                style={{ width: '100%' , height: 218 }}
                controls={true}
                fullscreen={false}
                resizeMode="contain"
                onBuffer={BufferHandler}               
                onError={videoError} 
            />   
    )
}

export default VideoPlayerComponent;