const display = document.getElementById('display');
const buttons = document.querySelectorAll('button');

let expression = "";

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.textContent.trim(); 

        if (value === 'c') {
            expression = "";
        } else if (value === 'back') {
        
            expression = expression.slice(0, -1);
        } else if (value === '=') {
            try {
                expression = eval(expression).toString();
            } catch (error) {
                expression = "Error";
            }
        } else {
            expression += value;
        }

        display.value = expression;
    });
});
