function gettingElementById()
{
    let userName = document.getElementById("Uname").value;
    document.getElementById("Puname").innerHTML = userName;
    return false;
}

function gettingElementByClass()
{
    let userFname = document.getElementsByClassName("Fname")[0].value;
    document.getElementsByClassName("Pfname")[0].innerHTML = userFname;
    return false;
}

function gettingElementByTagName()
{
    let phoneNumber = document.getElementsByTagName("input")[0].value;
    document.getElementsByTagName("h1")[0].innerHTML = phoneNumber;
    return false;
}

function gettingElementByName()
{
    let email = document.getElementsByName("email")[0].value;
    document.getElementById("Pemail").innerHTML = email;
    return false;
}