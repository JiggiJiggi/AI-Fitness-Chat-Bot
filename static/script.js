
console.log("Chatbot JavaScript loaded!");

// Add event listener to the form submission
document.querySelector("form").addEventListener("submit", function (event) {
    alert("Your query has been submitted!");
});

// Example: Add dynamic behavior (e.g., changing button text on hover)
document.querySelector("button").addEventListener("mouseover", function () {
    this.textContent = "Click to Submit!";
});

document.querySelector("button").addEventListener("mouseout", function () {
    this.textContent = "Submit";
});
