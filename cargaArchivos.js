// Get the form and file field
let form = document.querySelector('#upload');
let file = document.querySelector('#file');
let automata = {};

// Listen for submit events
form.addEventListener('submit', handleSubmit);

//Graph creation
let state = document.createElement('div');
state.setAttribute('class','mermaid');
state.setAttribute('id','graph');
state.textContent='graph TD;'
state.append('perro -->gato;')
state.append('perro -->gato;')
state.append('perro1 -->gato1;')
state.append('perro -->gato1;')
console.log(state,"elbueno")

document.body.append(state)





console.log(document.body.childNodes);
$(document).ready(function(){
	//mermaid.initialize({ startOnLoad: true });
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
	automata = JSON.parse(event.target.result);
	document.getElementById("txt_inp").innerHTML = JSON.stringify(automata);
	if (automata) {
		mermaid.initialize({ startOnLoad: true });
		creacionAutomata(automata)
	}
}

function creacionAutomata(automata){
	
	console.log("hello world", automata)

	let state1 = document.getElementById("graph")
	state1.append("a --> b;")
	
	console.log(state1,"perris")
	document.body.append(state1)

}

setTimeout(() =>
{
	console.log(automata);
}, 10000);