emailjs.init("MoF9ctOe6jGCQOuDr"); // Replace with your EmailJS Public Key

// Booking Form Submission
document.getElementById('bookingForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const service = document.getElementById('service').value;
    const date = document.getElementById('date').value;

    const templateParams = {
        from_name: name,
        from_email: email,
        phone: phone,
        service: service,
        date: date,
        to_email: 'solomokirwa15@gmail.com' // Replace with your email
    };

    emailjs.send('service_x0urd1a', 'template_iocn6x8', templateParams)
        .then(function(response) {
            alert('Booking successful! We’ll contact you soon.');
            document.getElementById('bookingForm').reset();
        }, function(error) {
            console.error('Booking Error:', error);
            alert('Failed to book service. Please try again.');
        });
});

// Contact Form Submission
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('contact-name').value;
    const email = document.getElementById('contact-email').value;
    const message = document.getElementById('contact-message').value;

    const templateParams = {
        from_name: name,
        from_email: email,
        message: message,
        to_email: 'solomonkirwa15@gmail.com' 
    };

    emailjs.send('service_o0w56rd', 'template_loiw8ol', templateParams)
        .then(function(response) {
            alert('Message sent successfully! We’ll get back to you soon.');
            document.getElementById('contactForm').reset();
        }, function(error) {
            console.error('Contact Error:', error);
            alert('Failed to send message. Please try again.');
        });
});

// Smooth Scroll for Navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});