let texts = document.querySelectorAll(".middle-content");

window.addEventListener("scroll", function () {
  texts.forEach(text => {
    let position = text.getBoundingClientRect().top;

    if (position < window.innerHeight - 100 && position > 0) {
      text.classList.add("show");
    } else {
      text.classList.remove("show");
    }
  });
});

let index = document.querySelectorAll(".right-content");

window.addEventListener("scroll", function () {
  index.forEach(text => {
    let position = text.getBoundingClientRect().top;

    if (position < window.innerHeight - 100 && position > 0) {
      text.classList.add("show");
    } else {
      text.classList.remove("show");
    }
  });
});


let bottom = document.querySelectorAll(".bottom-container");

window.addEventListener("scroll", function () {
  bottom.forEach(text => {
    let position = text.getBoundingClientRect().top;

    if (position < window.innerHeight - 100 && position > 0) {
      text.classList.add("show");
    } else {
      text.classList.remove("show");
    }
  });
});

let onlyh2= document.querySelectorAll(".onlyText h2");

window.addEventListener("scroll", function () {
  onlyh2.forEach(text => {
    let position = text.getBoundingClientRect().top;

    if (position < window.innerHeight - 100 && position > 0) {
      text.classList.add("show");
    } else {
      text.classList.remove("show");
    }
  });
});

let onlyp = document.querySelectorAll(".onlyText p");

window.addEventListener("scroll", function () {
  onlyp.forEach(text => {
    let position = text.getBoundingClientRect().top;

    if (position < window.innerHeight - 100 && position > 0) {
      text.classList.add("show");
    } else {
      text.classList.remove("show");
    }
  });
});


let abouthero = document.querySelectorAll(".btn-h2-p h2");

window.addEventListener("scroll", function () {
  abouthero.forEach(text => {
    let position = text.getBoundingClientRect().top;

    if (position < window.innerHeight - 100 && position > 0) {
      text.classList.add("show");
    } else {
      text.classList.remove("show");
    }
  });
});

let aboutherop = document.querySelectorAll(".btn-h2-p p");

window.addEventListener("scroll", function () {
  aboutherop.forEach(text => {
    let position = text.getBoundingClientRect().top;

    if (position < window.innerHeight - 100 && position > 0) {
      text.classList.add("show");
    } else {
      text.classList.remove("show");
    }
  });
});


let footer = document.querySelectorAll(".footer-card");

window.addEventListener("scroll", function () {
  footer.forEach(text => {
    let position = text.getBoundingClientRect().top;

    if (position < window.innerHeight - 100 && position > 0) {
      text.classList.add("show");
    } else {
      text.classList.remove("show");
    }
  });
});



// Initialize EmailJS
  (function(){
    emailjs.init("771u3hEI7VM5CajPp"); // <-- replace
  })();

  document.getElementById("contact-form").addEventListener("submit", function(e) {
    e.preventDefault();

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let message = document.getElementById("message").value.trim();

    // Validation
    if(name === "" || email === "" || message === "") {
      alert("All fields are required!");
      return;
    }

    // Email format check
    let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if(!email.match(emailPattern)) {
      alert("Enter valid email!");
      return;
    }

    // Send email
    emailjs.send("service_y00h08m", "template_jmdovlk", {
      from_name: name,
      from_email: email,
      message: message
    })
    .then(function(response) {
      alert("Email sent successfully!");
    }, function(error) {
      alert("Failed to send email");
    });

  }); 


  function toggleMenu() {
  let nav = document.getElementById("navLinks");
  nav.classList.toggle("active");
}


let faqs = document.querySelectorAll(".faq");

faqs.forEach(faq => {
  faq.querySelector(".faq-question").addEventListener("click", () => {
    faq.classList.toggle("active");
  });
});