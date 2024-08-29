const $app = document.getElementById('app')

$app.innerHTML = `
<header>
	<h1 class="title">Lista de Tareas</h1>
	<form class="task-form">
		<input type="text" placeholder="Escribe la tarea" class="task-form__text-field" />
		<button type="submit" class="task-form__button">
			+ Nueva Tarea
		</button>
	</form>
</header>
<section class="task-container">
	<div class="task">
		<span class="task__date">28/08/2024</span>
		<h2 class="task__name">Cocinar</h2>
		<p class="task__description">Cocinar arroz con pollo</p>
		<span class="task__state" data-state="complete">Completado</span>
	</div>
</section>
`

// Evento principal
$app.addEventListener('click', (event) => {
	const $form = $app.querySelector('.task-form')
	const $taskContainer = $app.querySelector('.task-container')
	
	$form.addEventListener('submit', (event) => {
		event.preventDefault()
		const $inputText = $form.querySelector('.task-form__text-field')
		console.log($inputText.value)
	})
})