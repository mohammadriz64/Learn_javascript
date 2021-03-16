function addText(){
    a=Number(document.getElementById("givenum").value);
    if(a % 2 == 0){
        document.getElementById("print").innerHTML="even number..!!!";
    }
    else{
        document.getElementById("print").innerHTML="even odd..!!!";

    }
}