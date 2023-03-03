/**
 * Uppgift 1

Hämta data från https://jsonplaceholder.typicode.com/todos .
Skapa en todo-lista där du skriver ut varje todo (dvs endast dess titel).
Bredvid varje todo, ska det finnas en checkbox. Om todo:n är utförd, ska checkboxen vara ifylld.
(Extra) Skapa en todo-lista för varje användare. Varje lista ska bara innehålla todo’s för den specifika användaren (Tips: Titta på ditt data och fundera över hur man kan åstadkomma detta).

 */
async function getData() {
    let res = await fetch("https://jsonplaceholder.typicode.com/todos");
    let data = await res.json()
    console.log(data);
    return data
}
function renderList(data) {
    let users = [2,3];
    let container = document.querySelector(".container");
    data.forEach(obj => { 
        console.log(users);
        console.log(obj.userId);
        console.log(obj.userId.includes(2));
        //console.log(users.every());
        //console.log(users.every((val) => obj.userId.includes(val)));
        //if (users.every((val) => obj.userId.includes(val))) { console.log("den fanns"); }
 
        //     let item = document.createElement("li")
    //     item.innerHTML = `${obj.title}`
    //     let checkbox = document.createElement('input');
    //     checkbox.setAttribute("type","checkbox")
    //     checkbox.setAttribute("checked",`${obj.completed?true:false}`)
    // item.append(checkbox)
    //     list.append(item)
    })
}
async function execute() {
    let items = await getData();
    renderList(items)
}

execute()