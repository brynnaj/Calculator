// sets variables
let result = '0';
        let currentInput = '';
        let operator = '';
        let currentOperationDisplay = document.getElementById('result');

        // updates whats shown on the display screen
        function updateResult() {
            if (operator !== '') {
                currentOperationDisplay.innerText = currentInput + ' ' + operator + ' ' + result;
            } else {
                currentOperationDisplay.innerText = result;
            }
        }

        // puts numbers on the display
        function appendToResult(value) {
            if (result === '0') {
                result = value;
            } else {
                result += value;
            }
            updateResult();
        }

        // puts in mathmatical operator
        function appendOperator(op) {
            if (currentInput !== '') {
                calculateResult();
            }
            operator = op;
            currentInput = result;
            result = '0';
            updateResult();
        }

        
        // clears the display
        function clearResult() {
            result = '0';
            currentInput = '';
            operator = '';
            updateResult();
        }

        // calculate and shows result on display
        function calculateResult() {
            if (operator !== '') {
                result = eval(currentInput + operator + result).toString();
                currentInput = '';
                operator = '';
                updateResult();
            }
        }