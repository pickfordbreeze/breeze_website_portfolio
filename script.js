document.addEventListener('DOMContentLoaded', function () {
    // Menu Toggle for Mobile Devices
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('nav ul');

    menuToggle.addEventListener('click', function () {
        nav.classList.toggle('show');
    });

    // Hide the menu toggle button if not on mobile
    function handleResize() {
        if (window.innerWidth > 768) {
            nav.classList.remove('show');
            menuToggle.style.display = 'none';
        } else {
            menuToggle.style.display = 'block';
        }
    }

    window.addEventListener('resize', handleResize);
    handleResize();

    //gallery on project page
    const galleryItemsData = [
        {
            imgSrc: 'images/turtle_site.jpg',
            title: 'Malama i Na Honu Site Project',
            description: 'Description of Project 1.'
        },
        {
            imgSrc: 'images/sail_app.jpg',
            title: 'Sail App Project',
            description: 'Description of Project 2.'
        },
        {
            imgSrc: 'images/manta_render.jpg',
            title: 'Magical Product Project',
            description: 'Description of Project 3.'
        },
        {
            imgSrc: 'images/manta_sketch.jpg',
            title: 'Magical Product Sketch',
            description: 'Description of Project 4.'
        },
        {
            imgSrc: 'images/emotephone.jpg',
            title: 'Interactive Website with Audio',
            description: 'Description of Project 5.'
        },
        {
            imgSrc: 'images/personal_figma.jpg',
            title: 'Figma Flow Website Design',
            description: 'Description of Project 6.'
        }
    ];

    const galleryContainer = document.getElementById('gallery-container');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    let currentIndex = 0;

    function createGalleryItem(item, index) {
        const galleryItem = document.createElement('div');
        galleryItem.classList.add('gallery-item');
        if (index === currentIndex) {
            galleryItem.classList.add('current');
        }

        const img = document.createElement('img');
        img.src = item.imgSrc;
        img.alt = item.title;

        const caption = document.createElement('div');
        caption.classList.add('caption');

        const title = document.createElement('h3');
        title.textContent = item.title;

        const description = document.createElement('p');
        description.textContent = item.description;

        caption.appendChild(title);
        caption.appendChild(description);
        galleryItem.appendChild(img);
        galleryItem.appendChild(caption);

        galleryItem.addEventListener('click', () => {
            currentIndex = index;
            showGalleryItem(currentIndex);
        });

        galleryContainer.appendChild(galleryItem);
    }

    function showGalleryItem(index) {
        const items = document.querySelectorAll('.gallery-item');
        items.forEach((item, i) => {
            item.classList.remove('current');
            if (i === index) {
                item.classList.add('current');
            }
        });
        updateNavButtons();
    }

    function showNextItem() {
        currentIndex = (currentIndex + 1) % galleryItemsData.length;
        showGalleryItem(currentIndex);
    }

    function showPrevItem() {
        currentIndex = (currentIndex - 1 + galleryItemsData.length) % galleryItemsData.length;
        showGalleryItem(currentIndex);
    }

    function updateNavButtons() {
        prevBtn.style.backgroundImage = `url(${galleryItemsData[(currentIndex - 1 + galleryItemsData.length) % galleryItemsData.length].imgSrc})`;
        nextBtn.style.backgroundImage = `url(${galleryItemsData[(currentIndex + 1) % galleryItemsData.length].imgSrc})`;
    }

    galleryItemsData.forEach((item, index) => {
        createGalleryItem(item, index);
    });

    prevBtn.addEventListener('click', showPrevItem);
    nextBtn.addEventListener('click', showNextItem);

    showGalleryItem(currentIndex);
});
