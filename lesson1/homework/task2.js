let username = prompt("Write your name");

username = username.substring(0, 1).toUpperCase() + username.substring(1, username.length).toLowerCase()

alert("Your name is " + username)
