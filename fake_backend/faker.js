const { faker } = require('@faker-js/faker');
const fs = require("fs");

const countTodos = 31

const generateTodos = (n) => {
	const todos = []
	for(let x = 1; x <= n; x++) {
		const item = {
			id: x,
			title: faker.company.bs(),
			date: faker.date.past(10)
		}
		todos.push(item)
	}
	return todos
}

fs.writeFileSync(
	"./fake_backend/todos.json",
	JSON.stringify({ todos: generateTodos(countTodos), todos_count: {count: countTodos}}, null, 2)
);
