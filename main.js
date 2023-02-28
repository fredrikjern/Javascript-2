let myAnimal;
class Pet {
  constructor(name, animalType) {
    this.name = name;
    this.animalType = animalType;
    this.tiredness = 50;
    this.hunger = 50;
    this.loneliness = 50;
    this.happiness = 50;
  }
  nap() { 
    this.tiredness -= 40;
    this.hunger += 10;
    this.loneliness += 10;
    console.log("You put " + this.name + " to bed :)");
    this.checkLimits();
    this.renderAnimal();
  }
  eat() {
    this.tiredness += 10;
    this.hunger -= 60;
    console.log("You fed " + this.name);
    this.checkLimits();
    this.renderAnimal();
  }
  play() {
    if (this.tiredness < 70) {
      this.happiness += 30;
      this.tiredness += 20;
      this.hunger += 20;
      this.loneliness -= 10;
      this.checkLimits();
      this.renderAnimal();
      console.log("You played with " + this.name);
    } else
      console.log(
        "I'm to tired :( This is how tired I am!!: " + this.tiredness
      );
  }
  checkLimits() {
    if (this.tiredness > 100) this.tiredness = 100;
    if (this.hunger > 100) this.hunger = 100;
    if (this.happiness > 100) this.happiness = 100;
    if (this.loneliness > 100) this.loneliness = 100;
    if (this.tiredness < 0) this.tiredness = 0;
    if (this.hunger < 0) this.hunger = 0;
    if (this.happiness < 0) this.happiness = 0;
    if (this.loneliness < 0) this.loneliness = 0;
  }
  renderAnimal() {
    let resultContainer = document.querySelector(".results");
    resultContainer.innerHTML = "";
    resultContainer.innerHTML = `
    <h2>${myAnimal.name}</h2> 
    <div>
    <label for="file">Trötthet:</label>
    <progress id="file" value="${myAnimal.tiredness}" max="100">  ${myAnimal.tiredness} / 100 </progress>  
    
    <label for="file">Hunger:</label>
    <progress id="file" value="${myAnimal.hunger}" max="100">  ${myAnimal.hunger} / 100 </progress>
    
    <label for="file">Ensamhet:</label>
    <progress id="file" value="${myAnimal.loneliness}" max="100">  ${myAnimal.loneliness} / 100 </progress>
    
    <label for="file">Lycka:</label>
    <progress id="file" value="${myAnimal.happiness}" max="100">  ${myAnimal.happiness} / 100 </progress>
    </div>
    `;
  }
}
myAnimal = new Pet("nils", "katt");
let createAnimalForm = document.getElementById("create-animal-form");
createAnimalForm.addEventListener("submit", createAnimal);
function createAnimal(event) {
  event.preventDefault();
  let name = document.getElementById("name").value;
  console.log(name);
  let animal = document.getElementById("animals").value;
    myAnimal = new Pet(name, animal);
    myAnimal.nap();
}

let nap = document.getElementById("nap");
function napF(event) {
    event.preventDefault();
    console.log("söv");
    myAnimal.nap();
}
nap.addEventListener("submit", napF);
let eat = document.getElementById("eat");
function eatF(event) {
    event.preventDefault();
    console.log("Ät");
    myAnimal.eat();
}
eat.addEventListener("submit", eatF);
let play = document.getElementById("play");
function playF(event) {
    event.preventDefault();
    console.log("Lek");
    myAnimal.play()
    
}
play.addEventListener("submit", playF);
