// globals
var questions = [
    'Is there a simpler version of this?',
    'What parts of this need more polish?',
    'If you published this as it is, what would be criticized?',
    'Is it obvious what the function of this is?',
    'What problem does this solve?',
    'If this wasn\'t your design, how would you critique it?',
    'If you killed your favorite part of this design, would it still work?',
    'Who are you designing this for?'
];

colors = [
    '#F7630C',
    '#E74856',
    '#E81123',
    '#9A0089',
    '#0078D7',
    '#0099BC',
    '#00B7C3',
    '#00CC6A'
];


function buildCards(e){
    var parent = document.querySelector('.questions');
    var c = 0;
    questions.forEach(question => {
        element = document.createElement('p');
        element.classList.add('card');
        element.classList.add('question');
        element.style.transform = `rotate(${Math.random() * 10 - 5}deg)`;
        element.style.background = colors[c];
        element.style.zIndex = 1;
        element.addEventListener('click', nextCard);
        element.appendChild(document.createTextNode(question));
        parent.appendChild(element);
        c = (c == colors.length) ? 0 : c + 1;
    });
}

function nextCard(){
    console.log(this);
    this.style.transform+= ' rotateZ(180deg) scale(5)';
    this.style.opacity = 0;
    this.addEventListener('transitionend', function(e){
        if(e.propertyName !== 'opacity') return;
        this.remove();
    });
}

goAgain = document.querySelector('.goagain');
goAgain.addEventListener('click', buildCards);

buildCards();
var bottomQuestion = document.querySelector('.question:first-child');