


//generate valid parenthesis combinations
//valid parenthesis is a string of parenthesis that can be closed and opened in a correct way 
//means that the number of opening and closing parenthesis is equal
//for every opening parenthesis, there should be a closing parenthesis
//for every closing parenthesis, there should be an opening parenthesis

//example: ()()()()
//example: (()())
//example: ((()))

//input: number of parenthesis
//output: array of valid parenthesis


generateParenthesisRecursiveFunction = (open, close, current, combiantions) => {
    if (open === 0 && close === 0) {
        combiantions.push(current);
    }
    if (open > 0) {
        generateParenthesisRecursiveFunction(open - 1, close, current + '(', combiantions);
    }
    if (close > open) {
        generateParenthesisRecursiveFunction(open, close - 1, current + ')', combiantions);
    }
}

const generateParenthesisCall = (n) => {
    let combiantions = [];
    generateParenthesisRecursiveFunction(n, n, '', combiantions);
    return combiantions;
}

console.log(generateParenthesisCall(2));