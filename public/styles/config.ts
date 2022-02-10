export const scripts = [
    "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.5.1/gsap.min.js",
    "https://cdnjs.cloudflare.com/ajax/libs/parallax/3.1.0/parallax.min.js",
    "https://cdnjs.cloudflare.com/ajax/libs/Swiper/4.5.1/js/swiper.min.js",
    "../js/index.js"
];

const swiper = 'https://unpkg.com/swiper/swiper-bundle.min.css';


export const init = () => {
    document.body.style.cssText = `
            margin: 0;
            padding: 0;
            overflow-x: hidden;
            font-family: "Roboto";
            list-css: none;
            box-sizing: border-box;
            background: #000;
        `;

    const meta = document.createElement('meta');
    meta.name = "viewport";
    meta.content = "width=device-width, initial-scale=1.0";
    document.head.appendChild(meta);

    const link = document.createElement('link');
    link.setAttribute('rel', 'stylesheet');
    link.setAttribute('href', swiper);
    document.head.appendChild(link);
};