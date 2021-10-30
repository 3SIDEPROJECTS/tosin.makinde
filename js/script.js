//toggle menu button
const toggle = document.querySelector(".toggle"),
//menu
menu = document.querySelector(".menu")

console.log( toggle )
console.log( menu )

/**
 * toggleMenu function
 * toggles the menu and icon
 */
function toggleMenu() {
    //if it's active, remove the class
    if( menu.classList.contains("active") ) {
        menu.classList.remove("active")
        //then change the icon
        toggle.querySelector("a").innerHTML = "<i class='ri-menu-line'></i>"
    } else {
        //if not, make it active
        menu.classList.add("active")
        //then change the icon
        toggle.querySelector("a").innerHTML = "<i class='ri-menu-unfold-line'></i>"
    }
}

/**
 * toggleItem function
 * toggles the submenu items
 */
function toggleItem() {
    //if the submenu is active, remove the class to hide it
    if( this.classList.contains("submenu-active") ) {
        this.classList.remove("submenu-active")
    } else if ( menu.querySelector(".submenu-active") ) {
        //if another submenu is active, hide that one
        menu.querySelector(".submenu-active").classList.remove("submenu-active")
        //then make this one active
        this.classList.add("submenu-active")
    } else {
        //otherwise just make this one active
        this.classList.add("submenu-active")
    }
}

//add the handler to the click event for the menu button
toggle.addEventListener("click", toggleMenu, false)
//list of items in the menu
const items = document.querySelectorAll(".item")

for ( let item of items ) {
    //if the item has a child with the .submenu class
    if( item.querySelector(".submenu") ) {
        //add the event handler to the click and keypress event
        item.addEventListener("click", toggleItem, false)
        item.addEventListener("keypress", toggleItem, false)
    }
}