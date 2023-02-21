const registerForm = document.getElementById("register-form");
const loginForm = document.getElementById("login-form");

registerForm.addEventListener("submit", (event) => {
	event.preventDefault();
	const username = document.getElementById("username").value;
	const password = document.getElementById("password").value;
	
	// Here you can write the code to register the user, for example by making a POST request to a server
});

loginForm.addEventListener("submit", (event) => {
	event.preventDefault();
	const username = document.getElementById("login-username").value;
	const password = document.getElementById("login-password").value;
	
	// Here you can write the code to log in the user, for example by making a POST request to a server
});
