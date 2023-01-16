import React from "react";
import memesData from "../memeData"

export default function Meme() {
        /**
     * Challenge: Get a random image from the `memesData` array
     * when the "new meme image" button is clicked.
     * 
     * Log the URL of the image to the console. (Don't worry
     * about displaying the image yet)
     */
    
        function getMemeImage() {
            const memesArray = memesData.data.memes
            const randomNumber = Math.floor(Math.random() * memesArray.length)
            const url = memesArray[randomNumber].url
            console.log(url)
        }
    return (
        <main>
            <div className="form">
                <input 
                    className="form-input"
                    placeholder="Top Text"
                    type="text"/>
                <input 
                    className="form-input"
                    placeholder="Top Text"
                    type="text"/>
                <button className="form-button">Get a new meme image 🖼️</button>
            </div>
        </main>
    )
}