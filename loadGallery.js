const loadGallery = () => {
    let gallery = document.getElementById("gallery");

    for(let x =1; x < 8; x++){
        let newImg = document.createElement('img');
        newImg.alt="gallery image";
        newImg.src=`./img/picturesfordive/${x}.jpg`;
        newImg.loading="lazy";
        newImg.classList.add('galleryItem');
        gallery.appendChild(newImg);
    }
    return;
}

loadGallery();