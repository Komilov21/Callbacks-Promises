const loadImages =()=>{
    fetch("https://api.pexels.com/v1/search?query=[photos]",{
        method:"GET",
        headers:{
            "x-pexelsapi-key": '563492ad6f917000010000014c54e72779674bf0aa3def9498183c3b',
            "x-pexelsapi-host":"https://api.pexels.com/v1/"


        },
    })
    

    .then(response => response.json())
    .then(response => console.log(response))
    .then(photos =>{
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