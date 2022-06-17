let images = [
    { url: './assets/utopia.jpg', title: 'UTOPIA (2022)', info: 'Utopia é o próximo quarto álbum de estúdio do rapper americano Travis Scott. Está programado para ser lançado pela Cactus Jack Records e Epic Records. O álbum seguirá seu terceiro álbum de estúdio Astroworld e seu álbum de compilação JackBoys.' },
    { url: './assets/owl_pharaoh.jpg', title: 'Owl Pharaoh (2013)', info: 'Owl Pharaoh é a mixtape solo de estreia do rapper americano Travis $cott. Foi lançado em 21 de maio de 2013, na iTunes Store e disponível para download gratuito pela Grand Hustle Records e Epic Records.' },
    { url: './assets/db_rodeo.jpg', title: 'Days Before Rodeo (2014)', info: 'Days Before Rodeo é a segunda mixtape do rapper americano Travis $cott. Foi lançado gratuitamente em 18 de agosto de 2014, pela Grand Hustle Records. A mixtape apresenta participações especiais de Young Thug, Big Sean, The 1975, Rich Homie Quan, Migos, T.I. e Peewee Longway.' },
    { url: './assets/rodeo.jpg', title: 'Rodeo (2015)', info: 'Rodeo é o álbum de estreia do rapper e produtor musical americano Travis Scott. Foi lançado em 4 de setembro de 2015, pela Grand Hustle Records e distribuído pela Epic Records.' },
    { url: './assets/bitt.jpg', title: 'Birds in the Trap Sing McKnight (2016)', info: 'Birds in the Trap Sing McKnight é o segundo álbum de estúdio do rapper americano Travis Scott. Foi lançado em 2 de setembro de 2016 pela Grand Hustle Records e distribuído pela Epic Records. Ele estreou exclusivamente através do programa de rádio de Travis Scott e Chase B, Wav Radio, na Beats 1 e na Apple Music.' },
    { url: './assets/astroworld.jpg', title: 'ASTROWORLD (2018)', info: 'Astroworld é o terceiro álbum de estúdio do rapper norte-americano Travis Scott. Seu lançamento ocorreu em 3 de agosto de 2018, por intermédio da Cactus Jack Records, Epic Records e Grand Hustle Records.' },
];

let containerItems = document.querySelector('.container-items');
let title = document.getElementById('albumTitle');
let info = document.getElementById('albumInfo');
let i = 1;

title.textContent = images[i].title;
info.textContent = images[i].info;

function loadImages(images, containerItems) {
    images.forEach(image => {
        containerItems.innerHTML +=
            `<div class="item">
            <img src="${image.url}">
        </div>`
    })
}

loadImages(images, containerItems);

let items = document.querySelectorAll('.item');

function next() {
    containerItems.appendChild(items[0]);
    items = document.querySelectorAll('.item');

    //change title and info
    i == images.length - 1 ? i = 0 : i++;

    title.textContent = images[i].title;
    info.textContent = images[i].info;
}

function previous() {
    let lastItem = items[items.length - 1];
    containerItems.insertBefore(lastItem, items[0]);
    items = document.querySelectorAll('.item');

    //change title and info
    i == images.length - 1 ? i = 0 : i++;

    title.textContent = images[i].title;
    info.textContent = images[i].info;
}

document.getElementById('previous').addEventListener('click', previous);
document.getElementById('next').addEventListener('click', next);