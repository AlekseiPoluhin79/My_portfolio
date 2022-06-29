let formDate = {};
const form = document.querySelector('form');
const LS = localStorage;

//получить данные из input
//1. Перехватываем событие

form.addEventListener('input', (event) => {
	formDate[event.target.name] = event.target.value;
	LS.setItem('formDate', JSON.stringify(formDate));
});

//Восстановить данные из LocalStorage
if (LS.getItem('formDate')) {
	formDate = JSON.parse(LS.getItem('formDate'));
	//console.log(form.elements);  у переменной form есть свойство elements  мы можем получить список всех элементов и обратиться к ним
	// form.elements[name]         вот так мы можем обратиться
	for (let key in formDate) {
		form.elements[key].value = formDate[key];
	}
}
