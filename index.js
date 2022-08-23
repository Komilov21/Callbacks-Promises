const loadImages =()=>{
    fetch("https://api.pexels.com/v1/search?query=nature", {
        method:"GET",
        headers:{
            Authorization:"Bearer 563492ad6f917000010000014c54e72779674bf0aa3def9498183c3b"
        },
    })
    

    .then(response => response.json())
    .then(photo => {

        const svg = document.querySelectorAll("svg")
        const cardName = document.querySelectorAll(".card")

     
        for (i=0; i< svg.length;i++){
            // let img =photos;
            console.log(photo.photos[i])

          svg[i].remove()
            const newImg = document.createElement("img");
            newImg.classList.add("card-img-top");
            newImg.setAttribute("src", `${photo.photos[i].src.large}`);
            newImg.setAttribute("alt", `${photo.photos[i].alt}`);
            newImg.setAttribute("width", `w-100`,`h-100`);
            
                        cardName[i].prepend(newImg);

                
  
                    }
                
    })
    .catch( error =>  console.log(error));
   

}


const secondImages =()=>{
    fetch("https://api.pexels.com/v1/search?query=cars", {
        method:"GET",
        headers:{
            Authorization:"Bearer 563492ad6f917000010000014c54e72779674bf0aa3def9498183c3b"
        },
    })
    

    .then(response => response.json())
    // .then(response => console.log(response))
    .then(photo => {

        const svg = document.querySelectorAll("svg")
        const cardName = document.querySelectorAll(".card")

     
        for (i=0; i< svg.length;i++){
            // let img =photos;
            console.log(photo.photos[i])

          svg[i].remove()
            const newImg = document.createElement("img");
            newImg.classList.add("card-img-top")
            newImg.setAttribute("src", `${photo.photos[i].src.large}`);
            newImg.setAttribute("alt", `${photo.photos[i].alt}`);
            newImg.setAttribute("width", `w-100`);
            
                        cardName[i].prepend(newImg);

                
  
                    }
                
    })
    .catch( error =>  console.log(error));
   

}
