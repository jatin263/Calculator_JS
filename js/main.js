const output = document.getElementById('expression');
output.value=0;
let on=true;
function clearAll(){
    output.value="0";
    return;
}
function backspace() {
    var f= output.value;
    if(f.length>0){
        output.value=f.slice(0,-1);
    }
    else{
        alert("Nothing to delete");
        clearAll();
    }
    return;
}
function switchMode(){
    alert("Wait I am working on It");
}

function offCal(){
    if(on==false){
        document.querySelectorAll('.btnDiv button').forEach(element => {
            element.disabled=false;
        });
        output.value="0";
        on=true;
        return;
    }
    document.querySelectorAll('.btnDiv button').forEach(element => {
        element.disabled=true;
    });
    output.value="OFF";
    document.getElementById("calONOF").disabled=false;
    document.getElementById("calONOF").innerHTML="ON";
    on=false;
    
}

function insert(num){
    if(output.value=="0"){
        output.value="";
    }
    output.value+=num;
}
function equals(){
    try{
        output.value=eval(output.value);
        if(output.value=="NaN"){
            alert("Invalid Expression");
            clearAll();
        }
        if(output.value=="undefined"){
            alert("Invalid Expression");
            clearAll();
        }
    }
    catch{
        alert("Invalid Expression");
        clearAll();
    }
}