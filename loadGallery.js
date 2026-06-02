const loadGallery = () => {
    let gallery = document.getElementById("gallery");

    for(let x =0; x < 12; x++){
        let newImg = document.createElement('img');
        newImg.alt="gallery image";
        newImg.src="./img/360_F_657370150_pdNeG5pjI976ZasVbKN9VqH1rfoykdYU.jpg";
        newImg.loading="lazy";
        newImg.classList.add('galleryItem');
        gallery.appendChild(newImg);
    }
    return;
}

loadGallery();