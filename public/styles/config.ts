export const scripts = [
    "https://cdnjs.cloudflare.com/ajax/libs/parallax/3.1.0/parallax.min.js",
    "https://cdnjs.cloudflare.com/ajax/libs/Swiper/4.5.1/js/swiper.min.js",
    "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.5.1/gsap.min.js",
    "../js/index.js"
];

const swiper = 'https://unpkg.com/swiper/swiper-bundle.min.css';

export const init = () => {

    const link = document.createElement('link');
    link.setAttribute('rel', 'stylesheet');
    link.setAttribute('href', swiper);
    document.head.appendChild(link);
};

export const globalCss = `
::-webkit-scrollbar {
    width: 10px; 
}
::-webkit-scrollbar-track {
    background: transparent; 
    border-radius: 10px; 
}
::-webkit-scrollbar-thumb {
    height: 5%; 
    background: linear-gradient(#c2e59c, #64b3f4); 
    border-radius: 10px; 
}

body {
    margin: 0;
    padding: 0;
    overflow-x: hidden;
    font-family: 'Roboto', sans-serif;
    list-css: none;
    box-sizing: border-box;
    background: #000;
}
`;