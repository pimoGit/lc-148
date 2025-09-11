// # Fase di preparazione
//  Preparo i dati su cui basare il carosello
const pics = [
    {
        image: 'img/01.jpg',
        title: 'Svezia',
        text: 'Scandinavia\'s blend of nature and innovation.',
    }, {
        image: 'img/02.jpg',
        title: 'Norvegia',
        text: 'Fjords, mountains, and coastal charm in Nordic splendor.',
    }, {
        image: 'img/03.jpg',
        title: 'Alaska',
        text: 'Untamed wilderness and rugged beauty in the Last Frontier.',
    }, {
        image: 'img/04.jpg',
        title: 'Gran Canyon',
        text: 'Nature\'s masterpiece, a colorful tapestry of cliffs.',
    }, {
        image: 'img/05.jpg',
        title: "Skyrim",
        text: 'Epic Nordic fantasy with dragons and ancient magic.',
    }
];

// selezioniamo elemento di output delle slide
const carouselGallery = document.querySelector(".gallery");

// generiamo i blocci delle slide in base a array e lo insieriemo in page
renderingSlides();






// FUNZIONI
function renderingSlides() {
    // variabile di accumulo
    let slides = "";

    // cicliamo array di oggetti slides
    for (let index = 0; index < pics.length; index++) {
        const slide = pics[index];
        // console.log(slide);

        // destrutturazione oggetto slide
        const { title, text, image } = slide;

        slides += `
        <figure class="active">
            <figcaption>
                <h2>${title}</h2>
                <h3>${text}</h3>
            </figcaption>
            <img alt="${title}" src="${image}">
        </figure>
`;
        console.log("iterazione numero", index, slides);
    }

    // inseriamo nell'elemento di putput le slides create
    carouselGallery.innerHTML = slides;
}