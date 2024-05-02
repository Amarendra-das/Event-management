document.addEventListener("DOMContentLoaded", function () {
    const events = [
        { id: 1, name: "Conference A", date: "2024-03-14", location: "City A" },
        { id: 2, name: "Party B", date: "2024-03-13", location: "City B" },
        { id: 3, name: "Wedding C", date: "2024-04-12", location: "City C" },
    ];


    function renderEventList() {
        const eventListContainer = document.getElementById("event-list");
        eventListContainer.innerHTML = "";
        events.forEach(event => {
            const eventItem = document.createElement("div");
            eventItem.className = "event-item";
            eventItem.innerHTML = `
                <h2>${event.name}</h2>
                <p>Date: ${event.date}</p>
                <p>Location: ${event.location}</p>
                <button onclick="openModal(${event.id})">Details</button>
            `;
            eventListContainer.appendChild(eventItem);
        });
    }
    renderEventList();

    
    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            targetSection.scrollIntoView({ behavior: 'smooth' });
        });
    });

    
    const carouselSlides = document.querySelectorAll('.carousel-slide');
    let slideIndex = 0;

    function showSlides() {
        carouselSlides.forEach(slide => {
            slide.style.display = 'none';
        });
        slideIndex++;
        if (slideIndex > carouselSlides.length) {
            slideIndex = 1;
        }
        carouselSlides[slideIndex - 1].style.display = 'block';
        setTimeout(showSlides, 5000); 
    }
    showSlides();
});


function openModal(eventId) {
    const selectedEvent = events.find(event => event.id === eventId);
    document.getElementById("modal-event-name").textContent = selectedEvent.name;
    document.getElementById("modal-event-date").textContent = `Date: ${selectedEvent.date}`;
    document.getElementById("modal-event-location").textContent = `Location: ${selectedEvent.location}`;
    document.getElementById("modal-container").style.display = "flex";
}


function closeModal() {
    document.getElementById("modal-container").style.display = "none";
}


function bookTicket() {
    alert("Ticket booked!");
    closeModal();
}
