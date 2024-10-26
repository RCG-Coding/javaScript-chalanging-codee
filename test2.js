const person = {
    name: "John",
    age: 30,
    city: "New York"
};
   
/*convert object into text format */ 
  let text = "";
  for(i in person){
    text += person[i] + " ";
  }
  console.log(text);

/*convert object into array */ 
  const myArray = Object.values(person);
  console.log(myArray)
  
/*convert object into JSON format */   
  let myJSON = JSON.stringify(person);
  console.log(myJSON)