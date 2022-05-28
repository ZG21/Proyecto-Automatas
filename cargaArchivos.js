// Get the form and file field
let form = document.querySelector('#upload');
let file = document.querySelector('#file');
let automata = {};

// Listen for submit events
form.addEventListener('submit', handleSubmit);


console.log(document.body.childNodes);
$(document).ready(function(){
	//$('#grafo1').append('Graph LR')
	$('.mermaid').append('moon;')
	mermaid.initialize({ startOnLoad: true });
});

function handleSubmit(event){

	// Stop the form from reloading the page
	event.preventDefault();

	// If there's no file, do nothing
	if (!file.value.length) return;

	let reader = new FileReader();

	reader.onload = lecturaAutomata;
	reader.readAsText(file.files[0]);
}

/**
 * 
 * @param {*} event 
 */
function lecturaAutomata(event)
{
	//button creation
	let state = document.createElement('div');
	state.setAttribute('class','mermaid');
	state.setAttribute('id','grafo2');
	state.textContent='graph TD;'
	state.append('Star --> b;')
	//state.textContent="Becerro --> casa;"
	document.body.append(state)
	//document.body.append(state);

	//var state = document.cloneNode('#grafo1');
	//console.log(state,"perris")

	automata = JSON.parse(event.target.result);
	document.getElementById("txt_inp").innerHTML = JSON.stringify(automata);
}

setTimeout(() =>
{
	console.log(automata);
}, 10000);