loadEvents()

function loadEvents(){

    document.getElementById('addBut')

}

function submit(e){

    e.preventDefault();
    let input = document.querySelector('addBut')
    if(input.value != '')
      createDiv(input.value)
    input.value = ''

}

function createDiv() {

    let ul = document.querySelector('ul');
    let li = document.createElement('li');
    li.innerHTML = `<div>Hey whats cracking</div>`;
    ul.appendChild(li);
    document.querySelector('mainSpace').style.display = 'block';
    
}


