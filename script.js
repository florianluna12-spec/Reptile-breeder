/* =====================================================
   🐍 REPTILE BREEDER SIMULATOR
   PART 3 — JAVASCRIPT BASIS
   ===================================================== */

"use strict";


/* =====================================================
   GAME DATA
   ===================================================== */

const game = {

  money: 1000,

  nextAnimalId: 3,

  animals: [

    {
      id: 1,
      species: "Ball Python",
      emoji: "🐍",
      sex: "♀",
      age: 2,
      morphs: ["Normal"],
      health: 96,
      weight: 1450,
      value: 250
    },

    {
      id: 2,
      species: "Ball Python",
      emoji: "🐍",
      sex: "♂",
      age: 2,
      morphs: ["Pastel"],
      health: 98,
      weight: 900,
      value: 350
    }

  ],

  eggs: [],

  racks: [
    {
      name: "Starter Rack",
      capacity: 5
    }
  ],

  incubators: [
    {
      name: "Basic Incubator",
      capacity: 4
    }
  ],

  discoveredMorphs: [
    "Normal",
    "Pastel"
  ]

};


/* =====================================================
   DIEREN IN DE SHOP
   ===================================================== */

const shopAnimals = [

  {
    species: "Ball Python",
    emoji: "🐍",
    price: 180
  },

  {
    species: "Corn Snake",
    emoji: "🐍",
    price: 120
  },

  {
    species: "Leopard Gecko",
    emoji: "🦎",
    price: 90
  },

  {
    species: "Crested Gecko",
    emoji: "🦎",
    price: 140
  },

  {
    species: "Bearded Dragon",
    emoji: "🦎",
    price: 160
  },

  {
    species: "Russian Tortoise",
    emoji: "🐢",
    price: 220
  },

  {
    species: "White's Tree Frog",
    emoji: "🐸",
    price: 55
  },

  {
    species: "Axolotl",
    emoji: "🦎",
    price: 45
  },

  {
    species: "Panther Chameleon",
    emoji: "🦎",
    price: 300
  },

  {
    species: "Garter Snake",
    emoji: "🐍",
    price: 70
  }

];


/* =====================================================
   100 MORPHS
   ===================================================== */

const morphs = [

  "Normal",
  "Albino",
  "Clown",
  "Pied",
  "Pastel",
  "Banana",
  "Mojave",
  "Axanthic",
  "Enchi",
  "Pinstripe",

  "Spider",
  "Hypo",
  "Lavender Albino",
  "Genetic Stripe",
  "Desert",
  "Ultramel",
  "Cinnamon",
  "Fire",
  "Lesser",
  "Butter",

  "Yellow Belly",
  "Orange Dream",
  "GHI",
  "Ghost",
  "Champagne",
  "Woma",
  "Calico",
  "Chocolate",
  "Cypress",
  "Gravel",

  "Black Pastel",
  "Red Stripe",
  "Spotnose",
  "Hidden Gene Woma",
  "Mahogany",
  "Bamboo",
  "Mystic",
  "Phantom",
  "Vanilla",
  "Yellow Belly Pied",

  "Pastel Clown",
  "Pastel Pied",
  "Banana Pied",
  "Banana Clown",
  "Mojave Pied",
  "Mojave Clown",
  "Albino Pied",
  "Albino Clown",
  "Axanthic Pied",
  "Axanthic Clown",

  "Enchi Pied",
  "Enchi Clown",
  "Pinstripe Pied",
  "Pinstripe Clown",
  "Fire Pied",
  "Fire Clown",
  "Cinnamon Pied",
  "Cinnamon Clown",
  "Lesser Pied",
  "Lesser Clown",

  "Butter Pied",
  "Butter Clown",
  "Orange Dream Pied",
  "Orange Dream Clown",
  "GHI Pied",
  "GHI Clown",
  "Ghost Pied",
  "Ghost Clown",
  "Black Pastel Pied",
  "Black Pastel Clown",

  "Pastel Banana",
  "Pastel Mojave",
  "Pastel Enchi",
  "Pastel Pinstripe",
  "Pastel Spider",
  "Pastel Fire",
  "Banana Mojave",
  "Banana Enchi",
  "Banana Pinstripe",
  "Banana Spider",

  "Mojave Enchi",
  "Mojave Pinstripe",
  "Mojave Fire",
  "Enchi Pinstripe",
  "Enchi Fire",
  "Pinstripe Fire",
  "Fire Spider",
  "Clown Pied",
  "Pied Genetic Stripe",
  "Albino Genetic Stripe",

  "Super Pastel",
  "Super Mojave",
  "Super Enchi",
  "Super Banana",
  "Super Fire",
  "Super Lesser",
  "Super Cinnamon",
  "Super Black Pastel",
  "Mystic Potion",
  "Blue-Eyed Leucistic"

];


/* =====================================================
   PAGINA'S
   ===================================================== */

const pages = document.querySelectorAll(".page");


function showPage(pageName) {

  pages.forEach(function(page) {

    page.classList.remove("active");

  });


  const selectedPage =
    document.getElementById("page-" + pageName);


  if (selectedPage) {

    selectedPage.classList.add("active");

  }


  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });

}


/* =====================================================
   ALLE NAVIGATIE KNOPPEN
   ===================================================== */

document.addEventListener("click", function(event) {

  const button =
    event.target.closest("[data-page]");


  if (!button) return;


  const page =
    button.getAttribute("data-page");


  showPage(page);

});


/* =====================================================
   GELD UPDATEN
   ===================================================== */

function updateMoney() {

  const moneyElements = [

    document.getElementById("money"),

    document.getElementById("home-money")

  ];


  moneyElements.forEach(function(element) {

    if (element) {

      element.textContent =
        "€" + game.money;

    }

  });

}


/* =====================================================
   DIEREN AANTAL
   ===================================================== */

function updateAnimalCount() {

  const elements = [

    document.getElementById("animal-count"),

    document.getElementById("home-animals")

  ];


  elements.forEach(function(element) {

    if (element) {

      element.textContent =
        game.animals.length;

    }

  });

}


/* =====================================================
   EIEREN AANTAL
   ===================================================== */

function updateEggCount() {

  const elements = [

    document.getElementById("egg-count"),

    document.getElementById("home-eggs")

  ];


  elements.forEach(function(element) {

    if (element) {

      element.textContent =
        game.eggs.length;

    }

  });

}


/* =====================================================
   MORPH COLLECTION
   ===================================================== */

function updateMorphCount() {

  const element =
    document.getElementById("home-morphs");


  if (!element) return;


  element.textContent =
    game.discoveredMorphs.length +
    " / 100";

}


/* =====================================================
   RACK CAPACITEIT
   ===================================================== */

function getRackCapacity() {

  let capacity = 0;


  game.racks.forEach(function(rack) {

    capacity += rack.capacity;

  });


  return capacity;

}


/* =====================================================
   SHOP WEERGEVEN
   ===================================================== */

function renderShop() {

  const container =
    document.getElementById("shop-list");


  if (!container) return;


  container.innerHTML = "";


  shopAnimals.forEach(function(animal) {

    const card =
      document.createElement("div");


    card.className = "card";


    card.innerHTML = `

      <div class="animal-image">

        ${animal.emoji}

      </div>

      <h3>

        ${animal.species}

      </h3>

      <p class="price">

        €${animal.price}

      </p>

      <button
        class="buy-animal"
        data-species="${animal.species}"
      >

        🛒 Kopen

      </button>

    `;


    container.appendChild(card);

  });

}


/* =====================================================
   DIER KOPEN
   ===================================================== */

document.addEventListener("click", function(event) {

  const button =
    event.target.closest(".buy-animal");


  if (!button) return;


  const species =
    button.dataset.species;


  const animal =
    shopAnimals.find(function(item) {

      return item.species === species;

    });


  if (!animal) return;


  /* Check geld */

  if (game.money < animal.price) {

    alert("❌ Je hebt niet genoeg geld!");

    return;

  }


  /* Check rack */

  if (
    game.animals.length >=
    getRackCapacity()
  ) {

    alert(
      "🏠 Je hebt geen vrije rackplaats meer!"
    );

    return;

  }


  /* Geld aftrekken */

  game.money -= animal.price;


  /* Nieuw dier maken */

  const newAnimal = {

    id: game.nextAnimalId,

    species: animal.species,

    emoji: animal.emoji,

    sex:
      Math.random() < 0.5
        ? "♀"
        : "♂",

    age: 0,

    morphs: ["Normal"],

    health:
      Math.floor(
        90 + Math.random() * 11
      ),

    weight:
      Math.floor(
        50 + Math.random() * 200
      ),

    value: animal.price

  };


  game.nextAnimalId++;


  game.animals.push(newAnimal);


  saveGame();


  renderEverything();


  alert(
    "🎉 Je hebt een nieuwe " +
    animal.species +
    " gekocht!"
  );

});


/* =====================================================
   DIEREN WEERGEVEN
   ===================================================== */

function renderAnimals() {

  const container =
    document.getElementById("animal-list");


  if (!container) return;


  container.innerHTML = "";


  if (game.animals.length === 0) {

    container.innerHTML =
      "<p>Je hebt nog geen dieren.</p>";

    return;

  }


  game.animals.forEach(function(animal) {

    const card =
      document.createElement("div");


    card.className = "card";


    card.innerHTML = `

      <div class="animal-image">

        ${animal.emoji}

      </div>

      <h3>

        ${animal.species}
        #${animal.id}

      </h3>

      <p>

        <span class="tag">

          ${animal.sex}

        </span>

        ${animal.morphs
          .map(function(morph) {

            return `
              <span class="tag">
                ${morph}
              </span>
            `;

          })
          .join("")}

      </p>


      <p>

        Leeftijd:
        ${animal.age} jaar

        <br>

        Gewicht:
        ${animal.weight} g

        <br>

        Gezondheid:
        ${animal.health}%

      </p>


      <div class="health-bar">

        <div
          class="health-fill"
          style="width:${animal.health}%"
        ></div>

      </div>


      <p class="price">

        €${animal.value}

      </p>


      <button
        class="view-animal"
        data-id="${animal.id}"
      >

        👁️ Details

      </button>

    `;


    container.appendChild(card);

  });

}


/* =====================================================
   DIER DETAILS
   ===================================================== */

document.addEventListener("click", function(event) {

  const button =
    event.target.closest(".view-animal");


  if (!button) return;


  const id =
    Number(button.dataset.id);


  const animal =
    game.animals.find(function(item) {

      return item.id === id;

    });


  if (!animal) return;


  const modal =
    document.getElementById("animal-modal");


  const details =
    document.getElementById("animal-details");


  details.innerHTML = `

    <div class="animal-image">

      ${animal.emoji}

    </div>

    <h2>

      ${animal.species}

    </h2>

    <p>

      ID: #${animal.id}

    </p>

    <p>

      Geslacht:
      <strong>${animal.sex}</strong>

    </p>

    <p>

      Leeftijd:
      ${animal.age} jaar

    </p>

    <p>

      Gewicht:
      ${animal.weight} gram

    </p>

    <p>

      Gezondheid:
      ${animal.health}%

    </p>

    <p>

      Morphs:

    </p>

    <div>

      ${animal.morphs
        .map(function(morph) {

          return `
            <span class="tag">
              ${morph}
            </span>
          `;

        })
        .join("")}

    </div>

    <p class="price">

      Waarde:
      €${animal.value}

    </p>

  `;


  modal.classList.add("active");

});


/* =====================================================
   MODAL SLUITEN
   ===================================================== */

document
  .getElementById("close-animal-modal")
  .addEventListener("click", function() {

    document
      .getElementById("animal-modal")
      .classList.remove("active");

  });


document
  .getElementById("close-egg-modal")
  .addEventListener("click", function() {

    document
      .getElementById("egg-modal")
      .classList.remove("active");

  });


/* =====================================================
   MARKET
   ===================================================== */

function renderMarket() {

  const container =
    document.getElementById("market-list");


  if (!container) return;


  container.innerHTML = "";


  game.animals.forEach(function(animal) {

    const card =
      document.createElement("div");


    card.className = "card";


    card.innerHTML = `

      <div class="animal-image">

        ${animal.emoji}

      </div>

      <h3>

        ${animal.species}
        #${animal.id}

      </h3>

      <p>

        ${animal.morphs
          .map(function(morph) {

            return `
              <span class="tag">
                ${morph}
              </span>
            `;

          })
          .join("")}

      </p>

      <p class="price">

        €${animal.value}

      </p>

      <button
        class="sell-animal"
        data-id="${animal.id}"
      >

        💰 Verkopen

      </button>

    `;


    container.appendChild(card);

  });

}


/* =====================================================
   VERKOPEN
   ===================================================== */

document.addEventListener("click", function(event) {

  const button =
    event.target.closest(".sell-animal");


  if (!button) return;


  const id =
    Number(button.dataset.id);


  const index =
    game.animals.findIndex(function(animal) {

      return animal.id === id;

    });


  if (index === -1) return;


  const animal =
    game.animals[index];


  const confirmSale =
    confirm(
      "Wil je " +
      animal.species +
      " verkopen voor €" +
      animal.value +
      "?"
    );


  if (!confirmSale) return;


  game.money += animal.value;


  game.animals.splice(index, 1);


  saveGame();


  renderEverything();


  alert(
    "💰 Verkocht voor €" +
    animal.value
  );

});


/* =====================================================
   RACKS WEERGEVEN
   ===================================================== */

function renderRacks() {

  const container =
    document.getElementById("rack-list");


  if (!container) return;


  container.innerHTML = "";


  game.racks.forEach(function(rack) {

    const card =
      document.createElement("div");


    card.className = "card";


    card.innerHTML = `

      <h3>

        🏠 ${rack.name}

      </h3>

      <p>

        Capaciteit:
        ${rack.capacity}
        dieren

      </p>

      <p>

        Gebruikt:
        ${game.animals.length}
        /
        ${rack.capacity}

      </p>

    `;


    container.appendChild(card);

  });


  const space =
    document.getElementById("rack-space");


  if (space) {

    space.textContent =
      game.animals.length +
      " / " +
      getRackCapacity();

  }

}


/* =====================================================
   INCUBATORS
   ===================================================== */

function renderIncubators() {

  const container =
    document.getElementById(
      "incubator-list"
    );


  if (!container) return;


  container.innerHTML = "";


  game.incubators.forEach(function(incubator) {

    const card =
      document.createElement("div");


    card.className = "card";


    card.innerHTML = `

      <h3>

        🌡️ ${incubator.name}

      </h3>

      <p>

        Capaciteit:
        ${incubator.capacity}
        eieren

      </p>

    `;


    container.appendChild(card);

  });


  const space =
    document.getElementById(
      "incubator-space"
    );


  if (space) {

    space.textContent =
      game.eggs.length +
      " / " +
      getIncubatorCapacity();

  }

}


function getIncubatorCapacity() {

  let capacity = 0;


  game.incubators.forEach(function(incubator) {

    capacity += incubator.capacity;

  });


  return capacity;

}


/* =====================================================
   MORPH COLLECTION
   ===================================================== */

function renderCollection() {

  const container =
    document.getElementById(
      "morph-list"
    );


  if (!container) return;


  container.innerHTML = "";


  morphs.forEach(function(morph, index) {

    const unlocked =
      game.discoveredMorphs.includes(morph);


    const card =
      document.createElement("div");


    card.className =
      unlocked
        ? "morph-card"
        : "morph-card locked";


    card.innerHTML = `

      <h3>

        ${
          unlocked
            ? "✅ " + morph
            : "❓ ???"
        }

      </h3>

      <p>

        Morph #${index + 1}

      </p>

    `;


    container.appendChild(card);

  });


  const count =
    document.getElementById(
      "collection-count"
    );


  if (count) {

    count.textContent =
      game.discoveredMorphs.length +
      " / 100";

  }


  const progress =
    document.getElementById(
      "collection-progress-fill"
    );


  if (progress) {

    progress.style.width =
      (
        game.discoveredMorphs.length
        / 100
        * 100
      ) + "%";

  }

}


/* =====================================================
   ALLES UPDATEN
   ===================================================== */

function renderEverything() {

  updateMoney();

  updateAnimalCount();

  updateEggCount();

  updateMorphCount();

  renderShop();

  renderAnimals();

  renderMarket();

  renderRacks();

  renderIncubators();

  renderCollection();

}


/* =====================================================
   SAVE GAME
   ===================================================== */

function saveGame() {

  localStorage.setItem(
    "reptileBreederSave",
    JSON.stringify(game)
  );

}


/* =====================================================
   LOAD GAME
   ===================================================== */

function loadGame() {

  const saved =
    localStorage.getItem(
      "reptileBreederSave"
    );


  if (!saved) return;


  try {

    const loaded =
      JSON.parse(saved);


    Object.assign(
      game,
      loaded
    );

  }

  catch(error) {

    console.log(
      "Save kon niet worden geladen."
    );

  }

}


/* =====================================================
   START GAME
   ===================================================== */

loadGame();

renderEverything();

showPage("home");


/* =====================================================
   AUTOMATISCHE SAVE
   ===================================================== */

setInterval(function() {

  saveGame();

}, 5000);


/* =====================================================
   TEST MELDING
   ===================================================== */

console.log(
  "🐍 Reptile Breeder Simulator geladen!"
);
/* =====================================================
   🐍 PART 4 — BREEDING + GENETICA + EIEREN
   PLAATS: ONDER PART 3 IN HET JS-VAK
   ===================================================== */


/* =====================================================
   MORPH TYPES
   ===================================================== */

const recessiveMorphs = [
  "Albino",
  "Clown",
  "Pied",
  "Axanthic",
  "Genetic Stripe",
  "Hypo",
  "Lavender Albino",
  "Desert",
  "Ultramel"
];

const dominantMorphs = [
  "Spider"
];

const incompleteDominantMorphs = [
  "Pastel",
  "Banana",
  "Mojave",
  "Enchi",
  "Pinstripe",
  "Cinnamon",
  "Fire",
  "Lesser",
  "Butter",
  "Yellow Belly",
  "Orange Dream",
  "GHI",
  "Cypress",
  "Chocolate",
  "Black Pastel"
];


/* =====================================================
   GESELECTEERDE OUDERS
   ===================================================== */

let selectedParentOne = null;
let selectedParentTwo = null;


/* =====================================================
   GESLACHT CONTROLEREN
   ===================================================== */

function isFemale(animal) {
  return animal.sex === "♀";
}

function isMale(animal) {
  return animal.sex === "♂";
}


/* =====================================================
   OUDER 1 KIEZEN
   ===================================================== */

document
  .getElementById("choose-parent-one")
  .addEventListener("click", function() {

    const females = game.animals.filter(isFemale);

    if (females.length === 0) {

      alert("❌ Je hebt geen vrouwelijke dieren.");

      return;
    }

    const names = females
      .map(function(animal, index) {

        return (
          (index + 1) +
          ". " +
          animal.species +
          " #" +
          animal.id +
          " — " +
          animal.morphs.join(" + ")
        );

      })
      .join("\n");

    const choice = prompt(
      "Kies een VROUWELIJK dier:\n\n" +
      names +
      "\n\nTyp het nummer:"
    );

    const index = Number(choice) - 1;

    if (
      Number.isNaN(index) ||
      !females[index]
    ) {

      return;
    }

    selectedParentOne = females[index];

    updateBreedingParents();

});


/* =====================================================
   OUDER 2 KIEZEN
   ===================================================== */

document
  .getElementById("choose-parent-two")
  .addEventListener("click", function() {

    const males = game.animals.filter(isMale);

    if (males.length === 0) {

      alert("❌ Je hebt geen mannelijke dieren.");

      return;
    }

    const names = males
      .map(function(animal, index) {

        return (
          (index + 1) +
          ". " +
          animal.species +
          " #" +
          animal.id +
          " — " +
          animal.morphs.join(" + ")
        );

      })
      .join("\n");

    const choice = prompt(
      "Kies een MANNELIJK dier:\n\n" +
      names +
      "\n\nTyp het nummer:"
    );

    const index = Number(choice) - 1;

    if (
      Number.isNaN(index) ||
      !males[index]
    ) {

      return;
    }

    selectedParentTwo = males[index];

    updateBreedingParents();

});


/* =====================================================
   OUDERS OP SCHERM ZETTEN
   ===================================================== */

function updateBreedingParents() {

  const parentOne =
    document.getElementById("parent-one");

  const parentTwo =
    document.getElementById("parent-two");


  if (selectedParentOne) {

    parentOne.innerHTML = `

      <div>

        <div style="font-size:45px;">
          ${selectedParentOne.emoji}
        </div>

        <strong>
          ${selectedParentOne.species}
          #${selectedParentOne.id}
        </strong>

        <br>

        ${selectedParentOne.morphs.join(" + ")}

        <br>

        ${selectedParentOne.sex}

      </div>

    `;

  }


  if (selectedParentTwo) {

    parentTwo.innerHTML = `

      <div>

        <div style="font-size:45px;">
          ${selectedParentTwo.emoji}
        </div>

        <strong>
          ${selectedParentTwo.species}
          #${selectedParentTwo.id}
        </strong>

        <br>

        ${selectedParentTwo.morphs.join(" + ")}

        <br>

        ${selectedParentTwo.sex}

      </div>

    `;

  }


  showBreedingPossibilities();

}


/* =====================================================
   GENETICA BASIS
   ===================================================== */

function getPossibleMorphs(parentOne, parentTwo) {

  const possible = [];


  const genesOne =
    parentOne.morphs || [];

  const genesTwo =
    parentTwo.morphs || [];


  /*
   * Morphs die bij één van de ouders aanwezig zijn.
   */

  const allGenes = [
    ...new Set([
      ...genesOne,
      ...genesTwo
    ])
  ];


  allGenes.forEach(function(gene) {

    /*
     * Incomplete dominant:
     * ongeveer 50% kans om door te geven.
     */

    if (
      incompleteDominantMorphs.includes(gene)
    ) {

      possible.push({
        morph: gene,
        chance: 50
      });

    }


    /*
     * Dominant
     */

    else if (
      dominantMorphs.includes(gene)
    ) {

      possible.push({
        morph: gene,
        chance: 75
      });

    }


    /*
     * Recessive:
     * vereenvoudigd voor deze game.
     */

    else if (
      recessiveMorphs.includes(gene)
    ) {

      const bothHave =
        genesOne.includes(gene) &&
        genesTwo.includes(gene);

      possible.push({
        morph: gene,
        chance: bothHave ? 25 : 5
      });

    }

  });


  return possible;

}


/* =====================================================
   BREEDING MOGELIJKHEDEN TONEN
   ===================================================== */

function showBreedingPossibilities() {

  const result =
    document.getElementById(
      "breeding-result"
    );


  if (
    !selectedParentOne ||
    !selectedParentTwo
  ) {

    result.innerHTML = `

      <h3>🧬 Mogelijke genetica</h3>

      <p>
        Selecteer een ♀ en een ♂.
      </p>

    `;

    return;

  }


  if (
    selectedParentOne.species !==
    selectedParentTwo.species
  ) {

    result.innerHTML = `

      <h3>🧬 Breeding</h3>

      <p>
        ⚠️ Deze twee dieren zijn verschillende
        soorten.
      </p>

      <p>
        In deze game is er een kleine kans op
        een speciale hybride.
      </p>

    `;

    return;

  }


  const possibilities =
    getPossibleMorphs(
      selectedParentOne,
      selectedParentTwo
    );


  let html = `

    <h3>🧬 Mogelijke baby's</h3>

    <p>
      Ouders:
      <strong>
        ${selectedParentOne.morphs.join(" + ")}
      </strong>
      ×
      <strong>
        ${selectedParentTwo.morphs.join(" + ")}
      </strong>
    </p>

  `;


  if (possibilities.length === 0) {

    html += `
      <p>
        🐍 Vooral Normal baby's mogelijk.
      </p>
    `;

  }


  possibilities.forEach(function(item) {

    html += `

      <div
        style="
          display:flex;
          justify-content:space-between;
          padding:8px;
          margin:5px 0;
          background:#0e1810;
          border-radius:10px;
        "
      >

        <span>
          🧬 ${item.morph}
        </span>

        <strong>
          ~${item.chance}%
        </strong>

      </div>

    `;

  });


  result.innerHTML = html;

}


/* =====================================================
   WILLEKEURIGE BABY MORPH
   ===================================================== */

function generateBabyMorphs(parentOne, parentTwo) {

  const possible =
    getPossibleMorphs(
      parentOne,
      parentTwo
    );


  const babyMorphs = [];


  possible.forEach(function(item) {

    const roll =
      Math.random() * 100;


    if (roll < item.chance) {

      babyMorphs.push(item.morph);

    }

  });


  /*
   * Als niets wordt doorgegeven:
   * Normal.
   */

  if (babyMorphs.length === 0) {

    babyMorphs.push("Normal");

  }


  /*
   * Combinaties mogelijk maken.
   */

  if (
    babyMorphs.includes("Pastel") &&
    babyMorphs.includes("Clown")
  ) {

    babyMorphs.push("Pastel Clown");

  }


  if (
    babyMorphs.includes("Banana") &&
    babyMorphs.includes("Pied")
  ) {

    babyMorphs.push("Banana Pied");

  }


  if (
    babyMorphs.includes("Mojave") &&
    babyMorphs.includes("Pied")
  ) {

    babyMorphs.push("Mojave Pied");

  }


  if (
    babyMorphs.includes("Pastel") &&
    babyMorphs.includes("Banana")
  ) {

    babyMorphs.push("Pastel Banana");

  }


  return [
    ...new Set(babyMorphs)
  ];

}


/* =====================================================
   EEN EI MAKEN
   ===================================================== */

function createEgg(parentOne, parentTwo) {

  const egg = {

    id:
      Date.now() +
      Math.floor(
        Math.random() * 10000
      ),

    parentOne:
      parentOne.id,

    parentTwo:
      parentTwo.id,

    ageDays: 0,

    totalDays: 55,

    status: "Developing",

    morphs:
      generateBabyMorphs(
        parentOne,
        parentTwo
      ),

    sex:
      Math.random() < 0.5
        ? "♀"
        : "♂",

    hatchable:
      true

  };


  game.eggs.push(egg);


  return egg;

}


/* =====================================================
   BREEDING STARTEN
   ===================================================== */

document
  .getElementById("start-breeding")
  .addEventListener("click", function() {

    if (
      !selectedParentOne ||
      !selectedParentTwo
    ) {

      alert(
        "❌ Kies eerst een vrouwelijke " +
        "en mannelijke ouder."
      );

      return;

    }


    /*
     * Verschillende soorten:
     * kleine hybride kans.
     */

    if (
      selectedParentOne.species !==
      selectedParentTwo.species
    ) {

      const hybridRoll =
        Math.random();


      if (hybridRoll > 0.03) {

        alert(
          "❌ Deze soorten kunnen in dit " +
          "project niet succesvol paren."
        );

        return;

      }

    }


    /*
     * Hoeveel eieren?
     * Ball Pythons krijgen 2-7 in deze game.
     */

    let eggAmount =
      Math.floor(
        Math.random() * 6
      ) + 2;


    /*
     * Andere dieren krijgen minder eieren.
     */

    if (
      selectedParentOne.species !==
      "Ball Python"
    ) {

      eggAmount =
        Math.floor(
          Math.random() * 3
        ) + 1;

    }


    /*
     * Controleer incubatorruimte.
     */

    const available =
      getIncubatorCapacity() -
      game.eggs.length;


    if (available <= 0) {

      alert(
        "❌ Je incubators zitten vol!"
      );

      return;

    }


    eggAmount =
      Math.min(
        eggAmount,
        available
      );


    for (
      let i = 0;
      i < eggAmount;
      i++
    ) {

      createEgg(
        selectedParentOne,
        selectedParentTwo
      );

    }


    saveGame();

    renderEverything();

    alert(
      "🥚 Breeding succesvol!\n\n" +
      eggAmount +
      " eieren zijn geproduceerd."
    );


    showPage("incubator");

  });


/* =====================================================
   EIEREN WEERGEVEN
   ===================================================== */

function renderEggs() {

  const container =
    document.getElementById(
      "egg-list"
    );


  if (!container) return;


  container.innerHTML = "";


  if (game.eggs.length === 0) {

    container.innerHTML = `

      <div class="card">

        <h3>🥚 Geen eieren</h3>

        <p>
          Start een breeding-project
          om eieren te krijgen.
        </p>

      </div>

    `;

    return;

  }


  game.eggs.forEach(function(egg) {

    const progress =
      Math.min(
        100,
        (egg.ageDays /
        egg.totalDays) * 100
      );


    const card =
      document.createElement("div");


    card.className =
      "card egg-card";


    let buttonHTML = "";


    if (
      egg.ageDays >=
      egg.totalDays
    ) {

      buttonHTML = `

        <button
          class="hatch-egg"
          data-id="${egg.id}"
        >

          🐣 OPEN EI

        </button>

      `;

    }


    card.innerHTML = `

      <div class="egg-icon">
        🥚
      </div>

      <h3>
        Egg #${String(egg.id).slice(-4)}
      </h3>

      <p>
        Dag ${egg.ageDays}
        /
        ${egg.totalDays}
      </p>

      <div class="incubation-bar">

        <div
          class="incubation-progress"
          style="width:${progress}%"
        ></div>

      </div>

      <p>

        Status:
        <strong>
          ${egg.status}
        </strong>

      </p>

      ${buttonHTML}

    `;


    container.appendChild(card);

  });

}


/* =====================================================
   ELK EI APART OPENEN
   ===================================================== */

document.addEventListener(
  "click",
  function(event) {

    const button =
      event.target.closest(
        ".hatch-egg"
      );


    if (!button) return;


    const id =
      Number(button.dataset.id);


    const index =
      game.eggs.findIndex(
        function(egg) {

          return egg.id === id;

        }
      );


    if (index === -1) return;


    const egg =
      game.eggs[index];


    if (
      egg.ageDays <
      egg.totalDays
    ) {

      alert(
        "🥚 Dit ei is nog niet klaar!"
      );

      return;

    }


    /*
     * Kleine kans dat het ei verloren gaat.
     */

    const failed =
      Math.random() < 0.05;


    if (failed) {

      egg.status =
        "Niet ontwikkeld";


      const modal =
        document.getElementById(
          "egg-modal"
        );


      const result =
        document.getElementById(
          "egg-result"
        );


      result.innerHTML = `

        <div style="font-size:70px;">
          🥚
        </div>

        <h2>
          Ei verloren
        </h2>

        <p>
          Dit ei heeft zich helaas
          niet verder ontwikkeld.
        </p>

        <button
          id="remove-failed-egg"
        >
          Verwijderen
        </button>

      `;


      modal.classList.add("active");


      document
        .getElementById(
          "remove-failed-egg"
        )
        .onclick = function() {

          game.eggs.splice(index, 1);

          modal.classList.remove(
            "active"
          );

          saveGame();

          renderEverything();

        };


      return;

    }


    /*
     * BABY GEBOREN
     */

    const baby = {

      id:
        game.nextAnimalId,

      species:
        "Ball Python",

      emoji:
        "🐍",

      sex:
        egg.sex,

      age:
        0,

      morphs:
        egg.morphs,

      health:
        Math.floor(
          85 +
          Math.random() * 16
        ),

      weight:
        Math.floor(
          45 +
          Math.random() * 20
        ),

      value:
        calculateBabyValue(
          egg.morphs
        )

    };


    game.nextAnimalId++;


    /*
     * Nieuwe morphs ontdekken
     */

    baby.morphs.forEach(
      function(morph) {

        if (
          !game.discoveredMorphs.includes(
            morph
          )
        ) {

          game.discoveredMorphs.push(
            morph
          );

        }

      }
    );


    game.animals.push(baby);


    game.eggs.splice(index, 1);


    saveGame();

    renderEverything();


    /*
     * Modal tonen
     */

    const modal =
      document.getElementById(
        "egg-modal"
      );


    const result =
      document.getElementById(
        "egg-result"
      );


    result.innerHTML = `

      <div style="font-size:80px;">
        🐍
      </div>

      <h2>
        🎉 HATCHED!
      </h2>

      <h3>
        ${baby.morphs.join(" + ")}
      </h3>

      <p>
        Geslacht:
        ${baby.sex}
      </p>

      <p>
        Gezondheid:
        ${baby.health}%
      </p>

      <p class="price">
        Waarde:
        €${baby.value}
      </p>

      <button
        id="close-hatched-result"
      >
        🐍 Naar mijn dieren
      </button>

    `;


    modal.classList.add("active");


    document
      .getElementById(
        "close-hatched-result"
      )
      .onclick = function() {

        modal.classList.remove(
          "active"
        );

        showPage("animals");

      };

  }
);


/* =====================================================
   BABY WAARDE BEREKENEN
   ===================================================== */

function calculateBabyValue(
  babyMorphs
) {

  let value = 40;


  babyMorphs.forEach(
    function(morph) {

      if (morph === "Normal") {

        value += 0;

      }

      else if (
        recessiveMorphs.includes(
          morph
        )
      ) {

        value += 250;

      }

      else if (
        incompleteDominantMorphs.includes(
          morph
        )
      ) {

        value += 120;

      }

      else if (
        dominantMorphs.includes(
          morph
        )
      ) {

        value += 180;

      }

      else {

        /*
         * Combinatiemorph
         */

        value += 350;

      }

    }
  );


  return value;

}


/* =====================================================
   INCUBATOR TIJD
   ===================================================== */

/*
 * Voor het testen laten we iedere
 * 10 seconden één game-dag voorbijgaan.
 *
 * Later kunnen we dit veranderen naar
 * echte tijd.
 */

setInterval(
  function() {

    if (game.eggs.length === 0) {
      return;
    }


    game.eggs.forEach(
      function(egg) {

        if (
          egg.ageDays <
          egg.totalDays
        ) {

          egg.ageDays++;

        }

      }
    );


    saveGame();

    updateEggCount();

    renderEggs();

    renderIncubators();

  },
  10000
);


/* =====================================================
   BREEDING SCHERM BIJWERKEN
   ===================================================== */

const originalRenderEverything =
  renderEverything;


renderEverything = function() {

  originalRenderEverything();

  renderEggs();

  updateBreedingParents();

};


/* =====================================================
   START
   ===================================================== */

renderEggs();

showBreedingPossibilities();

console.log(
  "🧬 PART 4 geladen: Breeding + Eggs + Incubator"
);
/* =========================================================
   🐍 REPTILE BREEDER SIMULATOR
   PART 6 — COMPLETE GAME EXPANSION
   PLAATS: ONDER PART 5 IN JS
   ========================================================= */

console.log("🚀 PART 6 wordt geladen...");


/* =========================================================
   EXTRA GAME DATA
   ========================================================= */

game.facility = game.facility || {

  racks: [
    {
      id: 1,
      name: "Starter Rack",
      capacity: 5,
      level: 1,
      price: 0
    }
  ],

  incubators: [
    {
      id: 1,
      name: "Basic Incubator",
      capacity: 4,
      level: 1,
      price: 0
    }
  ]

};


game.settings = game.settings || {

  autoSave: true,

  gameSpeed: 1

};


/* =========================================================
   REPTIELENSOORTEN
   ========================================================= */

const reptileSpecies = [

  {
    name: "Ball Python",
    emoji: "🐍",
    category: "Snake",
    price: 180
  },

  {
    name: "Corn Snake",
    emoji: "🐍",
    category: "Snake",
    price: 120
  },

  {
    name: "Garter Snake",
    emoji: "🐍",
    category: "Snake",
    price: 70
  },

  {
    name: "Milk Snake",
    emoji: "🐍",
    category: "Snake",
    price: 150
  },

  {
    name: "King Snake",
    emoji: "🐍",
    category: "Snake",
    price: 160
  },

  {
    name: "Leopard Gecko",
    emoji: "🦎",
    category: "Gecko",
    price: 90
  },

  {
    name: "Crested Gecko",
    emoji: "🦎",
    category: "Gecko",
    price: 140
  },

  {
    name: "Gargoyle Gecko",
    emoji: "🦎",
    category: "Gecko",
    price: 180
  },

  {
    name: "Bearded Dragon",
    emoji: "🦎",
    category: "Lizard",
    price: 160
  },

  {
    name: "Blue Tongue Skink",
    emoji: "🦎",
    category: "Lizard",
    price: 250
  },

  {
    name: "Russian Tortoise",
    emoji: "🐢",
    category: "Tortoise",
    price: 220
  },

  {
    name: "Greek Tortoise",
    emoji: "🐢",
    category: "Tortoise",
    price: 250
  },

  {
    name: "Hermann's Tortoise",
    emoji: "🐢",
    category: "Tortoise",
    price: 280
  },

  {
    name: "White's Tree Frog",
    emoji: "🐸",
    category: "Frog",
    price: 55
  },

  {
    name: "Pacman Frog",
    emoji: "🐸",
    category: "Frog",
    price: 65
  },

  {
    name: "Fire-Bellied Toad",
    emoji: "🐸",
    category: "Frog",
    price: 45
  },

  {
    name: "Axolotl",
    emoji: "🦎",
    category: "Salamander",
    price: 45
  },

  {
    name: "Tiger Salamander",
    emoji: "🦎",
    category: "Salamander",
    price: 80
  },

  {
    name: "Panther Chameleon",
    emoji: "🦎",
    category: "Chameleon",
    price: 300
  },

  {
    name: "Veiled Chameleon",
    emoji: "🦎",
    category: "Chameleon",
    price: 180
  }

];


/* =========================================================
   RACK SYSTEM
   ========================================================= */

function totalRackCapacity() {

  return game.facility.racks.reduce(
    function(total, rack) {

      return total + rack.capacity;

    },
    0
  );

}


function buyRack() {

  const current =
    game.facility.racks.length;

  const price =
    500 * (current + 1);

  if (game.money < price) {

    alert(
      "❌ Niet genoeg geld.\n" +
      "Rack kost €" + price
    );

    return;

  }

  game.money -= price;

  game.facility.racks.push({

    id: Date.now(),

    name:
      "Breeding Rack " +
      (current + 1),

    capacity: 5,

    level: 1,

    price: price

  });

  saveGame();

  renderEverything();

  alert(
    "🏠 Nieuwe rack gekocht!"
  );

}


function upgradeRack(index) {

  const rack =
    game.facility.racks[index];

  if (!rack) return;

  const price =
    750 * rack.level;

  if (game.money < price) {

    alert(
      "❌ Upgrade kost €" +
      price
    );

    return;

  }

  game.money -= price;

  rack.level++;

  rack.capacity += 5;

  saveGame();

  renderEverything();

  alert(
    "⬆️ Rack geüpgraded!\n" +
    "Capaciteit: " +
    rack.capacity
  );

}


/* =========================================================
   INCUBATOR SYSTEM
   ========================================================= */

function totalIncubatorCapacity() {

  return game.facility.incubators.reduce(
    function(total, incubator) {

      return total + incubator.capacity;

    },
    0
  );

}


function buyIncubator() {

  const current =
    game.facility.incubators.length;

  const price =
    600 * (current + 1);

  if (game.money < price) {

    alert(
      "❌ Niet genoeg geld.\n" +
      "Incubator kost €" +
      price
    );

    return;

  }

  game.money -= price;

  game.facility.incubators.push({

    id: Date.now(),

    name:
      "Incubator " +
      (current + 1),

    capacity: 4,

    level: 1,

    price: price

  });

  saveGame();

  renderEverything();

  alert(
    "🥚 Nieuwe incubator gekocht!"
  );

}


function upgradeIncubator(index) {

  const incubator =
    game.facility.incubators[index];

  if (!incubator) return;

  const price =
    900 * incubator.level;

  if (game.money < price) {

    alert(
      "❌ Upgrade kost €" +
      price
    );

    return;

  }

  game.money -= price;

  incubator.level++;

  incubator.capacity += 4;

  saveGame();

  renderEverything();

  alert(
    "⬆️ Incubator geüpgraded!\n" +
    "Capaciteit: " +
    incubator.capacity
  );

}


/* =========================================================
   DIEREN KOPEN
   ========================================================= */

function buySpecies(speciesName) {

  const species =
    reptileSpecies.find(
      function(item) {

        return item.name === speciesName;

      }
    );


  if (!species) return;


  if (
    game.animals.length >=
    totalRackCapacity()
  ) {

    alert(
      "🏠 Geen vrije plek!\n" +
      "Koop eerst een rack."
    );

    return;

  }


  if (game.money < species.price) {

    alert(
      "❌ Je hebt niet genoeg geld."
    );

    return;

  }


  game.money -= species.price;


  const animal = {

    id: game.nextAnimalId++,

    species: species.name,

    emoji: species.emoji,

    category: species.category,

    sex:
      Math.random() < 0.5
        ? "♀"
        : "♂",

    age: 0,

    morphs:
      species.category === "Snake" &&
      species.name === "Ball Python"
        ? ["Normal"]
        : ["Normal"],

    health:
      90 +
      Math.floor(
        Math.random() * 11
      ),

    weight:
      30 +
      Math.floor(
        Math.random() * 200
      ),

    value: species.price,

    food: 100,

    cleanliness: 100,

    autoFeed: false,

    autoClean: false,

    alive: true

  };


  game.animals.push(animal);


  saveGame();

  renderEverything();


  alert(
    "🎉 Je hebt een " +
    species.name +
    " gekocht!"
  );

}


/* =========================================================
   EXTRA SHOP
   ========================================================= */

function renderFullShop() {

  const container =
    document.getElementById(
      "full-shop-list"
    );


  if (!container) return;


  container.innerHTML = "";


  reptileSpecies.forEach(
    function(species) {

      const card =
        document.createElement(
          "div"
        );


      card.className = "card";


      card.innerHTML = `

        <div
          style="
            font-size:60px;
            text-align:center;
          "
        >
          ${species.emoji}
        </div>

        <h3>
          ${species.name}
        </h3>

        <p>
          ${species.category}
        </p>

        <p class="price">
          €${species.price}
        </p>

        <button
          class="species-buy"
          data-species="${species.name}"
        >
          🛒 Kopen
        </button>

      `;


      container.appendChild(card);

    }
  );

}


document.addEventListener(
  "click",
  function(event) {

    const button =
      event.target.closest(
        ".species-buy"
      );


    if (!button) return;


    buySpecies(
      button.dataset.species
    );

  }
);


/* =========================================================
   FACILITY SCHERM
   ========================================================= */

function renderFacility() {

  const container =
    document.getElementById(
      "facility-list"
    );


  if (!container) return;


  container.innerHTML = `

    <div class="card">

      <h2>
        🏠 Racks
      </h2>

      <p>
        Dieren:
        ${game.animals.length}
        /
        ${totalRackCapacity()}
      </p>

      <button
        id="buy-rack-button"
      >
        ➕ Rack kopen
      </button>

    </div>

    <div class="card">

      <h2>
        🥚 Incubators
      </h2>

      <p>
        Eieren:
        ${game.eggs.length}
        /
        ${totalIncubatorCapacity()}
      </p>

      <button
        id="buy-incubator-button"
      >
        ➕ Incubator kopen
      </button>

    </div>

  `;


  game.facility.racks.forEach(
    function(rack, index) {

      const card =
        document.createElement(
          "div"
        );

      card.className = "card";


      card.innerHTML = `

        <h3>
          🏠 ${rack.name}
        </h3>

        <p>
          Level ${rack.level}
        </p>

        <p>
          Capaciteit:
          ${rack.capacity}
        </p>

        <button
          class="upgrade-rack"
          data-index="${index}"
        >
          ⬆️ Upgrade
        </button>

      `;


      container.appendChild(card);

    }
  );


  game.facility.incubators.forEach(
    function(incubator, index) {

      const card =
        document.createElement(
          "div"
        );

      card.className = "card";


      card.innerHTML = `

        <h3>
          🌡️ ${incubator.name}
        </h3>

        <p>
          Level ${incubator.level}
        </p>

        <p>
          Capaciteit:
          ${incubator.capacity}
        </p>

        <button
          class="upgrade-incubator"
          data-index="${index}"
        >
          ⬆️ Upgrade
        </button>

      `;


      container.appendChild(card);

    }
  );

}


document.addEventListener(
  "click",
  function(event) {

    if (
      event.target.id ===
      "buy-rack-button"
    ) {

      buyRack();

    }


    if (
      event.target.id ===
      "buy-incubator-button"
    ) {

      buyIncubator();

    }


    const rackButton =
      event.target.closest(
        ".upgrade-rack"
      );


    if (rackButton) {

      upgradeRack(
        Number(
          rackButton.dataset.index
        )
      );

    }


    const incubatorButton =
      event.target.closest(
        ".upgrade-incubator"
      );


    if (incubatorButton) {

      upgradeIncubator(
        Number(
          incubatorButton.dataset.index
        )
      );

    }

  }
);


/* =========================================================
   LEEFTIJD
   ========================================================= */

setInterval(
  function() {

    game.animals.forEach(
      function(animal) {

        if (!animal.alive) return;


        /*
         * Eén gamejaar per 5 minuten.
         */

        animal.age += 1 / 12;


        /*
         * Leeftijd wordt afgerond voor display.
         */

        if (
          animal.age > 20
        ) {

          animal.health =
            Math.max(
              0,
              animal.health - 1
            );

        }

      }
    );


    saveGame();

    renderEverything();

  },
  300000
);


/* =========================================================
   GEZONDHEID & VEILIGE GAME EVENTS
   ========================================================= */

setInterval(
  function() {

    game.animals.forEach(
      function(animal) {

        if (!animal.alive) return;


        if (
          animal.health <= 0
        ) {

          animal.alive = false;

          animal.status =
            "Overleden";

        }

      }
    );


    saveGame();

    renderEverything();

  },
  60000
);


/* =========================================================
   BREEDING CONTROLE
   ========================================================= */

function canBreed(animal) {

  if (!animal) return false;

  if (!animal.alive) return false;

  if (animal.age < 1) return false;

  if (animal.health < 50) return false;

  return true;

}


/* =========================================================
   MORPH COLLECTION VERBETERING
   ========================================================= */

function discoverMorph(morph) {

  if (
    !game.discoveredMorphs.includes(
      morph
    )
  ) {

    game.discoveredMorphs.push(
      morph
    );

    saveGame();


    alert(
      "🧬 NIEUWE MORPH ONTDEKT!\n\n" +
      morph
    );

  }

}


/* =========================================================
   ALLE BABY MORPHS ONTDEKKEN
   ========================================================= */

function discoverAnimalMorphs() {

  game.animals.forEach(
    function(animal) {

      if (!animal.morphs) return;


      animal.morphs.forEach(
        function(morph) {

          discoverMorph(morph);

        }
      );

    }
  );

}


/* =========================================================
   SAVE GAME
   ========================================================= */

function saveCompleteGame() {

  try {

    localStorage.setItem(
      "reptileBreederCompleteSave",
      JSON.stringify(game)
    );

  }

  catch(error) {

    console.log(
      "Save error:",
      error
    );

  }

}


/* =========================================================
   LOAD GAME
   ========================================================= */

function loadCompleteGame() {

  const saved =
    localStorage.getItem(
      "reptileBreederCompleteSave"
    );


  if (!saved) return;


  try {

    const data =
      JSON.parse(saved);


    Object.assign(
      game,
      data
    );


    console.log(
      "💾 Complete save geladen!"
    );

  }

  catch(error) {

    console.log(
      "Save kon niet geladen worden."
    );

  }

}


/* =========================================================
   AUTO SAVE
   ========================================================= */

setInterval(
  function() {

    saveCompleteGame();

  },
  5000
);


/* =========================================================
   RESET GAME
   ========================================================= */

function resetGame() {

  const answer =
    confirm(
      "⚠️ Weet je zeker dat je " +
      "de hele game wilt resetten?"
    );


  if (!answer) return;


  localStorage.removeItem(
    "reptileBreederSave"
  );

  localStorage.removeItem(
    "reptileBreederCompleteSave"
  );


  location.reload();

}


/* =========================================================
   RESET BUTTON
   ========================================================= */

document.addEventListener(
  "click",
  function(event) {

    if (
      event.target.id ===
      "reset-game"
    ) {

      resetGame();

    }

  }
);


/* =========================================================
   COMPLETE MENU AANMAKEN
   ========================================================= */

function createExpansionMenu() {

  if (
    document.getElementById(
      "expansion-menu"
    )
  ) return;


  const menu =
    document.createElement(
      "section"
    );


  menu.id =
    "expansion-menu";


  menu.className =
    "page";


  menu.innerHTML = `

    <div class="container">

      <h1>
        🏢 Facility
      </h1>

      <div
        id="facility-list"
        class="grid"
      ></div>

      <hr>

      <h1>
        🛒 Reptile Shop
      </h1>

      <div
        id="full-shop-list"
        class="grid"
      ></div>

      <hr>

      <button
        id="reset-game"
      >
        🔄 Reset Game
      </button>

    </div>

  `;


  document.body.appendChild(
    menu
  );

}


/* =========================================================
   EXTRA NAVIGATIEKNOPPEN
   ========================================================= */

function createExpansionButtons() {

  const possibleContainers = [
    document.querySelector(
      "nav"
    ),
    document.querySelector(
      ".navbar"
    ),
    document.querySelector(
      ".navigation"
    ),
    document.body
  ];


  let container = null;


  for (
    const possible
    of possibleContainers
  ) {

    if (possible) {

      container = possible;

      break;

    }

  }


  if (!container) return;


  if (
    document.getElementById(
      "facility-nav-button"
    )
  ) return;


  const facilityButton =
    document.createElement(
      "button"
    );


  facilityButton.id =
    "facility-nav-button";


  facilityButton.textContent =
    "🏢 Facility";


  facilityButton.onclick =
    function() {

      document
        .querySelectorAll(
          ".page"
        )
        .forEach(
          function(page) {

            page.classList.remove(
              "active"
            );

          }
        );


      const page =
        document.getElementById(
          "expansion-menu"
        );


      if (page) {

        page.classList.add(
          "active"
        );

      }


      renderFacility();

      renderFullShop();

    };


  container.appendChild(
    facilityButton
  );

}


/* =========================================================
   STYLES VOOR NIEUWE ELEMENTEN
   ========================================================= */

function addExpansionStyles() {

  if (
    document.getElementById(
      "part6-styles"
    )
  ) return;


  const style =
    document.createElement(
      "style"
    );


  style.id =
    "part6-styles";


  style.textContent = `

    .grid {

      display: grid;

      grid-template-columns:
        repeat(
          auto-fit,
          minmax(
            220px,
            1fr
          )
        );

      gap: 15px;

    }


    .card {

      box-sizing: border-box;

    }


    button {

      min-height: 44px;

      cursor: pointer;

      touch-action: manipulation;

    }


    .price {

      font-weight: bold;

    }


    @media (max-width: 600px) {

      .grid {

        grid-template-columns:
          1fr;

      }

      button {

        width: 100%;

      }

    }

  `;


  document.head.appendChild(
    style
  );

}


/* =========================================================
   START PART 6
   ========================================================= */

loadCompleteGame();

createExpansionMenu();

createExpansionButtons();

addExpansionStyles();

renderFacility();

renderFullShop();

discoverAnimalMorphs();

saveCompleteGame();


console.log(
  "✅ PART 6 COMPLETE GAME EXPANSION GELADEN!"
);
/* =========================================================
   🐍 PART 7 — FINAL POLISH + BUGFIX
   PLAATS: ONDER PART 6 IN JS
   ========================================================= */

console.log("🔧 PART 7 — Final Polish gestart");


/* =========================================================
   VEILIGE GAME DATA
   ========================================================= */

function ensureGameData() {

  if (!game.animals)
    game.animals = [];

  if (!game.eggs)
    game.eggs = [];

  if (!game.racks)
    game.racks = [];

  if (!game.incubators)
    game.incubators = [];

  if (!game.discoveredMorphs)
    game.discoveredMorphs = ["Normal"];

  if (!game.money)
    game.money = 1000;

  if (!game.nextAnimalId)
    game.nextAnimalId = 3;


  if (!game.facility) {

    game.facility = {

      racks: [
        {
          id: 1,
          name: "Starter Rack",
          capacity: 5,
          level: 1
        }
      ],

      incubators: [
        {
          id: 1,
          name: "Basic Incubator",
          capacity: 4,
          level: 1
        }
      ]

    };

  }


  game.animals.forEach(function(animal) {

    if (animal.health === undefined)
      animal.health = 100;

    if (animal.food === undefined)
      animal.food = 100;

    if (animal.cleanliness === undefined)
      animal.cleanliness = 100;

    if (animal.age === undefined)
      animal.age = 0;

    if (!animal.morphs)
      animal.morphs = ["Normal"];

    if (!animal.sex)
      animal.sex =
        Math.random() < 0.5 ? "♀" : "♂";

    if (animal.alive === undefined)
      animal.alive = true;

  });

}


/* =========================================================
   GAME TOAST MELDINGEN
   ========================================================= */

function gameMessage(message) {

  let toast =
    document.getElementById(
      "game-toast"
    );


  if (!toast) {

    toast =
      document.createElement("div");

    toast.id =
      "game-toast";

    toast.style.position =
      "fixed";

    toast.style.left =
      "50%";

    toast.style.bottom =
      "25px";

    toast.style.transform =
      "translateX(-50%)";

    toast.style.padding =
      "14px 20px";

    toast.style.borderRadius =
      "14px";

    toast.style.background =
      "#111";

    toast.style.color =
      "#fff";

    toast.style.zIndex =
      "99999";

    toast.style.fontWeight =
      "bold";

    toast.style.maxWidth =
      "90%";

    toast.style.textAlign =
      "center";

    document.body.appendChild(toast);

  }


  toast.textContent = message;

  toast.style.display = "block";


  clearTimeout(
    window.gameToastTimer
  );


  window.gameToastTimer =
    setTimeout(function() {

      toast.style.display =
        "none";

    }, 2500);

}


/* =========================================================
   BETERE SAVE
   ========================================================= */

function finalSave() {

  try {

    localStorage.setItem(
      "REPTILE_BREEDER_FINAL_SAVE",
      JSON.stringify(game)
    );

  }

  catch(error) {

    console.log(
      "Save fout:",
      error
    );

  }

}


/* =========================================================
   LOAD FINAL SAVE
   ========================================================= */

function finalLoad() {

  const saved =
    localStorage.getItem(
      "REPTILE_BREEDER_FINAL_SAVE"
    );


  if (!saved) return;


  try {

    const data =
      JSON.parse(saved);

    Object.assign(
      game,
      data
    );

  }

  catch(error) {

    console.log(
      "Final save kon niet geladen worden."
    );

  }

}


/* =========================================================
   AUTO SAVE
   ========================================================= */

setInterval(function() {

  finalSave();

}, 5000);


/* =========================================================
   BREEDING VEILIGER MAKEN
   ========================================================= */

function finalCanBreed(female, male) {

  if (!female || !male) {

    gameMessage(
      "❌ Kies twee dieren."
    );

    return false;

  }


  if (female.sex !== "♀") {

    gameMessage(
      "❌ Het eerste dier moet ♀ zijn."
    );

    return false;

  }


  if (male.sex !== "♂") {

    gameMessage(
      "❌ Het tweede dier moet ♂ zijn."
    );

    return false;

  }


  if (!female.alive || !male.alive) {

    gameMessage(
      "❌ Een overleden dier kan niet worden gebruikt."
    );

    return false;

  }


  if (
    female.health < 50 ||
    male.health < 50
  ) {

    gameMessage(
      "❌ De gezondheid is te laag."
    );

    return false;

  }


  if (
    female.age < 1 ||
    male.age < 1
  ) {

    gameMessage(
      "❌ De dieren zijn nog te jong."
    );

    return false;

  }


  if (
    female.species !==
    male.species
  ) {

    gameMessage(
      "❌ Verschillende soorten kunnen niet normaal paren."
    );

    return false;

  }


  return true;

}


/* =========================================================
   BREEDING KNOP VEILIG MAKEN
   ========================================================= */

const breedingButton =
  document.getElementById(
    "start-breeding"
  );


if (breedingButton) {

  breedingButton.addEventListener(
    "click",
    function(event) {

      if (
        !selectedParentOne ||
        !selectedParentTwo
      ) {

        gameMessage(
          "❌ Kies eerst een ♀ en ♂."
        );

        return;

      }


      if (
        !finalCanBreed(
          selectedParentOne,
          selectedParentTwo
        )
      ) {

        event.preventDefault();

        return;

      }

    }
  );

}


/* =========================================================
   NIEUWE MORPHS AUTOMATISCH ONTDEKKEN
   ========================================================= */

function scanCollection() {

  game.animals.forEach(function(animal) {

    if (!animal.morphs)
      return;


    animal.morphs.forEach(function(morph) {

      if (
        !game.discoveredMorphs.includes(
          morph
        )
      ) {

        game.discoveredMorphs.push(
          morph
        );

        gameMessage(
          "🧬 Nieuwe morph ontdekt: " +
          morph
        );

      }

    });

  });


  finalSave();

}


/* =========================================================
   DIEREN STATUS
   ========================================================= */

function updateAnimalStatus() {

  game.animals.forEach(function(animal) {

    if (!animal.alive)
      return;


    if (
      animal.food <= 0 ||
      animal.cleanliness <= 0
    ) {

      animal.health =
        Math.max(
          0,
          animal.health - 1
        );

    }


    if (animal.health <= 0) {

      animal.alive = false;

      animal.status =
        "Overleden";

    }

  });


  finalSave();

}


/* =========================================================
   INCUBATOR STATUS
   ========================================================= */

function updateEggStatus() {

  game.eggs.forEach(function(egg) {

    if (
      egg.ageDays >=
      egg.totalDays
    ) {

      egg.ageDays =
        egg.totalDays;

      egg.status =
        "Ready to Hatch";

    }

  });

}


/* =========================================================
   DAGELIJKSE GAME UPDATE
   ========================================================= */

setInterval(function() {

  updateAnimalStatus();

  updateEggStatus();

  scanCollection();

  try {

    renderEverything();

  }

  catch(error) {

    console.log(
      "Render update:",
      error
    );

  }

}, 30000);


/* =========================================================
   MOBIELE BUTTON FIX
   ========================================================= */

document.addEventListener(
  "touchstart",
  function(event) {

    const button =
      event.target.closest(
        "button"
      );


    if (!button)
      return;


    button.style.transform =
      "scale(0.97)";

  },
  {
    passive: true
  }
);


document.addEventListener(
  "touchend",
  function(event) {

    const button =
      event.target.closest(
        "button"
      );


    if (!button)
      return;


    setTimeout(function() {

      button.style.transform =
        "";

    }, 100);

  },
  {
    passive: true
  }
);


/* =========================================================
   DUBBELE KLIK VOORKOMEN
   ========================================================= */

let lastClickTime = 0;


document.addEventListener(
  "click",
  function(event) {

    const button =
      event.target.closest(
        "button"
      );


    if (!button)
      return;


    const now =
      Date.now();


    if (
      now - lastClickTime <
      250
    ) {

      event.stopImmediatePropagation();

      return;

    }


    lastClickTime =
      now;

  },
  true
);


/* =========================================================
   GAME RESET
   ========================================================= */

function completelyResetGame() {

  const confirmReset =
    confirm(
      "⚠️ ALLES RESETTEN?\n\n" +
      "Je verliest je dieren, geld, eieren " +
      "en collectie."
    );


  if (!confirmReset)
    return;


  localStorage.clear();

  location.reload();

}


/* =========================================================
   RESET EVENT
   ========================================================= */

document.addEventListener(
  "click",
  function(event) {

    if (
      event.target.id ===
      "reset-game"
    ) {

      completelyResetGame();

    }

  }
);


/* =========================================================
   GAME START
   ========================================================= */

ensureGameData();

finalLoad();

ensureGameData();

scanCollection();

updateAnimalStatus();

updateEggStatus();


try {

  renderEverything();

}

catch(error) {

  console.log(
    "Game render:",
    error
  );

}


console.log(
  "================================"
);

console.log(
  "🐍 REPTILE BREEDER SIMULATOR"
);

console.log(
  "✅ PART 7 GELADEN"
);

console.log(
  "📱 Mobile controls actief"
);

console.log(
  "💾 Autosave actief"
);

console.log(
  "🧬 Breeding actief"
);

console.log(
  "🥚 Incubator actief"
);

console.log(
  "🏠 Racks actief"
);

console.log(
  "================================"
);
/* =========================================================
   🐍 PART 8 — IPHONE BREEDING SELECTIE
   PLAATS: ONDER PART 7 IN JS
   ========================================================= */

console.log("📱 PART 8 — Touch Breeding geladen");


/* =========================================================
   GESELECTEERDE DIEREN
   ========================================================= */

let touchFemale = null;
let touchMale = null;


/* =========================================================
   BREEDING SCHERM MAKEN
   ========================================================= */

function createTouchBreedingScreen() {

  let page =
    document.getElementById(
      "touch-breeding-page"
    );


  if (page) return;


  page =
    document.createElement(
      "section"
    );


  page.id =
    "touch-breeding-page";


  page.className =
    "page";


  page.innerHTML = `

    <div class="touch-breeding-container">

      <h1>
        🧬 Breeding
      </h1>


      <p class="breeding-help">
        Tik eerst op een ♀ en daarna op een ♂.
      </p>


      <div class="breeding-selected">

        <div
          id="touch-female-selected"
          class="selected-parent"
        >

          <div class="big-emoji">
            ♀
          </div>

          <strong>
            Kies een vrouwtje
          </strong>

        </div>


        <div class="breeding-x">
          ×
        </div>


        <div
          id="touch-male-selected"
          class="selected-parent"
        >

          <div class="big-emoji">
            ♂
          </div>

          <strong>
            Kies een mannetje
          </strong>

        </div>

      </div>


      <h2>
        ♀ Vrouwtjes
      </h2>


      <div
        id="touch-female-list"
        class="touch-animal-grid"
      ></div>


      <h2>
        ♂ Mannetjes
      </h2>


      <div
        id="touch-male-list"
        class="touch-animal-grid"
      ></div>


      <div
        id="touch-breeding-result"
        class="breeding-result-box"
      >

        <h3>
          🧬 Kies je ouders
        </h3>

        <p>
          Tik op twee dieren om te beginnen.
        </p>

      </div>


      <button
        id="touch-start-breeding"
        class="big-breeding-button"
      >

        🥚 START BREEDING

      </button>

    </div>

  `;


  document.body.appendChild(
    page
  );

}


/* =========================================================
   DIER KAART
   ========================================================= */

function createTouchAnimalCard(
  animal,
  selected
) {

  const card =
    document.createElement(
      "button"
    );


  card.type =
    "button";


  card.className =
    "touch-animal-card";


  if (selected) {

    card.classList.add(
      "selected"
    );

  }


  card.dataset.animalId =
    animal.id;


  card.innerHTML = `

    <div class="touch-animal-emoji">

      ${animal.emoji || "🐍"}

    </div>


    <div class="touch-animal-name">

      ${animal.species}

    </div>


    <div>

      ${animal.sex}

    </div>


    <div class="touch-animal-morphs">

      ${
        animal.morphs
          ? animal.morphs.join(" + ")
          : "Normal"
      }

    </div>


    <div class="touch-animal-health">

      ❤️ ${animal.health}%

    </div>


    ${
      selected
        ? `<div class="selected-check">
             ✅ GESELECTEERD
           </div>`
        : ""
    }

  `;


  return card;

}


/* =========================================================
   DIEREN TONEN
   ========================================================= */

function renderTouchBreedingAnimals() {

  const femaleList =
    document.getElementById(
      "touch-female-list"
    );


  const maleList =
    document.getElementById(
      "touch-male-list"
    );


  if (!femaleList || !maleList)
    return;


  femaleList.innerHTML = "";

  maleList.innerHTML = "";


  const females =
    game.animals.filter(
      function(animal) {

        return (
          animal.sex === "♀" &&
          animal.alive !== false
        );

      }
    );


  const males =
    game.animals.filter(
      function(animal) {

        return (
          animal.sex === "♂" &&
          animal.alive !== false
        );

      }
    );


  if (females.length === 0) {

    femaleList.innerHTML = `

      <div class="empty-breeding">

        ❌ Geen vrouwtjes beschikbaar.

      </div>

    `;

  }


  if (males.length === 0) {

    maleList.innerHTML = `

      <div class="empty-breeding">

        ❌ Geen mannetjes beschikbaar.

      </div>

    `;

  }


  females.forEach(
    function(animal) {

      const card =
        createTouchAnimalCard(
          animal,
          touchFemale &&
          touchFemale.id === animal.id
        );


      card.addEventListener(
        "click",
        function() {

          touchFemale =
            animal;

          renderTouchBreeding();

        }
      );


      femaleList.appendChild(
        card
      );

    }
  );


  males.forEach(
    function(animal) {

      const card =
        createTouchAnimalCard(
          animal,
          touchMale &&
          touchMale.id === animal.id
        );


      card.addEventListener(
        "click",
        function() {

          touchMale =
            animal;

          renderTouchBreeding();

        }
      );


      maleList.appendChild(
        card
      );

    }
  );

}


/* =========================================================
   GESELECTEERDE OUDERS
   ========================================================= */

function renderSelectedParents() {

  const female =
    document.getElementById(
      "touch-female-selected"
    );


  const male =
    document.getElementById(
      "touch-male-selected"
    );


  if (!female || !male)
    return;


  if (touchFemale) {

    female.innerHTML = `

      <div class="big-emoji">

        ${touchFemale.emoji || "🐍"}

      </div>

      <strong>

        ${touchFemale.species}

      </strong>

      <span>

        #${touchFemale.id}

      </span>

      <span>

        ${touchFemale.morphs.join(" + ")}

      </span>

      <span>

        ${touchFemale.sex}

      </span>

    `;

    female.classList.add(
      "has-animal"
    );

  }


  if (touchMale) {

    male.innerHTML = `

      <div class="big-emoji">

        ${touchMale.emoji || "🐍"}

      </div>

      <strong>

        ${touchMale.species}

      </strong>

      <span>

        #${touchMale.id}

      </span>

      <span>

        ${touchMale.morphs.join(" + ")}

      </span>

      <span>

        ${touchMale.sex}

      </span>

    `;

    male.classList.add(
      "has-animal"
    );

  }

}


/* =========================================================
   MOGELIJKE BABY'S
   ========================================================= */

function renderTouchBreedingResult() {

  const result =
    document.getElementById(
      "touch-breeding-result"
    );


  if (!result)
    return;


  if (
    !touchFemale ||
    !touchMale
  ) {

    result.innerHTML = `

      <h3>
        🧬 Kies je ouders
      </h3>

      <p>
        Tik op een ♀ en een ♂.
      </p>

    `;

    return;

  }


  if (
    touchFemale.species !==
    touchMale.species
  ) {

    result.innerHTML = `

      <h3>
        ⚠️ Verschillende soorten
      </h3>

      <p>
        Kies twee dieren van dezelfde soort
        voor normale breeding.
      </p>

    `;

    return;

  }


  let possibilities = [];


  try {

    possibilities =
      getPossibleMorphs(
        touchFemale,
        touchMale
      );

  }

  catch(error) {

    possibilities = [];

  }


  let html = `

    <h3>
      🧬 Mogelijke baby's
    </h3>

  `;


  if (
    possibilities.length === 0
  ) {

    html += `

      <p>
        🐍 Normal is mogelijk.
      </p>

    `;

  }


  possibilities.forEach(
    function(item) {

      html += `

        <div class="touch-possibility">

          <span>
            🧬 ${item.morph}
          </span>

          <strong>
            ~${item.chance}%
          </strong>

        </div>

      `;

    }
  );


  result.innerHTML =
    html;

}


/* =========================================================
   COMPLETE RENDER
   ========================================================= */

function renderTouchBreeding() {

  createTouchBreedingScreen();

  renderTouchBreedingAnimals();

  renderSelectedParents();

  renderTouchBreedingResult();

}


/* =========================================================
   START BREEDING
   ========================================================= */

document.addEventListener(
  "click",
  function(event) {

    if (
      event.target.id !==
      "touch-start-breeding"
    ) {

      return;

    }


    if (
      !touchFemale ||
      !touchMale
    ) {

      gameMessage(
        "❌ Kies eerst een ♀ en een ♂."
      );

      return;

    }


    if (
      !finalCanBreed(
        touchFemale,
        touchMale
      )
    ) {

      return;

    }


    const capacity =
      totalIncubatorCapacity();


    if (
      game.eggs.length >=
      capacity
    ) {

      gameMessage(
        "❌ Je incubators zitten vol!"
      );

      return;

    }


    let amount =
      Math.floor(
        Math.random() * 5
      ) + 2;


    amount =
      Math.min(
        amount,
        capacity - game.eggs.length
      );


    for (
      let i = 0;
      i < amount;
      i++
    ) {

      createEgg(
        touchFemale,
        touchMale
      );

    }


    finalSave();

    renderEverything();

    renderTouchBreeding();


    gameMessage(
      "🥚 Breeding gelukt! " +
      amount +
      " eieren!"
    );


    /*
     * Ga automatisch naar incubator.
     */

    setTimeout(
      function() {

        const incubatorPage =
          document.getElementById(
            "page-incubator"
          );


        if (incubatorPage) {

          document
            .querySelectorAll(
              ".page"
            )
            .forEach(
              function(page) {

                page.classList.remove(
                  "active"
                );

              }
            );


          incubatorPage.classList.add(
            "active"
          );

        }

      },
      600
    );

  }
);


/* =========================================================
   NAVIGATIE NAAR BREEDING
   ========================================================= */

function openTouchBreeding() {

  createTouchBreedingScreen();

  renderTouchBreeding();


  document
    .querySelectorAll(
      ".page"
    )
    .forEach(
      function(page) {

        page.classList.remove(
          "active"
        );

      }
    );


  const page =
    document.getElementById(
      "touch-breeding-page"
    );


  if (page) {

    page.classList.add(
      "active"
    );

  }

}


/* =========================================================
   BREEDING KNOPPEN VANGEN
   ========================================================= */

document.addEventListener(
  "click",
  function(event) {

    const button =
      event.target.closest(
        "[data-page]"
      );


    if (!button)
      return;


    const page =
      button.dataset.page;


    if (
      page === "breeding"
    ) {

      setTimeout(
        function() {

          openTouchBreeding();

        },
        50
      );

    }

  }
);


/* =========================================================
   ALS ER GEEN BREEDING KNOP IS:
   EXTRA KNOP MAKEN
   ========================================================= */

function createBreedingNavigation() {

  if (
    document.getElementById(
      "mobile-breeding-button"
    )
  ) {

    return;

  }


  const button =
    document.createElement(
      "button"
    );


  button.id =
    "mobile-breeding-button";


  button.textContent =
    "🧬 Breeding";


  button.addEventListener(
    "click",
    function() {

      openTouchBreeding();

    }
  );


  const nav =
    document.querySelector(
      "nav"
    ) ||
    document.querySelector(
      ".navbar"
    ) ||
    document.querySelector(
      ".navigation"
    );


  if (nav) {

    nav.appendChild(
      button
    );

  }

}


/* =========================================================
   IPHONE STYLING
   ========================================================= */

function addTouchBreedingStyles() {

  if (
    document.getElementById(
      "touch-breeding-styles"
    )
  ) {

    return;

  }


  const style =
    document.createElement(
      "style"
    );


  style.id =
    "touch-breeding-styles";


  style.textContent = `

    .touch-breeding-container {

      width: min(
        100%,
        900px
      );

      margin: auto;

      padding: 18px;

      box-sizing: border-box;

    }


    .breeding-help {

      text-align: center;

      opacity: .8;

    }


    .breeding-selected {

      display: grid;

      grid-template-columns:
        1fr auto 1fr;

      gap: 10px;

      align-items: center;

      margin: 20px 0;

    }


    .selected-parent {

      min-height: 150px;

      padding: 15px;

      border-radius: 18px;

      background:
        rgba(255,255,255,.07);

      border: 2px solid
        rgba(255,255,255,.12);

      display: flex;

      flex-direction: column;

      align-items: center;

      justify-content: center;

      gap: 5px;

      text-align: center;

    }


    .selected-parent.has-animal {

      border-color:
        #65d66f;

    }


    .big-emoji {

      font-size: 55px;

    }


    .breeding-x {

      font-size: 30px;

      font-weight: bold;

    }


    .touch-animal-grid {

      display: grid;

      grid-template-columns:
        repeat(
          auto-fit,
          minmax(
            150px,
            1fr
          )
        );

      gap: 12px;

      margin-bottom: 25px;

    }


    .touch-animal-card {

      min-height: 190px;

      padding: 14px;

      border-radius: 18px;

      border: 2px solid
        rgba(255,255,255,.1);

      background:
        rgba(255,255,255,.06);

      color: inherit;

      text-align: center;

      display: flex;

      flex-direction: column;

      align-items: center;

      justify-content: center;

      gap: 5px;

      touch-action: manipulation;

      -webkit-tap-highlight-color:
        transparent;

    }


    .touch-animal-card.selected {

      border-color:
        #65d66f;

      transform:
        scale(.97);

      box-shadow:
        0 0 0 3px
        rgba(101,214,111,.2);

    }


    .touch-animal-emoji {

      font-size: 50px;

    }


    .touch-animal-name {

      font-weight: bold;

    }


    .touch-animal-morphs {

      font-size: 13px;

      opacity: .85;

    }


    .touch-animal-health {

      font-size: 13px;

    }


    .selected-check {

      font-weight: bold;

      font-size: 12px;

    }


    .breeding-result-box {

      margin: 20px 0;

      padding: 16px;

      border-radius: 18px;

      background:
        rgba(255,255,255,.06);

    }


    .touch-possibility {

      display: flex;

      justify-content:
        space-between;

      padding: 10px;

      margin: 5px 0;

      border-radius: 10px;

      background:
        rgba(255,255,255,.05);

    }


    .big-breeding-button {

      width: 100%;

      min-height: 58px;

      border: none;

      border-radius: 18px;

      font-size: 17px;

      font-weight: bold;

      touch-action: manipulation;

    }


    .empty-breeding {

      padding: 20px;

      text-align: center;

      opacity: .7;

    }


    @media(max-width:600px) {

      .breeding-selected {

        grid-template-columns:
          1fr;

      }


      .breeding-x {

        transform:
          rotate(90deg);

      }


      .touch-animal-grid {

        grid-template-columns:
          repeat(2, 1fr);

      }

    }

  `;


  document.head.appendChild(
    style
  );

}


/* =========================================================
   START
   ========================================================= */

createTouchBreedingScreen();

addTouchBreedingStyles();

createBreedingNavigation();

renderTouchBreeding();


console.log(
  "✅ PART 8 KLAAR — Breeding is nu touch-based!"
);
/* =========================================================
   🧬 PART 9 — MORPHS VOOR ALLE REPTIELEN & AMFIBIEËN
   PLAATS: ONDER PART 8 IN JS
   ========================================================= */

console.log("🧬 PART 9 — Species Morph System geladen");


/* =========================================================
   MORPHS PER SOORT
   ========================================================= */

const speciesMorphs = {

  "Ball Python": [
    "Normal",
    "Albino",
    "Clown",
    "Pied",
    "Pastel",
    "Banana",
    "Mojave",
    "Axanthic",
    "Enchi",
    "Pinstripe",
    "Spider",
    "Hypo",
    "Lavender Albino",
    "Genetic Stripe",
    "Desert",
    "Ultramel",
    "Piebald",
    "Cinnamon",
    "Fire",
    "Lesser"
  ],

  "Corn Snake": [
    "Normal",
    "Amelanistic",
    "Anery",
    "Snow",
    "Motley",
    "Striped",
    "Hypo",
    "Lavender",
    "Bloodred",
    "Tessera"
  ],

  "Garter Snake": [
    "Normal",
    "Albino",
    "Anery",
    "Hypo",
    "Melanistic",
    "Striped"
  ],

  "Milk Snake": [
    "Normal",
    "Albino",
    "Amelanistic",
    "Hypo",
    "Black",
    "Tangerine"
  ],

  "King Snake": [
    "Normal",
    "Albino",
    "High White",
    "Lavender",
    "Chocolate",
    "Banana"
  ],

  "Leopard Gecko": [
    "Normal",
    "Mack Snow",
    "Super Snow",
    "Blizzard",
    "Albino",
    "Tremper Albino",
    "Eclipse",
    "RAPTOR",
    "Tangerine",
    "Patternless",
    "Mack Snow Albino",
    "Tangerine Eclipse"
  ],

  "Crested Gecko": [
    "Normal",
    "Harlequin",
    "Dalmatian",
    "Lilly White",
    "Pinstripe",
    "Flame",
    "Brindle",
    "Patternless",
    "Extreme Harlequin",
    "Tricolor"
  ],

  "Gargoyle Gecko": [
    "Normal",
    "Orange Stripe",
    "Red Stripe",
    "Reticulated",
    "Striped",
    "White"
  ],

  "Bearded Dragon": [
    "Normal",
    "Hypo",
    "Translucent",
    "Leatherback",
    "Silkback",
    "Zero",
    "Witblits",
    "Dunner",
    "Citrus",
    "Red"
  ],

  "Blue Tongue Skink": [
    "Normal",
    "Classic",
    "Albino",
    "Hypo",
    "Melanistic",
    "Patternless"
  ],

  "Russian Tortoise": [
    "Normal",
    "Albino",
    "Hypo",
    "High Yellow"
  ],

  "Greek Tortoise": [
    "Normal",
    "Albino",
    "High Yellow",
    "Reduced Pattern"
  ],

  "Hermann's Tortoise": [
    "Normal",
    "Albino",
    "High Yellow",
    "Reduced Pattern"
  ],

  "White's Tree Frog": [
    "Normal",
    "Blue",
    "Snowflake",
    "Albino",
    "Golden",
    "High Blue"
  ],

  "Pacman Frog": [
    "Normal",
    "Albino",
    "Strawberry",
    "Green",
    "Brown",
    "Lutino",
    "Piebald"
  ],

  "Fire-Bellied Toad": [
    "Normal",
    "Yellow",
    "Orange",
    "Red",
    "High Pattern"
  ],

  "Axolotl": [
    "Wild",
    "Leucistic",
    "Golden Albino",
    "Melanoid",
    "Axanthic",
    "Copper",
    "Mosaic",
    "GFP",
    "White Albino"
  ],

  "Tiger Salamander": [
    "Normal",
    "Albino",
    "Melanistic",
    "Hypo",
    "Striped"
  ],

  "Panther Chameleon": [
    "Ambilobe",
    "Ambanja",
    "Nosy Be",
    "Nosy Mitsio",
    "Blue",
    "Red",
    "Orange",
    "Yellow"
  ],

  "Veiled Chameleon": [
    "Normal",
    "Turquoise",
    "Yellow",
    "Blue",
    "High Yellow"
  ]

};


/* =========================================================
   MORPHS AUTOMATISCH AAN DIEREN GEVEN
   ========================================================= */

function setupSpeciesMorph(animal) {

  if (!animal)
    return;


  const available =
    speciesMorphs[
      animal.species
    ];


  if (!available)
    return;


  if (
    !animal.morphs ||
    animal.morphs.length === 0
  ) {

    animal.morphs = [
      "Normal"
    ];

  }


  /*
   * Zorg dat bestaande morphs geldig blijven.
   */

  animal.morphs =
    animal.morphs.filter(
      function(morph) {

        return available.includes(
          morph
        );

      }
    );


  if (
    animal.morphs.length === 0
  ) {

    animal.morphs = [
      "Normal"
    ];

  }

}


/* =========================================================
   ALLE DIEREN UPDATEN
   ========================================================= */

function setupAllSpeciesMorphs() {

  game.animals.forEach(
    function(animal) {

      setupSpeciesMorph(
        animal
      );

    }
  );


  finalSave();

}


/* =========================================================
   MOGELIJKE MORPHS BIJ BREEDING
   ========================================================= */

function getSpeciesBreedingMorphs(
  female,
  male
) {

  if (!female || !male)
    return [];


  if (
    female.species !==
    male.species
  ) {

    return [];

  }


  const available =
    speciesMorphs[
      female.species
    ] || ["Normal"];


  const parentMorphs = [

    ...(female.morphs || []),

    ...(male.morphs || [])

  ];


  const results = [];


  /*
   * Normal is altijd een mogelijke basis.
   */

  if (
    available.includes(
      "Normal"
    )
  ) {

    results.push({
      morph: "Normal",
      chance: 50
    });

  }


  /*
   * Morphs van ouders kunnen
   * worden doorgegeven.
   */

  parentMorphs.forEach(
    function(morph) {

      if (
        morph === "Normal"
      )
        return;


      if (
        !available.includes(
          morph
        )
      )
        return;


      const existing =
        results.find(
          function(item) {

            return (
              item.morph ===
              morph
            );

          }
        );


      if (existing) {

        existing.chance += 15;

      }

      else {

        results.push({

          morph: morph,

          chance: 25

        });

      }

    }
  );


  /*
   * Kleine kans op een nieuwe
   * beschikbare morph.
   */

  if (
    Math.random() < 0.10
  ) {

    const newMorph =
      available[
        Math.floor(
          Math.random() *
          available.length
        )
      ];


    if (
      !results.some(
        function(item) {

          return (
            item.morph ===
            newMorph
          );

        }
      )
    ) {

      results.push({

        morph: newMorph,

        chance: 5

      });

    }

  }


  return results;

}


/* =========================================================
   MORPH KIEZEN VOOR EEN BABY
   ========================================================= */

function generateBabyMorph(
  female,
  male
) {

  const possibilities =
    getSpeciesBreedingMorphs(
      female,
      male
    );


  if (
    possibilities.length === 0
  ) {

    return "Normal";

  }


  const roll =
    Math.random() * 100;


  let total = 0;


  for (
    const possibility
    of possibilities
  ) {

    total +=
      possibility.chance;


    if (
      roll <= total
    ) {

      return possibility.morph;

    }

  }


  return "Normal";

}


/* =========================================================
   EIGEN MORPH BREEDING
   ========================================================= */

function createSpeciesBaby(
  female,
  male
) {

  const morph =
    generateBabyMorph(
      female,
      male
    );


  const baby = {

    id:
      game.nextAnimalId++,

    species:
      female.species,

    emoji:
      female.emoji || "🐍",

    category:
      female.category,

    sex:
      Math.random() < 0.5
        ? "♀"
        : "♂",

    age: 0,

    morphs: [
      morph
    ],

    health:
      90 +
      Math.floor(
        Math.random() * 11
      ),

    weight: 20,

    value:
      calculateMorphValue(
        female.species,
        morph
      ),

    food: 100,

    cleanliness: 100,

    alive: true,

    status:
      "Baby"

  };


  return baby;

}


/* =========================================================
   MORPH WAARDE
   ========================================================= */

function calculateMorphValue(
  species,
  morph
) {

  const baseSpecies =
    reptileSpecies.find(
      function(item) {

        return (
          item.name ===
          species
        );

      }
    );


  let value =
    baseSpecies
      ? baseSpecies.price
      : 50;


  if (
    morph !== "Normal"
  ) {

    value *= 1.5;

  }


  /*
   * Zeldzamere morphs
   * krijgen hogere gamewaarde.
   */

  const rareMorphs = [

    "Super Snow",
    "RAPTOR",
    "Lilly White",
    "Silkback",
    "Zero",
    "Mosaic",
    "GFP",
    "Lavender Albino",
    "Genetic Stripe",
    "Piebald"

  ];


  if (
    rareMorphs.includes(
      morph
    )
  ) {

    value *= 3;

  }


  return Math.round(
    value
  );

}


/* =========================================================
   COLLECTION PER SOORT
   ========================================================= */

function getSpeciesCollection(
  species
) {

  const morphs =
    speciesMorphs[
      species
    ] || [];


  return morphs.map(
    function(morph) {

      return {

        morph: morph,

        discovered:
          game.animals.some(
            function(animal) {

              return (
                animal.species ===
                species &&
                animal.morphs &&
                animal.morphs.includes(
                  morph
                )
              );

            }
          )

      };

    }
  );

}


/* =========================================================
   MORPH COLLECTION SCHERM
   ========================================================= */

function renderSpeciesMorphCollection() {

  let container =
    document.getElementById(
      "species-morph-collection"
    );


  if (!container) {

    container =
      document.createElement(
        "div"
      );

    container.id =
      "species-morph-collection";

    container.className =
      "card";

    document.body.appendChild(
      container
    );

  }


  let html = `

    <h2>
      🧬 Morph Collection
    </h2>

  `;


  Object.keys(
    speciesMorphs
  ).forEach(
    function(species) {

      const collection =
        getSpeciesCollection(
          species
        );


      html += `

        <div
          class="species-collection"
        >

          <h3>
            ${species}
          </h3>

          <div
            class="morph-collection-grid"
          >

      `;


      collection.forEach(
        function(item) {

          html += `

            <div
              class="
                morph-collection-item
                ${
                  item.discovered
                    ? "morph-found"
                    : "morph-hidden"
                }
              "
            >

              ${
                item.discovered
                  ? "🧬"
                  : "❓"
              }

              <span>

                ${
                  item.discovered
                    ? item.morph
                    : "???"
                }

              </span>

            </div>

          `;

        }
      );


      html += `

          </div>

        </div>

      `;

    }
  );


  container.innerHTML =
    html;

}


/* =========================================================
   BREEDING CALCULATOR AANPASSEN
   ========================================================= */

function getPossibleMorphs(
  female,
  male
) {

  const results =
    getSpeciesBreedingMorphs(
      female,
      male
    );


  return results;

}


/* =========================================================
   BESTAANDE EIEREN UPDATEN
   ========================================================= */

function improveEggWithSpecies(
  egg
) {

  if (!egg)
    return;


  if (
    egg.female &&
    egg.male
  ) {

    const female =
      game.animals.find(
        function(animal) {

          return (
            animal.id ===
            egg.female
          );

        }
      );


    const male =
      game.animals.find(
        function(animal) {

          return (
            animal.id ===
            egg.male
          );

        }
      );


    if (
      female &&
      male
    ) {

      egg.species =
        female.species;

    }

  }

}


/* =========================================================
   SHOP MORPHS TONEN
   ========================================================= */

function getShopMorphs(
  species
) {

  return (
    speciesMorphs[
      species
    ] || ["Normal"]
  );

}


/* =========================================================
   MORPH SELECTIE BIJ KOPEN
   ========================================================= */

function buySpeciesWithMorph(
  speciesName,
  morph
) {

  const species =
    reptileSpecies.find(
      function(item) {

        return (
          item.name ===
          speciesName
        );

      }
    );


  if (!species)
    return;


  if (
    game.animals.length >=
    totalRackCapacity()
  ) {

    gameMessage(
      "🏠 Koop eerst een grotere rack."
    );

    return;

  }


  let price =
    species.price;


  if (
    morph &&
    morph !== "Normal"
  ) {

    price =
      calculateMorphValue(
        speciesName,
        morph
      );

  }


  if (
    game.money < price
  ) {

    gameMessage(
      "💰 Niet genoeg geld."
    );

    return;

  }


  game.money -=
    price;


  const animal = {

    id:
      game.nextAnimalId++,

    species:
      speciesName,

    emoji:
      species.emoji,

    category:
      species.category,

    sex:
      Math.random() < 0.5
        ? "♀"
        : "♂",

    age: 1,

    morphs: [
      morph || "Normal"
    ],

    health: 100,

    weight: 50,

    value: price,

    food: 100,

    cleanliness: 100,

    alive: true,

    status:
      "Healthy"

  };


  game.animals.push(
    animal
  );


  discoverMorph(
    morph || "Normal"
  );


  finalSave();

  renderEverything();

  renderSpeciesMorphCollection();


  gameMessage(
    "🎉 " +
    speciesName +
    " gekocht!"
  );

}


/* =========================================================
   STYLING
   ========================================================= */

function addMorphCollectionStyles() {

  if (
    document.getElementById(
      "part9-morph-styles"
    )
  )
    return;


  const style =
    document.createElement(
      "style"
    );


  style.id =
    "part9-morph-styles";


  style.textContent = `

    .species-collection {

      margin-bottom: 25px;

    }


    .morph-collection-grid {

      display: grid;

      grid-template-columns:
        repeat(
          auto-fit,
          minmax(
            130px,
            1fr
          )
        );

      gap: 8px;

    }


    .morph-collection-item {

      padding: 10px;

      border-radius: 12px;

      text-align: center;

      font-size: 13px;

      border: 1px solid
        rgba(255,255,255,.1);

    }


    .morph-found {

      opacity: 1;

    }


    .morph-hidden {

      opacity: .45;

    }


    @media(max-width:600px) {

      .morph-collection-grid {

        grid-template-columns:
          repeat(2, 1fr);

      }

    }

  `;


  document.head.appendChild(
    style
  );

}


/* =========================================================
   START PART 9
   ========================================================= */

setupAllSpeciesMorphs();

addMorphCollectionStyles();

renderSpeciesMorphCollection();

finalSave();


console.log(
  "================================"
);

console.log(
  "🧬 PART 9 KLAAR"
);

console.log(
  "🐍 Slangen hebben eigen morphs"
);

console.log(
  "🦎 Gecko's hebben eigen morphs"
);

console.log(
  "🐢 Schildpadden hebben eigen morphs"
);

console.log(
  "🐸 Kikkers hebben eigen morphs"
);

console.log(
  "🦎 Salamanders hebben eigen morphs"
);

console.log(
  "🦎 Kameleons hebben eigen morphs"
);

console.log(
  "================================"
);
/* =========================================================
   🧬 PART 10 — HYBRID BREEDING + EGG OUTCOMES
   PLAATS: ONDER PART 9 IN JS
   ========================================================= */

console.log("🥚 PART 10 geladen");


/* =========================================================
   KANSEN
   ========================================================= */

const EGG_SETTINGS = {

  sameSpeciesFertility: 0.90,

  hybridFertility: 0.005,

  healthyChance: 0.92,

  deathChance: 0.03,

  hatchDays: 55

};


/* =========================================================
   SOORTEN COMBINEREN
   ========================================================= */

function getBreedingResult(
  female,
  male
) {

  if (!female || !male)
    return null;


  const sameSpecies =
    female.species === male.species;


  /*
   * Zelfde soort:
   * normale breeding
   */

  if (sameSpecies) {

    return {

      type: "normal",

      species:
        female.species,

      fertility:
        EGG_SETTINGS.sameSpeciesFertility

    };

  }


  /*
   * Verschillende soorten:
   * extreem kleine fictieve kans.
   */

  return {

    type: "hybrid",

    species:
      female.species +
      " × " +
      male.species,

    fertility:
      EGG_SETTINGS.hybridFertility

  };

}


/* =========================================================
   EIEREN MAKEN
   ========================================================= */

function createAdvancedEgg(
  female,
  male
) {

  const result =
    getBreedingResult(
      female,
      male
    );


  if (!result)
    return null;


  const fertile =
    Math.random() <
    result.fertility;


  let status;


  if (!fertile) {

    status =
      "Unfertile";

  }

  else {

    status =
      "Developing";

  }


  const egg = {

    id:
      "EGG-" +
      Date.now() +
      "-" +
      Math.floor(
        Math.random() * 9999
      ),

    female:
      female.id,

    male:
      male.id,

    femaleSpecies:
      female.species,

    maleSpecies:
      male.species,

    species:
      result.species,

    type:
      result.type,

    fertile:
      fertile,

    healthy:
      fertile,

    status:
      status,

    ageDays:
      0,

    totalDays:
      EGG_SETTINGS.hatchDays,

    morph:
      "Unknown",

    hatchResult:
      null

  };


  /*
   * Alleen vruchtbare eieren
   * kunnen verder ontwikkelen.
   */

  if (fertile) {

    /*
     * Een klein deel kan tijdens
     * ontwikkeling verloren gaan.
     */

    if (
      Math.random() <
      EGG_SETTINGS.deathChance
    ) {

      egg.status =
        "Dead";

      egg.healthy =
        false;

    }

  }


  return egg;

}


/* =========================================================
   NEST MAKEN
   ========================================================= */

function createAdvancedClutch(
  female,
  male,
  amount = 4
) {

  if (!female || !male)
    return [];


  const eggs = [];


  for (
    let i = 0;
    i < amount;
    i++
  ) {

    const egg =
      createAdvancedEgg(
        female,
        male
      );


    if (egg) {

      game.eggs.push(
        egg
      );

      eggs.push(
        egg
      );

    }

  }


  finalSave();

  return eggs;

}


/* =========================================================
   HYBRIDE MORPH
   ========================================================= */

function generateHybridMorph(
  female,
  male
) {

  const femaleMorph =
    female.morphs &&
    female.morphs.length
      ? female.morphs[
          Math.floor(
            Math.random() *
            female.morphs.length
          )
        ]
      : "Normal";


  const maleMorph =
    male.morphs &&
    male.morphs.length
      ? male.morphs[
          Math.floor(
            Math.random() *
            male.morphs.length
          )
        ]
      : "Normal";


  return {

    morph:
      "Hybrid " +
      femaleMorph +
      " × " +
      maleMorph,

    value:
      500 +
      Math.floor(
        Math.random() * 1500
      )

  };

}


/* =========================================================
   EI LATEN UITKOMEN
   ========================================================= */

function hatchAdvancedEgg(
  egg
) {

  if (!egg)
    return null;


  if (
    egg.status ===
    "Unfertile"
  ) {

    return {

      success: false,

      message:
        "🥚 Dit ei was onbevrucht."

    };

  }


  if (
    egg.status ===
    "Dead"
  ) {

    return {

      success: false,

      message:
        "❌ Dit ei heeft zich niet verder ontwikkeld."

    };

  }


  if (
    egg.ageDays <
    egg.totalDays
  ) {

    return {

      success: false,

      message:
        "⏳ Dit ei is nog niet klaar."

    };

  }


  const female =
    game.animals.find(
      function(animal) {

        return (
          animal.id ===
          egg.female
        );

      }
    );


  const male =
    game.animals.find(
      function(animal) {

        return (
          animal.id ===
          egg.male
        );

      }
    );


  if (!female || !male) {

    egg.status =
      "Dead";

    return {

      success: false,

      message:
        "❌ Ouderdieren niet gevonden."

    };

  }


  let baby;


  /*
   * HYBRIDE
   */

  if (
    egg.type ===
    "hybrid"
  ) {

    const hybrid =
      generateHybridMorph(
        female,
        male
      );


    baby = {

      id:
        game.nextAnimalId++,

      species:
        egg.species,

      emoji:
        "🧬",

      category:
        "Hybrid",

      sex:
        Math.random() < 0.5
          ? "♀"
          : "♂",

      age: 0,

      morphs: [
        hybrid.morph
      ],

      health:
        70 +
        Math.floor(
          Math.random() * 31
        ),

      weight: 20,

      value:
        hybrid.value,

      food: 100,

      cleanliness: 100,

      alive: true,

      status:
        "Hybrid Baby"

    };

  }


  /*
   * NORMALE BREEDING
   */

  else {

    const morph =
      generateBabyMorph(
        female,
        male
      );


    baby = {

      id:
        game.nextAnimalId++,

      species:
        female.species,

      emoji:
        female.emoji ||
        "🐍",

      category:
        female.category,

      sex:
        Math.random() < 0.5
          ? "♀"
          : "♂",

      age: 0,

      morphs: [
        morph
      ],

      health:
        85 +
        Math.floor(
          Math.random() * 16
        ),

      weight: 20,

      value:
        calculateMorphValue(
          female.species,
          morph
        ),

      food: 100,

      cleanliness: 100,

      alive: true,

      status:
        "Baby"

    };

  }


  game.animals.push(
    baby
  );


  egg.status =
    "Hatched";


  egg.hatchResult =
    baby.id;


  egg.morph =
    baby.morphs.join(
      " + "
    );


  discoverMorph(
    baby.morphs[0]
  );


  finalSave();


  return {

    success: true,

    baby: baby,

    message:
      "🐣 Ei uitgekomen!"

  };

}


/* =========================================================
   INCUBATOR UPDATE
   ========================================================= */

function advanceAdvancedEggs(
  days = 1
) {

  game.eggs.forEach(
    function(egg) {

      if (
        egg.status !==
        "Developing"
      )
        return;


      egg.ageDays +=
        days;


      /*
       * Kleine kans dat een
       * gezond ei verloren gaat.
       */

      if (
        Math.random() <
        0.005 * days
      ) {

        egg.status =
          "Dead";

        egg.healthy =
          false;

        return;

      }


      if (
        egg.ageDays >=
        egg.totalDays
      ) {

        egg.ageDays =
          egg.totalDays;

        egg.status =
          "Ready";

      }

    }
  );


  finalSave();

}


/* =========================================================
   EI STATUS TEKST
   ========================================================= */

function getEggStatusText(
  egg
) {

  if (
    egg.status ===
    "Unfertile"
  ) {

    return "🥚 Unfertile";

  }


  if (
    egg.status ===
    "Dead"
  ) {

    return "❌ Development failed";

  }


  if (
    egg.status ===
    "Developing"
  ) {

    return (
      "🥚 Developing — " +
      egg.ageDays +
      "/" +
      egg.totalDays +
      " dagen"
    );

  }


  if (
    egg.status ===
    "Ready"
  ) {

    return "🐣 Ready to hatch!";

  }


  if (
    egg.status ===
    "Hatched"
  ) {

    return "🐣 Hatched";

  }


  return egg.status;

}


/* =========================================================
   EI OPENEN
   ========================================================= */

function openEgg(
  eggId
) {

  const egg =
    game.eggs.find(
      function(item) {

        return (
          item.id ===
          eggId
        );

      }
    );


  if (!egg) {

    gameMessage(
      "❌ Ei niet gevonden."
    );

    return;

  }


  if (
    egg.status !==
    "Ready"
  ) {

    gameMessage(
      getEggStatusText(
        egg
      )
    );

    return;

  }


  const result =
    hatchAdvancedEgg(
      egg
    );


  if (
    result &&
    result.success
  ) {

    gameMessage(
      "🎉 HATCHED! " +
      result.baby.species +
      " — " +
      result.baby.morphs.join(
        " + "
      )
    );

  }

  else if (result) {

    gameMessage(
      result.message
    );

  }


  renderEverything();

}


/* =========================================================
   BREEDING BUTTON OVERSCHRIJVEN
   ========================================================= */

document.addEventListener(
  "click",
  function(event) {

    if (
      event.target.id !==
      "touch-start-breeding"
    )
      return;


    if (
      !touchFemale ||
      !touchMale
    ) {

      gameMessage(
        "❌ Kies eerst twee dieren."
      );

      return;

    }


    /*
     * Maximaal 5 eieren
     * per breeding.
     */

    const amount =
      Math.floor(
        Math.random() * 4
      ) + 2;


    const eggs =
      createAdvancedClutch(
        touchFemale,
        touchMale,
        amount
      );


    if (
      eggs.length === 0
    ) {

      gameMessage(
        "❌ Er konden geen eieren worden gemaakt."
      );

      return;

    }


    const hybrids =
      eggs.filter(
        function(egg) {

          return (
            egg.type ===
            "hybrid"
          );

        }
      );


    if (
      touchFemale.species !==
      touchMale.species
    ) {

      if (
        hybrids.length > 0
      ) {

        gameMessage(
          "🧬 Zeldzame hybride eieren!"
        );

      }

      else {

        gameMessage(
          "❌ Deze breeding mislukte."
        );

      }

    }

    else {

      gameMessage(
        "🥚 " +
        eggs.length +
        " eieren gelegd!"
      );

    }


    renderEverything();

  }
);


/* =========================================================
   EI TIJD LATEN VERLOPEN
   ========================================================= */

setInterval(
  function() {

    /*
     * In de game staat 1 echte minuut
     * gelijk aan 1 game-dag.
     */

    advanceAdvancedEggs(
      1
    );


    try {

      renderEverything();

    }

    catch(error) {

      console.log(
        "Egg render:",
        error
      );

    }

  },
  60000
);


/* =========================================================
   EI STATUS OP CONSOLE
   ========================================================= */

function debugEggs() {

  console.table(
    game.eggs.map(
      function(egg) {

        return {

          ID:
            egg.id,

          Species:
            egg.species,

          Type:
            egg.type,

          Status:
            egg.status,

          Days:
            egg.ageDays +
            "/" +
            egg.totalDays

        };

      }
    )
  );

}


/* =========================================================
   START
   ========================================================= */

if (!game.eggs)
  game.eggs = [];


finalSave();


console.log(
  "🥚 PART 10 KLAAR"
);

console.log(
  "🧬 Cross-species breeding toegevoegd"
);

console.log(
  "🥚 Fertile / Unfertile toegevoegd"
);

console.log(
  "❤️ Healthy eggs toegevoegd"
);

console.log(
  "❌ Dead eggs toegevoegd"
);

console.log(
  "🐣 Individual hatching toegevoegd"
);

console.log(
  "================================"
);
/* =========================================================
   PART 11 — DUBBELE BREEDING BUTTON FIX
   ========================================================= */

function removeDuplicateBreedingButtons() {

    const buttons = [
        ...document.querySelectorAll("button")
    ];

    let found = false;

    buttons.forEach(function(button) {

        const text =
            button.textContent
                .trim()
                .toLowerCase();

        if (
            text.includes("breeding") ||
            text.includes("🧬")
        ) {

            if (!found) {

                found = true;

            } else {

                button.style.display = "none";

            }

        }

    });

}


/* Controleer ook wanneer de pagina opnieuw wordt opgebouwd */

setInterval(
    removeDuplicateBreedingButtons,
    500
);


removeDuplicateBreedingButtons();

console.log(
    "✅ PART 11 — dubbele Breeding-knop verwijderd"
);
