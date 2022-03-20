/*
Use fetch to load a greeting from the API and display it 
in the HTML element with the id "greeting-text".

API: https://codeyourfuture.herokuapp.com/api/greetings
Response: A greeting in a random language

To learn more about fetch, refer to the doc:
https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch


================
Expected result
================

Open index.html in your browser. Every time you refresh the page,
a different greeting should be displayed in the box.
*/
const Api_url = 'https://codeyourfuture.herokuapp.com/api/greetings'

async function greating() {
  const link = await fetch(Api_url);
  const text1 = await link.text()
  console.log(text1);
  const greatingText = document.getElementById('greeting-text')
  greatingText.innerHTML = text1

}
greating()