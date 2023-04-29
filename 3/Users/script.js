var a = 0;
window.onload = () =>
{
    let mouse = document.getElementsByTagName("html");
    let menu = document.getElementsByClassName("menu");
    let menu_item = document.getElementsByClassName("menu-items");

    let eye = document.getElementById("core");

    let t = setInterval(rt,40);

    mouse[0].onmousemove = (event) =>
    {
        let x = event.clientX;
        let y = event.clientY;
        let temp_x = x/10;
        let temp_y = y/10;
        let ex = temp_x;
        let ey = temp_y;
        // //x = 0 eyex = -20 , y = 0  eyey = -10
        if(ex >= 15)
        {
            ex = 15;
        }
        else if (x == 0)
        {
            ex = -20;
        }
        if( ey > 15)
        {
            ey = 15;
        }
        else if (y == 0)
        {
            ey = -10;
        }
        eye.style.transform = "translate("+(ex)+"px,"+(ey)+"px)";



        if(x == 0)
        {

            triggerHover(menu[0]);
            removeHover_item(menu_item[0]);
        }
        else
        {
            triggerHover_item(menu_item[0]);
            removeHover(menu[0]);
        }
    }




}

function triggerHover(myElement) {
    myElement.style.transform = "translate(0px, -55px)";
}

function removeHover(myElement) {

    myElement.style.transform = "";
}
function triggerHover_item(myElement) {
    myElement.style.transform = "";
}

function removeHover_item(myElement) {
    myElement.style.transform = "translate(0px, 55px)";
}

function rt()
{
    let sun = document.getElementById("sun_img");
    sun.style.transform = "rotate("+a+"deg)";
    a++;
    if(a == 360)
    {
        a = 0;
    }
}

