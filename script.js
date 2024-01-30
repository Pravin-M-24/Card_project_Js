let firstname = document.getElementById("firstname")
let lastname = document.getElementById("lastname")
let coun = document.getElementById("country")
let num = document.getElementById("phoneNo")
let s = document.getElementById("state")
let ci = document.getElementById("city")
let vil = document.getElementById("village")

let user = localStorage.getItem("user");

 console.log(user);

if(user){

    let userData = JSON.parse(user);

    console.log(userData);

    firstname.textContent = userData.fn;
    lastname.textContent = userData.ln;
     coun.textContent = userData.country
     num.textContent = userData.phn;
     s.innerText = userData.state;
     ci.textContent = userData.city;
     vil.textContent = userData.village;
       
}
else{
    let fn = prompt("Enter First Name");
    let ln = prompt("Enter Last Name");
    let country = prompt("Enter Country Name");
    let phn = prompt("Enter Phone Number");
    let state = prompt("Enter State Name");
    let city = prompt("Enter City Name");
    let village = prompt("Enter Village Name");

    let userData = {
           fn,
           ln,
          country,
          phn,
          state,
           city,
         village
        }
    localStorage.setItem("user", JSON.stringify(userData));

    firstname.textContent = userData.fn;
    lastname.textContent = userData.ln;
     coun.textContent = userData.country
     num.textContent = userData.phn;
     s.innerText = userData.state;
     ci.textContent = userData.city;
     vil.textContent = userData.village;
    
}
