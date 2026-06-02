function hideMenu(){
    const sidebar = document.getElementById("sidebar");
    if (sidebar.classList.contains("show")) {
        /*Hide Menu*/
        document.querySelector('.closeMenu').src = "./img/bars-solid-full.svg";
        sidebar.classList.remove("show");
        return;
    }
    /*Show Menu*/
    document.querySelector('.closeMenu').src = "./img/x-solid-full.svg";
    sidebar.classList.add("show")
    return;

}