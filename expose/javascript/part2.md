1. At line 12, console.log(i) is logging or printing infomation to the console, the stored value i which is 3.

2. At line 13, console.log(discountedPrice) is logging or printing infomation to the console the value discountedPrice which is 150.

3. At line 14, console.log(finalpRICE) is logging or printing infomation to the console the value finalPrice which is 150.

4. The function will still return the array discounted at line 16, "return discounted", but nothing is being logged so we won't see anything in the console as we commented out the lines "console.log(.....)".

5. At line 12, console.log(i) gives us the error of ReferenceError: i is is not defined. This is because we defined i by "let" which means that "let i = 0;" is only declared in the for loop and cannot be accessed out of the the for loop. let is block-scoped, which means it's only accessible within the for loop.

6. At line 13, Running this code gives us an error of ReferenceError: discountedPrice is not defined. This is because the variable discountedPrice was intialized by let, which means that "let discountedPrice" is only declared in the for loop and cannot be accessed out of it. let is block-scoped, which means it's only accessible within the for loop.

7. At line 14, console.log(finalPrice) is logging or printing infomation to the console the value finalPrice which is 150. This happens because the value stored in finalPrice can be access just fine since we declared it outside of any curly braces of loops or statements. 

8. The function will still return the array discounted at line 16, "return discounted", but nothing is being logged so we won't see anything in the console as we commented out the lines "console.log(.....)".

9. At line 11, console.log(i) gives us the error of ReferenceError: i is is not defined. This is because we defined i by "let" which means that "let i = 0;" is only declared in the for loop and cannot be accessed out of the the for loop. let is block-scoped, which means it's only accessible within the for loop.

10. At line 12, console.log(length) will print to the console the value of length which is 3. This is because we declared the variable length by const which means that we can access it throughout the function (also mean we cannot change the value later on).

11. The function will still return the array discounted at line 14, "return discounted", but nothing is being logged so we won't see anything in the console as we commented out the lines "console.log(.....)".





12. 
A) To access the value of the name property, the notation would be "student.name", and to print the value: 
console.log(student.name);       

B) To access the value of the name property,the notation would be "student['Grad Year'], and to print the value: 
console.log(student['Grad Year']); 

C) To call the function for the greeting property, the notation would be "student.greeting();"

D) To access the name property of the object in the Favorite Teacher property in student, the notation would be student['Favorite Teacher'].name

E) To access index zero in the array of the courseLoad property of the student object, the notation would be student.courseLoad[0], and to print the value, we can write:  console.log(student.courseLoad[0]); 

13. 
A) '32', since integers map to their exact string representation.

B) 1, the - operator triggers numeric coercion, which means the '3' is converted into 3, so 3-2=1.

C) 3, the null is coerced to 0 when we have an integer, so we have: 3 +0 = 3

D) '3null', the null is coerced into the string 'null', so we have: string concatenation of '3' + 'null' = '3null'

E) 4, since true maps to 1 and so we have: 1+3 = 4

F) 0 because javascript uses type coercion when doing arithmetic with non-number types. So this means that false and null are both coerced to 0. So we have: 0+0=0

G) '3undefined','3' is a string and undefined gets coerced into the string "undefined", and so we have: string concatenation of '3' + 'undefined' = '3undefined'

H) Nan, the - operator in JavaScript forces numeric conversion on both sides, so '3' is a 3, and undefined is coerced to NaN (Not a Number). And anything that involves an NaN in arithmetic stays NaN.

14. 
A) true, JavaScript converts '2' to the number 2 so it can compare the numbers, and so 2>1

B) false, since both operands are strings, javascripts use lexicographical comparison and not numeric comparison. And so, '2' is compared to '1' (the 0th index of '12') and it returns false.

C) true, loose equality "==" allows for type coercion. So javacript coerces '2' into the number 2 before comparing and so we have: 2==2 which returns true.

D) false, strict equality "===" means that no type coercion happens. Since '2' and 2 are not the same type and value, it returns false. In order  for it to be true we must have 2 === 2 or '2' === '2'.

E) false, lose equality "==" allows for type coercion, so javascript coerces true to 1 and so we have the following comparison of 1==2 which is false.

F) true, this is becasue: Boolean(2) converts the value 2 to a boolean. Any any non-zero number maps to true. Boolean(2) will return true because 2 fits the requirement, and the whole operation returns true since trye==true


15. For "==", type coercion happens automatically and it compares values not types. The main idea is that it converts the values to a common type before comparing. However for "===", "===" compares both value and type and does not perform any type coercion, meaning the values must be exactly the same in both type and value to be considered equal. 

16. (This should be in a JS file part2-question16.js)

17. The function will return the newArr array which holds the values [2,4,6]. The reason for this is because in the modifyArray function we are passing in the array [1,2,3] to be used, and we are also able to access the doSomething function referenced callback. We then create a new array to store new values obtained throughout the operation. During the for loop, at each iteration, the value i at array[i] is being passed into the callback function, and that callback function returns the value * 2. When returned, the value is pushed into the new array that we initalized earlier, this repeats until there are no more iterations.

18. (This should be a JS file - part2-question18.js)

19. The ouput of the above code is:
1
4
3
2
The reason for the numbers being in this order is because of the timeouts are different et each line