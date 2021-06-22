$(document).ready(start);

function start() {
    console.log('JQ');
    console.log('Here are all the available people:', people);
    who()
    prompt()
    $("#body").on("click", "div", theChoice);
}
let thePrompt = -1;

function prompt() {
    let rPerson = randomNumber(0, 6);
    thePrompt = people[rPerson];
    console.log(thePrompt);
    $('#prompt').empty();
    $('#prompt').append('<h2>' + thePrompt.name + '</h2>')


}

function theChoice() {
    if (thePrompt.name === $(this).attr('id')) {
        alert('Thats it you found them');
        prompt();
    } else alert('not that person, try again!')
}

function randomNumber(min, max) {
    return Math.floor(Math.random() * (1 + max - min) + min);
}








function who() {
    for (let person of people)
        $('#body').append(`<div class="grid" id="${person.name}"><button id=${person.name}><img src="https://github.com/${person.githubUsername}.png?size=250" alt="Profile image of ${person.name}">
            </button></div>`)
}