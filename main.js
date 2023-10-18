var OnMyList = true

window.onload = function () {
    document.getElementById("AddListID").src = 'x-white.png';
    document.getElementById("AddListID").style.transform = 'rotate(45deg)';
};

function login(){
    console.log("Logging In");
    document.getElementById("navProfilePicID").style.display = "block";
    document.getElementById("navProfilePicID").src = "LunaPic.png";
    document.getElementById("navProfileNameID").innerHTML = "Luna";
    console.log("You are logged in as Luna");
}

function myList(){
    if(OnMyList == true){
        document.getElementById("AddListID").src = 'check-purple.png';
        document.getElementById("AddListID").style.transform = 'rotate(0deg)';
        OnMyList = false;
    }
    else if (OnMyList == false){
        document.getElementById("AddListID").src = 'x-purple.png';
        document.getElementById("AddListID").style.transform = 'rotate(45deg)';
        OnMyList = true;
    }
}
//change Play Button colorn at mouse hover
function playButtonMouseOver(){
    document.getElementById("playButtonID").src = 'PlayButton-purple.png';

}
function playButtonMouseNotOver(){
    document.getElementById("playButtonID").src = 'PlayButton-white.png';
}

function listButtonMouseOver(){
    if(OnMyList == true){
        document.getElementById("AddListID").src = 'x-purple.png';
    }
    else if (OnMyList == false){
        document.getElementById("AddListID").src = 'check-purple.png';
    }
}
function listButtonMouseNotOver(){
    if(OnMyList == true){
        document.getElementById("AddListID").src = 'x-white.png';
    }
    else if (OnMyList == false){
        document.getElementById("AddListID").src = 'check-white.png';
    }
}