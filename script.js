let names = []
let inputIds = ["name1"];
let idCounter = 1;


function addName(){
    idCounter++;
    let newId = `name${idCounter}`;
    inputIds.push(newId);
    
    createLine(newId);

}

function createLine(id){
    let div = document.createElement('div');
    div.classList.add('form-row');

    let label = document.createElement('label');
    label.setAttribute('for', id);
    label.textContent = `Name ${idCounter}:`;

    let input = document.createElement('input');
    input.setAttribute('type', "text");
    input.setAttribute('id', id);

    label.appendChild(input);

    div.appendChild(label);
    
    document.getElementById("form").appendChild(div);

}

function mixNames(){
    let elements = document.querySelectorAll('input[type=text]');
    console.log(elements)
    for (i = 0 ; i < elements.length; i++){
        id = elements[i].id;
        let name = document.getElementById(id).value;
        names.push(name);
    }

    let div = document.createElement('div');
    div.setAttribute('id', "results");
    document.body.appendChild(div);

    let people = [...names];
    for (i = 0 ; i < people.length ; i++){
        drawAName(people[i]);
    }
    

}

function drawAName(person){
    alert(`${person}, it's your turn!`);
    let number = Math.floor(Math.random() * names.length);
    let chosen = names[number];
    names.splice(number, 1);
    alert(`You drew ${chosen}!`)

    let result = document.createElement("p");
    result.classList.add('result');
    result.textContent = `${person}: ${chosen}`;
    document.getElementById("results").appendChild(result);

}