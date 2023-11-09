const animals = await fetch("https://learnwebcode.github.io/pet-adoption-data/pets.json");
let animalsData = await animals.json();
console.log(animalsData);

const cardsContainer = document.querySelector(".animals");

const calcAge = (birthday) => {
    const now = new Date().getFullYear();
    const birth = new Date(birthday).getFullYear();
    let age = now - birth;

    return age < 1 ? "Less than a year" : age > 1 ? `${age} years old` : "1 year old";
}

const createCard = (animal) => {
    const card = `<section class="animal-card">
                <div class="animal-card-pic"><img class="animal-pic" src="${animal.photo}" alt="Picture of a cat" /></div>
                <div class="animal-card-info">
                    <h3 class="animal-name">${animal.name}</h3>
                    <small class="animal-meta">
                        <span>${calcAge(animal.birthYear)}</span> | <span>${animal.species}</span>
                    </small>
                    <p class="animal-description">
                    ${animal.description}
                    </p>
                    <a href="https://learnwebcode.github.io/pet-adoption-data/pets/${animal.id}" class="adopt-animal">Adopt ${animal.name}</a>
                </div>
			</section>`;
    cardsContainer.innerHTML += card;
}

animalsData.forEach(animal => createCard(animal));

