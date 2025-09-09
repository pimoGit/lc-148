const classi =

    [

        {
            'nome': 'Classe 1',
            'numero_studenti': 10
        },

        {
            'nome': 'Classe 2',
            'numero_studenti': 15
        }

    ];


// aggiungiamo un elemento
const nuovaClasse = {
    'nome': 'Classe 3',
    'numero_studenti': 20
};

classi.push(nuovaClasse);
console.log(classi);

// ciclo la mia lista di classi
for (let i = 0; i < classi.length; i++) {
    let classeN = classi[i];
    // console.log(classeN.numero_studenti);

    for (let nomeProp in classeN) {
        console.log(nomeProp, classeN[nomeProp]);
    }

}

