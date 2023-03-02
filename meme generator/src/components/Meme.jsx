import React from "react";
import memesData from '../assets/data/memesData'

export default function Meme() {

    const [allMemeImages, setallMemeImages] = React.useState(memesData)
    const [memeInfoData, setImageUrl] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg"})

    // console.log(" memesArray",  memesArray)
    // console.log("mimin", randomNum)
    // console.log("imageUrli", imageUrli)
    const memesArray = allMemeImages?.data?.memes
    const randomNum = Math.floor(Math.random() * memesArray.length)
    const url = memesArray[randomNum].url

    console.log("url", url)

    function getMeme () {
        setImageUrl(prevImage => ({
            ...prevImage,
            randomImage: url
        }))
    }

    
    return (
        <main>
            <form className="form">
                <input type="text" className="memeinput" placeholder="Top text"/>
                <input type="text" className="memeinput" placeholder="Bottom text"/>
                <button className="memebutton" onClick={getMeme}>Get a new meme image  🖼</button>
            </form>
            <img src= {memeInfoData.randomImage} alt="meme" className="memeimage"/>
        </main>
        
    )
}