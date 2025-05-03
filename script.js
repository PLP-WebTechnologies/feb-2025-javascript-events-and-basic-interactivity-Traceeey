// Change background color on click
document.getElementById("color-btn").addEventListener("click", () => {
    document.body.style.backgroundColor =
      "#" + Math.floor(Math.random() * 16777215).toString(16);
  });
  
  // Secret double-click action
  document.getElementById("secret-btn").addEventListener("dblclick", () => {
    alert("🕵️‍♂️ Secret unlocked! Hey there, this is an amazing thing to create. Giving more info about Japan and Italy. Do you want to go????");
  });
  
  // Keypress detection
  document.addEventListener("keydown", (e) => {
    if (e.key === "f") {
      alert("You pressed F for Fun! Then be prepared to have fun! 🎉");
    }
  });
  
  // Tab functionality
  document.querySelectorAll(".tab").forEach((btn) => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".tab-content").forEach((tab) =>
        tab.classList.add("hidden")
      );
      document.getElementById(btn.dataset.target).classList.remove("hidden");
    });
  });
  
  // Form validation
  document.getElementById("signup-form").addEventListener("submit", (e) => {
    e.preventDefault();
  
    const email = document.getElementById("email");
    const password = document.getElementById("password");
    const msg = document.getElementById("form-msg");
  
    if (!email.validity.valid) {
      msg.textContent = "Please enter a valid email.";
      msg.style.color = "red";
      return;
    }
  
    if (password.value.length < 8) {
      msg.textContent = "Password must be at least 8 characters.";
      msg.style.color = "red";
      return;
    }
  
    msg.textContent = "Form submitted successfully! 🎉";
    msg.style.color = "green";
  });
  
  // Real-time feedback
  document.getElementById("password").addEventListener("input", (e) => {
    const msg = document.getElementById("form-msg");
    if (e.target.value.length < 8) {
      msg.textContent = "Password too short!";
      msg.style.color = "orange";
    } else {
      msg.textContent = "";
    }
  });

  //Slideshow functionality
  const slides = [
    "images/pexels-apasaric-2506923.jpg",
    "images/pexels-vince-2233348.jpg",
    "images/pexels-belle-co-99483-402028.jpg",
    "images/pexels-dsd-143941-1822605.jpg",
    "images/pexels-jacobmorch-572780.jpg",
    "images/pexels-mark-neal-201020-2225442.jpg",
    "images/pexels-ron-lach-1015560.jpg",
  ];
  
  let currentSlide = 0;
  
  function updateSlide() {
    document.getElementById("slide-img").src = slides[currentSlide];
  }
  
  document.getElementById("next").addEventListener("click", () => {
    currentSlide = (currentSlide + 1) % slides.length;
    updateSlide();
  });
  
  document.getElementById("prev").addEventListener("click", () => {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    updateSlide();
  });
  
  