const containerCards = document.getElementById('containerCards');
const URL1 = "https://rickandmortyapi.com/api/character";

const getApi = async (page) => {
    const response = await fetch(`${URL1}?page=${page}`);
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
    nameCharacter.textContent = character.name;

    const statusCharacter = document.createElement('p');
    statusCharacter.innerHTML = "<span>Status:</span> " + character.status;

    const specieCharacter = document.createElement('p');
    specieCharacter.innerHTML = "<span>Specie:</span> " + character.species;

    const genderCharacter = document.createElement('p');
    genderCharacter.innerHTML = "<span>Gender:</span> " + character.gender;


    containerDescription.appendChild(nameCharacter);
    containerDescription.appendChild(statusCharacter);
    containerDescription.appendChild(specieCharacter);
    containerDescription.appendChild(genderCharacter);

    card.appendChild(imgCard);
    card.appendChild(containerDescription);

    containerCards.appendChild(card);

};

const generateAllCharacters = async () => {
    let currentPage = 1;

    const loadCharacters = async () => {
        const data = await getApi(currentPage);
        data.map(character => createCards(character));
    };

    const nextPage = () => {
        containerCards.innerHTML = "";
        currentPage++;
        loadCharacters();
    };

    const prevPage = () => {
        if (currentPage > 1) {
            containerCards.innerHTML = "";
            currentPage--;
            loadCharacters();
        }
    };

    loadCharacters();

    const paginationContainer = document.getElementById('paginationContainer');

    const prevButton = document.createElement('button');
    prevButton.textContent = 'Previous Page';
    prevButton.addEventListener('click', prevPage);

    const nextButton = document.createElement('button');
    nextButton.textContent = 'Next Page';
    nextButton.addEventListener('click', nextPage);

    paginationContainer.appendChild(prevButton);
    paginationContainer.appendChild(nextButton);
};

window.addEventListener('DOMContentLoaded', generateAllCharacters);
