
document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector(".php-email-form");
    
    form.addEventListener("submit", function (e) {
        e.preventDefault(); // Prevent default form submission
        const formData = new FormData(form);
        
        fetch(form.action, {
            method: "POST",
            body: formData
        })
        .then(response => response.text())
        .then(data => {
            if (data.includes("success")) { // Customize this check based on your PHP response
                document.querySelector(".sent-message").style.display = "block";
                document.querySelector(".error-message").style.display = "none";
                form.reset(); // Reset form after success
            } else {
                document.querySelector(".error-message").style.display = "block";
                document.querySelector(".error-message").innerHTML = "Error: " + data;
            }
        })
        .catch(error => {
            document.querySelector(".error-message").style.display = "block";
            document.querySelector(".error-message").innerHTML = "Error: " + error.message;
        });
    });
});
