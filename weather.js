const link = document.createElement('link');
link.rel = 'stylesheet';
link.type = 'text/css';
link.href = 'https://777dan.github.io/lab3/style.css';
document.head.appendChild(link);
const rows = document.querySelectorAll('tr');
let maxTemp = 0;
let maxDate = "";

for (let i = 1; i < rows.length; i++) {
    let cells = rows[i].querySelectorAll('td');
    let date = cells[2].innerText;
    let temp = parseFloat(cells[3].innerText);
    if (temp > maxTemp) {
        maxTemp = temp;
        maxDate = date;
    }
}

let div = document.createElement('div');
div.className = 'result';
div.innerHTML = `Найспекотніший день: ${maxDate}. Температура: ${maxTemp} &deg;C`;
document.body.prepend(div);
alert("Найспекотніший день знайдено");
