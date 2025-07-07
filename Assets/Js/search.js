const searchIcon = document.getElementById("searchIcon");
const searchInput = document.getElementById("searchInput");
const body = document.body;

searchIcon.addEventListener("click", function(event) {
    event.stopPropagation(); 

    if (searchInput.style.display === "none" || searchInput.style.display === "") {
        searchInput.style.display = "block";
        searchInput.classList.add("fadeInRight"); 
        searchIcon.style.display = "none";
    }
});

body.addEventListener("click", function(event) {
    if (!searchInput.contains(event.target) && !searchIcon.contains(event.target)) {
        searchInput.style.display = "none";
        searchIcon.style.display = "block";
        searchInput.classList.remove("fadeInRight"); 
    }
});