const galleryArray = [
    '1.jpg', 
    '2.jpg', 
    '3.jpg', 
    '4.jpg', 
    '5.jpg', 
    '6.jpg', 
    '7.jpg',
];

const loadGallery = () => {
    let gallery = document.getElementById("gallery");

    for(let x =1; x <= galleryArray.length; x++){
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