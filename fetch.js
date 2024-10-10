//ASYNCHRONOUS JS

//synchronous /blocking

const url = "https://jsonplaceholder.typicode.com/users";

// async

// PROMISES - fulfilled, rejected, pending
//.then method
fetch(url)
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });

//async/ await

const getUsers = async () => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

getUsers();

// REQUEST METHODS

//GET - retrieve data,
//POST - creating a data,
//PATCH - updating ,
//DELETE - removing data,
//PUT - udating (total overhaul)
