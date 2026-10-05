const slider = document.getElementById("expertiseSlider");

const tabs = document.querySelectorAll(".expertise__tab");


// ==========================================
// Data
// ==========================================

const expertiseData = {

    retail: [

        {
            category: "Retail",
            title: "How Ajnaa Jewels turned browsers into buyers with a rebuilt digital experience",
            description: "Increase in conversion rate, achieved in 3 months following a full brand and storefront redesign.",
            image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=1200&q=80"
        },

        {
            category: "Retail",
            title: "What a ₹50L brand and a ₹5Cr brand actually have in common",
            description: "Increase in conversion rate, achieved in 3 months following a full brand and storefront redesign.",
            image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1200&q=80"
        },

        {
            category: "Retail",
            title: "Creating a digital retail experience that converts",
            description: "A modern commerce experience designed for better engagement and higher sales.",
            image: "https://images.unsplash.com/photo-1556742111-a301076d9d18?auto=format&fit=crop&w=1200&q=80"
        }

    ],


    software: [

        {
            category: "Software & Platforms",
            title: "Building scalable platforms for modern businesses",
            description: "A high-performance digital platform designed to improve workflows and customer experiences.",
            image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80"
        },

        {
            category: "Software & Platforms",
            title: "Turning complex software into simple experiences",
            description: "We redesigned the platform experience to make complex workflows easier for users.",
            image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80"
        },

        {
            category: "Software & Platforms",
            title: "Digital products built for scale",
            description: "A robust digital product experience built around performance and usability.",
            image: "https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=1200&q=80"
        }

    ],


    edtech: [

        {
            category: "EdTech",
            title: "Making digital learning simple and engaging",
            description: "A user-focused education platform designed to improve learning outcomes.",
            image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&w=1200&q=80"
        },

        {
            category: "EdTech",
            title: "A better digital classroom experience",
            description: "Improved student engagement through a modern and intuitive learning experience.",
            image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1200&q=80"
        },

        {
            category: "EdTech",
            title: "Designing education platforms for growth",
            description: "A scalable platform designed for students, teachers and institutions.",
            image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=80"
        }

    ],


    distribution: [

        {
            category: "Distribution & Industrial",
            title: "Connecting industrial businesses with digital",
            description: "A digital transformation project designed to streamline operations and improve growth.",
            image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80"
        },

        {
            category: "Distribution & Industrial",
            title: "Modernizing industrial commerce",
            description: "A complete digital experience built for complex industrial businesses.",
            image: "https://images.unsplash.com/photo-1565610222536-ef125c59da2e?auto=format&fit=crop&w=1200&q=80"
        }

    ],


    consulting: [

        {
            category: "Technology Consulting",
            title: "Technology strategy that drives business growth",
            description: "Helping businesses transform their technology into a competitive advantage.",
            image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1200&q=80"
        },

        {
            category: "Technology Consulting",
            title: "From technology challenges to business solutions",
            description: "Strategic consulting that turns complex technology challenges into opportunities.",
            image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80"
        }

    ]

};


// ==========================================
// Create Swiper
// ==========================================

let expertiseSwiper = null;


// ==========================================
// Render Slides
// ==========================================

function renderSlides(category) {

    const cards = expertiseData[category];

    slider.innerHTML = "";


    cards.forEach((card) => {

        const slide = document.createElement("div");

        slide.className = "swiper-slide";


        slide.innerHTML = `

            <article class="expertise__card">

                <div class="expertise__content">

                    <div>

                        <span class="expertise__badge">
                            ${card.category}
                        </span>


                        <h3 class="expertise__card-title">
                            ${card.title}
                        </h3>


                        <p class="expertise__description">
                            ${card.description}
                        </p>

                    </div>


                    <a href="#" class="expertise__link">

                        Read article

                        <span class="expertise__link-arrow">
                            →
                        </span>

                    </a>

                </div>


                <div class="expertise__image">

                    <img
                        src="${card.image}"
                        alt="${card.title}"
                    >

                </div>

            </article>

        `;


        slider.appendChild(slide);

    });


    initializeSwiper();
}


// ==========================================
// Initialize Swiper
// ==========================================

function initializeSwiper() {

    // Destroy old Swiper
    if (expertiseSwiper) {

        expertiseSwiper.destroy(
            true,
            true
        );

    }


    expertiseSwiper = new Swiper(
        ".expertise__swiper",
        {

            slidesPerView: 1.05,

            spaceBetween: 20,

            speed: 700,

            grabCursor: true,


            // Navigation
            navigation: {

                nextEl: ".expertise__arrow--next",

                prevEl: ".expertise__arrow--prev"

            },


            // Pagination
            pagination: {

                el: ".expertise__pagination",

                clickable: true

            },


            // Responsive
            breakpoints: {

                768: {

                    slidesPerView: 1.5,

                    spaceBetween: 24

                },

                1200: {

                    slidesPerView: 2,

                    spaceBetween: 34

                }

            }

        }
    );

}


// ==========================================
// Tab Click
// ==========================================

tabs.forEach((tab) => {

    tab.addEventListener("click", () => {

        // Remove active
        tabs.forEach((item) => {

            item.classList.remove(
                "expertise__tab--active"
            );

        });


        // Add active
        tab.classList.add(
            "expertise__tab--active"
        );


        // Get category
        const category =
            tab.dataset.category;


        // Render
        renderSlides(category);

    });

});


// ==========================================
// Initial
// ==========================================

renderSlides("retail");