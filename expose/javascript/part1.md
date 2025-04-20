1. Line 9 prints out "values added: 15"
2. Line 13 prints out "final result: 15"
3. Using var may lead to naming conflicts and scoping issues

4. Line 9 prints out "values added: 15"
5. Line 13 prints out a ReferenceError: result is not defined, this is because of variable scoping. the line "let result = 0;" is only declared in the if statement. This is because let creates a block scope variable.

6. Nothing since: I am getting the error, TypeError: Assignment to constant variable, and this happens on the line "result = num1 + num2", this is because we have already assigned result as const, and now we are trying to reassign it.

7. Nothing since: I am getting the error, TypeError: Assignment to constant variable, and this happens on the line "result = num1 + num2", this is because we have already assigned result as const, and now we are trying to reassign it.
