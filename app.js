const containerCards = document.getElementById('containerCards');
const URL1 = "https://rickandmortyapi.com/api/character";

const getApi = async (URL) => {
    const response = await fetch(URL);
    const data = await response.json();
    return data.results;
}

const createCards = (character) => {
    const card = document.createElement('div');
    card.classList.add('cards-character');

    const imgCard = document.createElement('img');
    imgCard.src = character.image;
    imgCard.alt = character.name;

    const containerDescription = document.createElement('div');
    containerDescription.classList.add('card-body');

    const nameCharacter = document.createElement('h4');
    nameCharacter.textContent = "Name: " + character.name;
    const statusCharacter = document.createElement('p');
    statusCharacter.textContent = "Status: " + character.status;
    const specieCharacter = document.createElement('p');
    specieCharacter.textContent = "Specie: " + character.species;
    const genderCharacter = document.createElement('p');
    genderCharacter.textContent = "Gender: " + character.gender;

    containerDescription.appendChild(nameCharacter);
    containerDescription.appendChild(statusCharacter);
    containerDescription.appendChild(specieCharacter);
    containerDescription.appendChild(genderCharacter);

    card.appendChild(imgCard);
    card.appendChild(containerDescription);

    containerCards.appendChild(card);

};

const generateAllCharacters = async () => {
    const data = await getApi(URL1);
    data.map( character => createCards(character));
}

window.addEventListener('DOMContentLoaded', generateAllCharacters);


/*
                <div class="cards-character">
                    <img src="images/banner-rick-morty.jpg" alt="..." />
                    <div class="card-body">
                        <h2 class="card-name"><b>Name: </b></h2>
                        <p class="card-status"><b>Status: </b></p>
                        <p class="card-specie"><b>Specie: </b></p>
                        <p class="card-gender"><b>Gender: </b></p>
                    </div>
                </div>
*/









/*let url = 'https://rickandmortyapi.com/api/character';

fetch(url)
    .then(response => response.json())
    .then(data => mostrarPersonajes(data))
    .catch(error => console.log(error))

const mostrarPersonajes = (data) => {
    console.log(data)
    let body = ''
    for (let i = 0; i<data.lenght; i++)
    body += `<div class="card"><img class="img-card" src=$/></div>`*/