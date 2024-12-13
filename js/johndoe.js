// smooth scroll
$(document).ready(function(){
    $(".navbar .nav-link").on('click', function(event) {

        if (this.hash !== "") {

            event.preventDefault();

            var hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 700, function(){
                window.location.hash = hash;
            });
        } 
    });

    
  
});

// protfolio filters
$(window).on("load", function() {
    var t = $(".portfolio-container");
    t.isotope({
        filter: ".new",
        animationOptions: {
            duration: 750,
            easing: "linear",
            queue: !1
        }
    }), $(".filters a").click(function() {
        $(".filters .active").removeClass("active"), $(this).addClass("active");
        var i = $(this).attr("data-filter");
        return t.isotope({
            filter: i,
            animationOptions: {
                duration: 750,
                easing: "linear",
                queue: !1
            }
        }), !1
    });
});




// new script



    // Main script for dark mode
const checkbox = document.getElementById("checkbox");

// Function to toggle dark mode
function applyDarkMode(isDarkMode) {
    const body = document.body; // Directly target the body
    const elements = document.querySelectorAll(".card, p, span"); // Add your desired class or tag selectors

    if (isDarkMode) {
        // Apply dark mode to the body
        body.style.backgroundColor = "black";
        body.style.color = "white";

        // Apply dark mode to nested elements
        elements.forEach(element => {
            element.style.backgroundColor = "black";
            element.style.color = "white";
        });
    } else {
        // Reset to light mode for the body
        body.style.backgroundColor = "white";
        body.style.color = "black";

        // Reset styles for nested elements
        elements.forEach(element => {
            element.style.backgroundColor = "";
            element.style.color = "";
        });
    }
}

// Event listener for the checkbox
checkbox.addEventListener("change", () => {
    const isDarkMode = checkbox.checked;

    // Apply dark or light mode
    applyDarkMode(isDarkMode);

    // Save theme to localStorage
    localStorage.setItem("theme", isDarkMode ? "dark" : "light");
});

// Apply the saved theme on page load
window.addEventListener("load", () => {
    const savedTheme = localStorage.getItem("theme");

    // Set checkbox state and apply theme
    if (savedTheme === "dark") {
        checkbox.checked = true;
        applyDarkMode(true);
    } else {
        applyDarkMode(false);
    }
});






// new script end

// const elements = document.querySelectorAll("body");

// // Add an event listener to the button
// document.getElementById("darkModeButton").addEventListener("click", () => {
//     elements.forEach(element => {
//         // Check if the element already has dark mode applied
//         if (element.style.backgroundColor === "white") {
//             // Reset to light mode
           
//             element.style.color = "white";
//             element.style.backgroundColor = "black";
//         } else {
//             // Apply dark mode
//             element.style.backgroundColor = "white";
//             element.style.color = "black";
//         }
//     });
// });









