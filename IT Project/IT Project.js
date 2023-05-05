

window.onload = () =>
{
    const backBtn = document.getElementById("backBtn");
    backBtn.onclick = () =>
    {
        window.history.go(-1);
    }

    let pass1 = document.getElementById("password");
    let err_box = document.getElementsByClassName("error")[0]; 

    pass1.oninput = () =>
    {
        err_box.style.opacity= 0;
    }
    
}



function myFunction() {
    var x = document.getElementById("password");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  }



function myFunction_confirm() {
    var x = document.getElementById("confirm");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  }

function validInput(flag=0)
{
    let pass1 = document.getElementById("password");
    let pass2 = document.getElementById("confirm");
    //store password1 value in variable
    let passwordChar = pass1.value;
    
    //define error box (var) is used to set then to global
    let err_box = document.getElementsByClassName("error")[0];

    err_box.style.color = "red";
    err_box.style.opacity = 1;
    //error message 
    let err = " ";

    
    

    //check for special characters
    if(!( (passwordChar.includes('@')) || (passwordChar.includes('!')) || (passwordChar.includes('#')) || (passwordChar.includes('^')) || (passwordChar.includes('$')) || (passwordChar.includes('%')) || (passwordChar.includes('&')) || (passwordChar.includes('-')) || (passwordChar.includes('*')) || (passwordChar.includes('_'))))
    {
        flag = 4;
    }

    //check first character if capital
    if( !(passwordChar[0] >= 'A' && passwordChar[0]<= 'Z') )
    {
        flag = 1;
    }

    //check for length of the password
    if(!(passwordChar.length > 8))
    {
        flag = 3;
    }


    //check matching
    if(!(pass1.value == pass2.value))
    {
        pass1.value = "";
        pass2.value = "";
        flag = 2;
    }   
    

    //check number
    for(let num = 0; num <=9 ; num++)
    {
        if ((passwordChar.includes(num)))
        {
            break;
        }
        if(num == 9)
        {
            flag=5;
        }
    }

    //check which condition is false
    if(flag != 0)
    {
        switch(flag)
        {
            case 1:
                err = "First Letter in password Must be capital !";
                break;
            case 2:
                err = "Passwords Not matching !";
                break;
            case 3:
                err = "Password lenght must be more than 8 characters !";
                break;
            case 4:
                err = "Password Must include special characrter !";
                break;
            case 5:
                err = "Password Must include a number !";
                break;
        }

        
        err_box.innerHTML = err;
        
        return false;
    }
    
    return true;
}