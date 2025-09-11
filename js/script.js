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
// seleziooniamo i tasti freccia
const nextArrow = document.getElementById("next");
const prevArrow = document.getElementById("prev");
// selezioniamo elemento container delle thumbs
const thumbsContainer = document.getElementById("thumbnails");


// generiamo i blocci delle slide in base a array e lo insieriemo in page
renderingSlides();


// andiamo a selezionare gli elemnti di slide creati
const images = document.querySelectorAll(".gallery figure");
console.log(images);
//  creo una variabile di indice della slide per getire la posizione
let currentActiveIndex = 0;
// setto l'active alla prima slide
images[0].classList.add("active");


// getsione navigazione NEXT
nextArrow.addEventListener("click",
    () => {

        const nuovoIndice = currentActiveIndex === images.length - 1 ? 0 : currentActiveIndex + 1;

        // let nuovoIndice;

        // if (currentActiveIndex === images.length - 1) {
        //     nuovoIndice = 0;
        // } else {
        //     nuovoIndice = currentActiveIndex + 1;
        // }

        setCurrentSlide(nuovoIndice);

    }
);


// getsione navigazione NEXT
prevArrow.addEventListener("click",
    () => {

        const nuovoIndice = currentActiveIndex === 0 ? images.length - 1 : currentActiveIndex - 1;

        // let nuovoIndice;

        // if (currentActiveIndex === 0) {
        //     nuovoIndice = images.length - 1;
        // } else {
        //     nuovoIndice = currentActiveIndex - 1;
        // }

        setCurrentSlide(nuovoIndice);

    }
);











// FUNZIONI
function renderingSlides() {
    // variabile di accumulo slides
    let slides = "";
    // variabile di accumulo thumbs
    let miniPic = "";

    // cicliamo array di oggetti slides
    for (let index = 0; index < pics.length; index++) {
        const slide = pics[index];
        // console.log(slide);

        // destrutturazione oggetto slide
        const { title, text, image } = slide;

        // acculiamo le slides
        slides += `
        <figure>
            <figcaption>
                <h2>${title}</h2>
                <h3>${text}</h3>
            </figcaption>
            <img alt="${title}" src="${image}">
        </figure>
        `;
        // console.log("iterazione numero", index, slides);

        // accumuliamo le thumbs
        miniPic += `
            <img alt="${title}" src="${image}">
        `;
        // console.log(miniPic);

    }

    // inseriamo nell'elemento di output le slides create
    carouselGallery.innerHTML = slides;
    // inseriamo nell'elemento di output le thumbs create
    thumbsContainer.innerHTML = miniPic;

}

//  setta la slide corrente
function setCurrentSlide(indexSlide) {

    // tolgo active da elemento corrente
    images[currentActiveIndex].classList.remove("active");

    // incrementiamo l'indice di ref slide
    currentActiveIndex = indexSlide;

    // agiungo active al nuovo elemento 
    images[currentActiveIndex].classList.add("active");

}