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