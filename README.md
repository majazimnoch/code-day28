# Panic Website 
## Intro
This is proejct number 28 of my 30 days coding challenge. This project includes the following tech stuff: HTML, CSS, JavaScript. 

## Idea
I was playing around with some JavScript built-in methods and when I practised `split` and `join` method I came up with an idea for this website which rewrites user's input in capital letters, adding a scary emoji between each word. I didn't forget about nice styling which renders the function's character. 

## Breaking down the code 
I started off my writing my HTML. I devided the porject into three main segments: top div, button and bottom div. In the top one, I placed my textarea with an id of inputSentence, which I later used via `getElementById` in my JS code. 
Button has an id of 'panicBtn'. It gets EventListener of `click` which executes the anonymous function that retrives the user input from the first textarea, Sets the value of the "outputPanic" textarea to the generated panicked text, calls the panic function on the user's text, and plays the sound using the `panicSound` Audio object.

## Demo
Click <a href="https://heydrama.netlify.app/">here</a>.