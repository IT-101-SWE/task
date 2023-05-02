function PassValid()
{
    
    var pass = document.getElementById("password").value;
    var confirm = document.getElementById("confirm").value;
    
    if(pass !== confirm)
    {
        document.getElementById("error").innerHTML= "Passwords Do Not Match!"
        return false;
    }
    return true
}

window.onload = () =>
{
    const backBtn = document.getElementById("backBtn");
    backBtn.onclick = () =>
    {
        window.history.go(-1);
    }

    
}