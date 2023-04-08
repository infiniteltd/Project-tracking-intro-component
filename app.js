function showMenu(menu_info){
    const nav_menu = document.getElementById("navbar");
    if(menu_info.classList.contains("change")) 
    {
        menu_info.classList.remove("change");
        nav_menu.classList.remove("nav-min");
    }
    else{
        menu_info.classList.toggle("change");
        nav_menu.classList.add("nav-min");
    }
   
}