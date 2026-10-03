document.querySelectorAll(".results").forEach((section) => {

    const track = section.querySelector(".results__track");
    const prev = section.querySelector('[data-direction="-1"]');
    const next = section.querySelector('[data-direction="1"]');

    // Required elements check
    if (!track || !prev || !next) {
        return;
    }

    // Update Previous / Next buttons
    function updateArrows() {

        // Previous button
        prev.disabled = track.scrollLeft <= 1;

        // Next button
        next.disabled =
            track.scrollLeft + track.clientWidth >=
            track.scrollWidth - 1;
    }

    // Button click
    [prev, next].forEach((button) => {

        button.addEventListener("click", () => {

            // Tumhare final HTML ke according
            const card = track.querySelector(".logo__card");

            if (!card) {
                return;
            }

            // Get carousel gap
            const gap =
                parseFloat(getComputedStyle(track).gap) || 0;

            // Get card width
            const cardWidth =
                card.getBoundingClientRect().width;

            // Direction
            const direction =
                Number(button.dataset.direction);

            // Scroll one card
            track.scrollBy({
                left: direction * (cardWidth + gap),
                behavior: "smooth"
            });

        });

    });

    // Update arrows while scrolling
    track.addEventListener("scroll", updateArrows);

    // Update arrows on screen resize
    window.addEventListener("resize", updateArrows);

    // Initial state
    updateArrows();

});