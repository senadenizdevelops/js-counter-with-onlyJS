let count = 0;

function counterFunction() {
    document.getElementById("counter").style.fontSize = "2rem";
    document.getElementById("counter").style.fontWeight= "800";
    document.getElementById("counter").style.color= "tomato";

    count++;
    document.getElementById("counter").innerText = count;
    console.log("Clicked button")


    
}




