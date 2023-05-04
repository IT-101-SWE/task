

window.onload = () =>
{
    //start align the body to the view position
    startView();

    //define mouse
    let mouse = document.getElementsByTagName("html")[0];
    //define container 2
    let container2 = document.getElementsByClassName("container2")[0];

    //detect the mouse movement
    mouse.onmousemove = (mouseEvent) =>
    {
        //store mouse position
        let x = mouseEvent.clientX;
        let y = mouseEvent.clientY;

        //define the search icon
        let searchIcon = document.getElementsByClassName("searchIcon")[0];
        //get the position of search icon
        let searchIconPosition = searchIcon.getBoundingClientRect();

        //search icon x and y position and width and height
        let six = searchIconPosition.x;
        let siy = searchIconPosition.y;
        let siw = searchIconPosition.width;
        let sih = searchIconPosition.height;

        // change background linear-gardient angle
        changeLinear(container2,getAngle(container2,x,y)+45);

        // change the opacity and z-index of searchIcon
        //check if the position of the mouse is bounded by the search icon area to change opacity
        if( ( (x >= six) && (x <= (six+siw) ) ) && ( (y >= siy) && ( y <= (siy+sih)) ) )
        {
            searchInputsControl(searchIconControl(0));

        }
        else
        {
            searchInputsControl(searchIconControl(1));

        }


    }




}

// control the animation of screen view
function startView()
{
    //control body
    let body = document.getElementsByTagName("body");
    //return body to normal view
    body[0].style.transition = "transform 1.5s  ease-in-out";
    body[0].style.transform = "none";

    // control time of appearing of menu and search icon
    setTimeout(menuControl,1500);
    setTimeout(searchIconControl,1500);
    setTimeout(searchInputsControl,1500);
    setTimeout(searchFormControl,1500);


}

function endView()
{
    let body = document.getElementsByTagName("body");
    body[0].style.overflow = "hidden";
    body[0].style.transition = "transform .8s  ease-in-out";
    body[0].style.transform = "scale(0.7) translateX(150vw)";
}


// control the search icon appearing
function searchIconControl(state=1)
{
    let searchIcon = document.getElementsByClassName("searchIcon")[0];
    let icon = document.getElementsByTagName("img")[1];

    searchIcon.style.transition = "opacity .9s ease-in-out 0s "
        // , transform 1s ease-in-out 0s";
    icon.style.transition = "width 1s ease, height 1s ease";
    switch (state)
    {
        case 0:

            // searchIcon.style.transform = "scale(0)";


            icon.style.width = "4vw";
            icon.style.height = "4.5vh";
            icon.style.padding = "0px";

            setTimeout(searchIcon.style.opacity = 0,1000);

            searchIcon.style.borderTopLeftRadius = "0px";
            searchIcon.style.borderBottomLeftRadius = "0px";

            //return true to make the search inputs appear
            return true;
            break;
        case 1:

            icon.style.width = "3vw";
            icon.style.height = "4vh";
            icon.style.padding = "10px";

            searchIcon.style.borderRadius = "50px";

            searchIcon.style.transform = "none";
            searchIcon.style.opacity = 1;

            //return false to make the search inputs disappear
            return false;
            break;
    }

}

//control search inputs (btn and bar)
function searchInputsControl(state=false)
{
    let searchBar = document.getElementById("search_bar");
    let searchBtn = document.getElementById("search_btn");

    searchBar.style.transition = "opacity 2.5s ease, left 0.8s ease, transform 1.5s ease";
    searchBtn.style.transition = "opacity 2.5s ease, left 0.8s ease, transform 1.5s ease";

    //order in opacity is important to avoid hidden issue

    switch (state)
    {
        case true:

            searchFormControl(true);
            searchBtn.style.opacity = 1;
            searchBar.style.opacity = 1;

            searchBar.style.left= "-6vw";
            searchBtn.style.left= "9vw";

            searchBar.style.transform = "scale(1)";
            searchBtn.style.transform = "scale(1)";

            break;

        case false:

            searchBar.style.left= "-5vw";
            searchBtn.style.left= "-1vw";

            searchBar.style.transform = "scale(0)";
            searchBtn.style.transform = "scale(0)";

            searchBtn.style.opacity = 0;
            searchBar.style.opacity = 0;

            searchFormControl(false);


            break;

    }

}

// control the searchForm
function searchFormControl(state=false)
{
    let searchForm = document.getElementById("searchForm");
    searchForm.style.transition = "transform 0.9s ease , opacity 0.5s ease";

    switch (state)
    {
        case true:
            searchForm.style.opacity = 1;
            searchForm.style.transform = "translateX(-3vw)";
            break;
        case false:
            searchForm.style.opacity = 0;
            searchForm.style.transform = "translateX(6.5vw)";
            break;
    }
}

// control menuWarp
function menuControl()
{
    //control menu warp to avoid overflow hidden at first
    let menuWarp = document.getElementsByClassName('menu_warp')[0];
    menuWarp.style.transition = "top 1.3s ease-in-out 0s";
    menuWarp.style.top = "0px";
    menuWarp.style.overflow = 'visible';
}


// angle of element with mouse
function getAngle(element,x,y)
{
    //let the background make 45deg with the mouse
    const elementX = element.getBoundingClientRect().left + (element.offsetWidth / 2);
    const elementY = element.getBoundingClientRect().top + (element.offsetHeight / 2);

    const deltaX = x - elementX;
    const deltaY = y - elementY;

    const radians = Math.atan2(deltaY, deltaX);
    const degrees = radians * (180 / Math.PI);

    return degrees;
}

// change background linear-gardient angle
function changeLinear(Element,angle)
{
    Element.style.background = "linear-gradient("+ (angle) +"deg,#0A4D68 ,#05BFDB )";
}



