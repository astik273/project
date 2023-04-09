import React from 'react'
import { useState } from 'react'
export default function Imageupload(){
    const [ image, setImage ]= useState('')
    function handleImage(e){
      console.log(e.target.files[0]);
      console.log("file has been saved");
    }
    return(
    <>
    <input type="file" name="file" onChange={handleImage}/>
    <button>Submit </button>
    
    </>
   
    );
} 