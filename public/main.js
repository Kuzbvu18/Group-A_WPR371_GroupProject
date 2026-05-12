document.addEventListener('DOMContentLoaded', () => {
    console.log("Advanced Events Frontend Active");

    // Simple search filter logic for the Events Page
    const searchInput = document.querySelector('input[placeholder="Search events..."]');
    if (searchInput) {
        searchInput.addEventListener('keyup', (e) => {
            const term = e.target.value.toLowerCase();
            const cards = document.querySelectorAll('.event-grid > div');
            
            cards.forEach(card => {
                const title = card.querySelector('h3').textContent.toLowerCase();
                if (title.includes(term)) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    }
});