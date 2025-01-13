let username;
let age;

document.getElementById(`submitBTN`).onclick = function(){
    username = document.getElementById(`username`).value;
    age = document.getElementById(`age`).value;
    document.getElementById(`myH1`).textContent = `Happy birthday ${username}!`
    document.getElementById(`myH2`).textContent = `You are ${age} years old!`
}

function happyBirthday(){
    console.log("Happy birthday to you!")
    console.log("Happy birthday to you!")
    console.log(`Happy birthday dear ${`username`}`)
    console.log("Happy birthday to you!")
    console.log(`You are ${`age`} !`)
}