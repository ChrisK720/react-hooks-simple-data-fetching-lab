// create your App component here


// Create an App component from scratch
// Use the useEffect hook in the App component. Inside the callback for useEffect, 
// send a fetch request to 
// https://dog.ceo/api/breeds/image/random, a free API that returns a random image of a dog.
// Display a <p> tag with the text of "Loading..." 
// when the component is first rendered
// After receiving a response from the API, show the dog image in an 
// <img> tag, with the alt attribute set to "A Random Dog".

import React, {useEffect, useState} from 'react'

function App(){

    const [image,setImage] = useState('')

    const fetchImg = async () => {
        const response = await fetch("https://dog.ceo/api/breeds/image/random") 
        const imageUrl = await response.json() 
        console.log(imageUrl.message)
        setImage(imageUrl.message)
      
    }


    useEffect(fetchImg,[])


    return(
        <div>



       {image ? null : <p>Loading</p>}
       <img alt='A Random Dog' src={image ? image : null}/>


       </div>

    )
}

export default App
