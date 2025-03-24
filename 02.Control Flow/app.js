

let myPassword = "CatMoogl";
let password;

if(myPassword.length===8) {password = "Welcome";console.log(password);
}
else if(myPassword.length<=8) {password = "Paaword is too short";console.log(password);
}
else if (myPassword.length>=8) {password="Too Long Password, Password should be 8 characters";console.log(password);
}
else {password= "Please provide a password";console.log(password);
}
