ui = new UI();
ls = new LS();

const form = document.querySelector('form');
const taskInput = document.querySelector('#task');
const taskList = document.querySelector('ul');
const clearBtn = document.querySelector('#clearAll');
const filterInput = document.querySelector('#filter')

document.addEventListener('DOMContentLoaded', getTasks);

form.addEventListener('submit', addTask);
taskList.addEventListener('click', deleteTask);
clearBtn.addEventListener('click', deleteTasks);
filterInput.addEventListener('keyup', filterTask);

function addTask(e) {
	const task = new Task(taskInput.value);
	ui.addTask(task);
	ls.addTask(task);
	e.preventDefault();
}

function deleteTask(e){
	let task = e.target.parentElement.firstChild;
	ui.deleteTask(task);
	task = task.textContent;
	ls.deleteTask(task);
}

function deleteTasks(e){
	let tasks = document.querySelector('ul');
	ui.deleteTasks(tasks);
	ls.deleteTasks();
}

function getTasks(e) {
	tasks = ls.getData('tasks');
	ui.getTasks(tasks);
}
function filterTask(e){
	const text = e.target.value.toLowerCase();
	const tasks = document.querySelectorAll('.collection-item');
	tasks.forEach(function(element){
		const task = element.firstChild.textContent.toLowerCase();
		if(task.indexOf(text) != -1){
			element.style.display = 'block';
		} else {
			element.style.display = 'none'
		}
	});
}