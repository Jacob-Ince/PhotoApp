let API_key = "563492ad6f917000010000016d23f472ce5748d484cc1e827f5b804d";
let url = "https://api.pexels.com/v1/curated?per_page=24";

let main = document.querySelector("main");

fetch (url, { headers: { Authorization: API_key } })
    .then((res) => res.json())
    .then((data) => {
        data.photos.forEach((e) => {
            let img = document.createElement("div");
            img.className = "gridele";
            img.style.backgroundImage = `url(${e.src.medium})`;
             main.appendChild(img);
         });
    })
.catch((err) => console.log(err));
