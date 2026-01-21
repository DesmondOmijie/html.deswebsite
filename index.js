



// hamburger menu across all pages...///

document.addEventListener("DOMContentLoaded", function (){
	let hamburger = document.querySelector(".hamburger");
	let navMenu = document.querySelector("nav ul");

	if(!hamburger || !navMenu) return;

	hamburger.addEventListener("click", function () {

		hamburger.classList.toggle("active");
		navMenu.classList.toggle("active");
	});

	document.querySelectorAll("nav ul li a").forEach(link => {
		link.addEventListener("click", function () {
			hamburger.classList.remove("active");
			navMenu.classList.remove("active");
		});
	});
});





document.addEventListener("DOMContentLoaded", function () {
	let header = document.querySelector("header");

	if (!header) return;

	window.addEventListener("scroll", function () {
		if(window.scrollY > 1) {
			header.classList.add("sticky");
		} else {
			header.classList.remove("sticky");
		}
	});
});


// code for card animation.....



let observer = new IntersectionObserver(entries => {
	entries.forEach(entry =>{
		if(entry.isIntersecting){
			entry.target.classList.add("show");
			observer.unobserve(entry.target);
		}
	});
});


document.querySelectorAll(".reveal").forEach(el => observer.observe(el));



// code for contact buttons ......../////


let buttons = document.querySelectorAll(".btn3");




buttons.forEach(function(btn) {

	btn.addEventListener("click", function(){
	let phoneNumber = "2349068001346"
	let message = "Hello, I want to book an appointment";

	let url = "https://wa.me/" + phoneNumber + "?text=" + encodeURIComponent(message);
	window.open(url, "_blank");
} );
});



// code for the form ......////

let form = document.querySelector("form");

form.addEventListener("submit", function(e){
	e.preventDefault();

	let name = form.name.value.trim();
	let email = form.email.value.trim();
	let message = form.message.value.trim();


	//  if(!name || !email || !message){
	//  	("Please fill in all fields");
	// 	return;
	// }


	emailjs.send("service_m4iq5ar", "template_mrqyrka", {
		from_name:name,
		from_email:email,
		message:message
	})

	.then(() => {
		alert("Message sent successfully");

		form.reset();
	})

	.catch(error => {
		alert("Failed to send message");
		console.error("EmailJS Error:", error);
	});
});