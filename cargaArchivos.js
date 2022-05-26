// Get the form and file field
let form = document.querySelector('#upload');
let file = document.querySelector('#file');
let automata = {};

// Listen for submit events
form.addEventListener('submit', handleSubmit);

function handleSubmit(event)
{

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
}

setTimeout(() =>
{
	console.log(automata);
}, 10000);
