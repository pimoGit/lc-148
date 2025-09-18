// selezione delgli elementi di output
const contOutput = document.querySelector(".container");
console.log(contOutput);

// setto la variabile dell'endpoint
const apiRef = "https://jsonplaceholder.typicode.com/posts";


// chiamata ajax all'api
axios.get(apiRef).then((response) => {
    // estrapoliamo i dati
    // console.log(response);
    const posts = response.data;
    // console.log(posts);



    // creo var di accumulo output (stringa)
    let postsString = "";

    // utilizzo i dati (array per creare elementi di pagina)
    posts.forEach(postItem => {
        console.log(postItem);

        // ad ogni post aggiungiamo un pezzo alla stringa di output
        postsString += `
        <div class="card">
            <h2>${postItem.title}</h2>
            <span>${postItem.id}</span>
            <p>${postItem.body}</p>
        </div>
        `;

    });

    // faccio output con trasformazione di stringa in HTML
    contOutput.innerHTML = postsString;


})