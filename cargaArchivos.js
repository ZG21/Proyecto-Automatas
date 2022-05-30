$(document).ready(function ()
{
	let automata = {};
	let _codeSyntax = "graph TD;";
	let file = document.querySelector('#file');

	$("#inp_uploadFile").click(function (event)
	{
		event.preventDefault();
		if (!file.value.length) return;

		let reader = new FileReader();

		reader.onload = lecturaAutomata;
		reader.readAsText(file.files[0]);

	});

	/**
	 * Obtiene el contenido del archivo y empieza los procesos de creación y reverso
	 * @param {*} event 
	 */
	function lecturaAutomata(event)
	{
		automata = JSON.parse(event.target.result);
		document.getElementById("txt_inp").innerHTML = JSON.stringify(automata);
		if (automata)
		{
			creacionAutomata(automata);
			reversoAutomata(automata);
		}
	}

	/**
	 * Creará espacio de trabajo para los graficos
	 */
	function createSvg($code)
	{
		//Graph creation
		let graph = document.getElementById("graph1");

		let insert = function ($code)
		{
			graph.innerHTML = $code;
		}

		mermaid.render("preparedScheme", $code, insert);
	}

	/**
	 * 
	 * @param {*} automata 
	 */
	function creacionAutomata(automata)
	{
		_codeSyntax = _codeSyntax + "a-->b;"
		createSvg(_codeSyntax);
	}

	/**
	 * Función reverso
	 * @param {*} automata 
	 */
	function reversoAutomata(automata)
	{
		let revAut = automata
		let nuevoInicial = revAut.initial
		revAut.initial = revAut.final
		revAut.final = nuevoInicial
		if (revAut.final.length == 1)
		{
			for (let i = 0; i < revAut.transition.length; i++)
			{
				let transicion = revAut.transition[i]
				let nuevoFrom = transicion.from
				transicion.from = transicion.to
				transicion.to = nuevoFrom
				nuevoFrom = ""
				console.log(typeof (transicion), transicion, "DESPUES")

			}
		}

		_codeSyntax = _codeSyntax + "c-->d;"
		createSvg(_codeSyntax);
	}

});
