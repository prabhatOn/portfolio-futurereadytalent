function sendEmail() {
    Email.send({
        Host: "smtp.gmail.com",
        Username: "pd156776@gmail.com",
        Password: "F19251DBD26CB69DE31A918DE30673AC79EA",
        To: 'prabhatchaubey56@gmail.com',
        From: document.getElementById("email").value,
        Subject: "Portfolio",
        Body: "name: " + document.getElementById("name").value
            + "<br> Email:" + document.getElementById("email").value
            + "<br> subject:" + document.getElementById("subject").value
            + "<br> location:" + document.getElementById("location").value
            + "<br> Message:" + document.getElementById("message").value
    }).then(
        message => alert("Message Sent succesfully")
    );
}



document.querySelector('.cross').style.display = 'none';
document.querySelector('.hamburger').addEventListener("click", () => {
    document.querySelector('.sidebar').classList.toggle('sidebargo');
    if (document.querySelector('.sidebar').classList.contains('sidebargo')) {
        document.querySelector('.ham').style.display = 'inline'
        document.querySelector('.cross').style.display = 'none'
    } else {
        document.querySelector('.ham').style.display = 'none'
        setTimeout(() => {
            document.querySelector('.cross').style.display = 'inline'
        }, 580)

    }
})
document.addEventListener("DOMContentLoaded", function () {
    const slides = document.querySelectorAll(".slide");
    let currentSlideIndex = 0;

    // Initially show the first slide
    slides[currentSlideIndex].style.opacity = 1;

    function showSlide(index) {
        slides[currentSlideIndex].style.opacity = 0;
        currentSlideIndex = index % slides.length;
        slides[currentSlideIndex].style.opacity = 1;
    }

    function startCarousel() {
        setInterval(() => {
            showSlide(currentSlideIndex + 1);
        }, 4000); // Change slide every 4 seconds
    }

    startCarousel();
});