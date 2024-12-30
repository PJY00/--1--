const apiURL = "https://my-json-server.typicode.com/yanghaemi/json_placeholder/db";

let names = [];
let users = [];

fetch(apiURL)
    .then(response => response.json())
    .then(data => {
        users = Object.values(data);
        names = users.map(element => element.name);

        const personElement = document.getElementById("person");
        names.forEach((name, index) => {
            personElement.innerHTML += `<span>${index + 1}. ${name}  </span>`;
        });
    })
    .catch(error => console.error("Error:", error));

function birthPrint() {
    const inputId = document.getElementById("inputId").value;
    let existId = null;

    if (inputId > 0 && inputId < 6) {
        existId = users.find(user => user.id == inputId);
    } else {
        for (let i = 0; i < names.length; i++) {
            if (inputId === names[i]) {
                existId = users.find(user => user.id === i + 1);
                break;
            }
        }
    }

    if (existId) {
        alert(`${existId.name}: ${existId.month}/${existId.day}`);
    } else {
        alert("존재하지 않음");
    }
}