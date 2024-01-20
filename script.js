let arr = [
  { id: 1, name: 'john', age: 18, profession: 'developer' },
  { id: 2, name: 'jack', age: 20, profession: 'developer' },
  { id: 3, name: 'karen', age: 19, profession: 'admin' },
];


function PrintDeveloper() {
  //Write your code here , just console.log
  const developers = arr.filter(employee =>employee.profession === "developer");
  console.log(developers);

}

function addData() {
  //Write your code here, just console.log
  const newData= {id:4, name:"susan", age:"20", profession:"intern"}
  arr.push(newData);
  console.log(arr);
}

function removeAdmin() {
  //Write your code here, just console.log
  arr = arr.filter(employee => employee.profession !== 'admin');

}

function concatenateArray() {
  //Write your code here, just console.log
  const additionalEmployees = [
    { id: 5, name: 'Rahul', age: 22, profession: 'developer' },
    { id: 6, name: 'shashi', age: 21, profession: 'intern' },
  ];
  arr = arr.concat(additionalEmployees);
  console.log('Arrays concatenated.');
  console.log(arr);
}
// Here is an example of how functions work,
// basically a function is a block of code which can directly access your 'arr' variable since arr is global.
// If I have a function called consoleArr(), that can directly access arr like this to console it.

function consoleArr() {
  console.log('Consoling Array Variable', arr);
  // Over here I can directly access the variable.
}
