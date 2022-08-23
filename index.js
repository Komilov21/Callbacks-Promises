const loadImages =()=>{
    fetch("https://api.pexels.com/v1/search?query=nature", {
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
            console.log(photo.photos[i],"Loading...")

          svg[i].remove()
            const newImg = document.createElement("img");
            newImg.classList.add("card-img-top");
            newImg.setAttribute("src", `${photo.photos[i].src.medium}`);
            newImg.setAttribute("alt", `${photo.photos[i].alt}`);
            newImg.setAttribute("width", `w-100`);
            //newImg.innerHTML= `<img src=${photo.photos[i].src.medium}" class="card-img-top" alt=${photo.photos[i].alt} "image">`
                            
                        /* `<div >
                          
                           <div class="card-body">
                           <p class="card-text">${photo.photos[i].alt}.</p>
                           </div>
                         </div>` */

               
                        // photos.appendChild(svg)
                        cardName[i].prepend(newImg);

                
  
                    }
                
    })
    // .catch( error =>  console.log(error));
   

}

const secondImages =()=>{
    fetch("https://api.pexels.com/v1/search?query=cars",{
        method:"GET",
        headers:{
            Authorization:"Bearer 563492ad6f917000010000014c54e72779674bf0aa3def9498183c3b"
            


        },
    })
    

    .then(response => response.json())
    .then(response => console.log(response))
    .then(photos => {
        const svg = document.querySelectorAll("svg")

      
        for (i=0; i< photos.data.length;i++){
            let photo =photos.data[i];

          

            svg.innerHTML=`<div class="card">
                           <img src=${photo.album.cover} " alt=${photo.title} "image">
                          <div class="card-body">
                          <p class="card-text">${phototitle}.</p>
                          </div>
                        </div>`

               
                        photo.appendChild(svg)
  
                    }
                
    })
    .catch( err =>  console.log(error))

}

