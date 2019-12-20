# 301-practice-1

## 1. What library do we use in Node on the server side to allow us to create and run an HTTP server that obeys the HTTP protocol?

express.

## 2. Explain this snippet of code from a server-side application 
## response.status(200).send('Hello World!');

send a simple string as a response, and to close the connection back to the client using Express.

## 3. Write a function that takes an array of numbers as an argument and outputs the square of each number in that array.


function square(arr){
newArr=arr.map((num)=>{
 return num*num
})
return newArr;
};