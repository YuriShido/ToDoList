let input = prompt('What would you like to do?');

//optional to add dummy data inside todos
const todos = ['Collect Chicken Eggs','Clean Litter Box'];

function showlist () {
    for (let i = 0; i < todos.length; i++) {
        console.log(`******************************\n${i+1}: ${todos[i]}\n`);
    }
}

//start with a while loop that checks for quit input
while(input.toLowerCase() !== "quit" && input.toLowerCase() !== "q") {
  //if else conditions
    if(input === '' || input === null) {
      alert("Plese enter valid list")

    } if(input === "new") {
        let add = prompt("What would you like to add in the list?");
        todos.push(add);
        console.log(`${add} is added in the list! `);
        
    } else if (input.toLowerCase() === "list") {
        // for(todo of todos) {
        //     console.log(`******************************\n${todo}\n`);
        showlist(todos);
        
    } else if(input.toLowerCase() === "delete") {
        console.log(showlist());
        let remove = prompt("Which index do you want to delete?");
        if(remove <= todos.length) {
            todos.splice(remove-1, 1);
            console.log("It is deleted from the list.");
        } else {
            console.log("invalid input!");
        }
        // break;

    } else if(input === "quit" && input === "q") {
        break;
    } else {
        console.log("Invalid input! Try again");
    }
      input = prompt("What would you like to do?")
}

console.log('OK QUIT THE APP');

