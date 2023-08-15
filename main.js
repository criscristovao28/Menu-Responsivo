function menuShow(){
    let ul = document.querySelector('.navbar ul');

    if(ul.classList.contains("open"))
    {
        ul.classList.remove("open");
        document.querySelector('.menu-icon img').src="img/menu.png";
    }else
    {
        ul.classList.add("open");
        document.querySelector('.menu-icon img').src="img/close.png";
    }
}