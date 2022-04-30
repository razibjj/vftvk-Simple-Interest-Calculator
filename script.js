/*
document.addEventListener("oninput", empty_principal);

function empty_principal() {
    document.getElementById("principal").value = "";
    document.getElementById("principal").style.color = "red";
}
*/

function compute() {

    p = document.getElementById("principal").value;
    
    var principal = document.getElementById("principal").value;

    if (principal > 0) {
        var rate = document.getElementById("rate").value;
        var years = document.getElementById("years").value;
        var interest = principal * years * rate / 100;
        // new Date object: we get current year + no. of years (user selected)
        var year = new Date().getFullYear()+parseInt(years);
        var amount = interest;

        document.getElementById("result").innerHTML="If you deposit "+principal+",\<br\>at an interest rate of "+rate+"%\<br\>You will receive an amount of "+amount+",\<br\>in the year "+year+"\<br\>";
        
        
    }
    else {
        alert("Enter a positive number");
        document.getElementById("principal").value = null;
    }

}

function updateRate() {
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;
}