// fetch('https://jsonplaceholder.typicode.com/todos/1')
//   .then(response => response.json())
//   .then(json => console.log(json))

axios.get('https://jsonplaceholder.typicode.com/todos/1')
  .then((response) => {
    // handle success
    console.log(response.data);
  })

  // POST call

//   fetch('https://jsonplaceholder.typicode.com/posts', {
//   method: 'POST',
//   body: JSON.stringify({
//     title: 'foo',
//     body: 'bar',
//     userId: 1,
//   })
// })
//   .then((response) => response.json())
//   .then((json) => console.log(json));

axios.post("https://jsonplaceholder.typicode.com/posts", {
    title: 'foo',
    body: 'bar',
    userId: 1,
  }).then((response) => console.log(response))