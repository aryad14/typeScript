//Arrays
let names = ['arya', 'krish', 'ram', 'trupti'];
// console.log(names);

names[1] = 'raghav'
// names.push(4); (throws an error cause names is string array and number cannot be pushed in it)
console.log(names);

//same goes if array contains only numbers
let numberArray = [5, 7, 98, 1, 2, 5];
numberArray.push(8);
// numberArray.push('arya'); (throws error)


//now if array contains mixed data types
let mixedArray = [34, 'arya', true, 'krish', 45];
mixedArray.push(52);
mixedArray.push('raghav');
mixedArray.push(false);
//as we can see there is no error thrown as the array 'mixedArray' contains values of all datatypes



//Objects

let newObj = {
    name: 'Arya',
    age: 10,
    pass: true
}; //now once defined the object, we cannot add new properties if we want

newObj.name = 'Krish';
newObj.pass = false;

// the existing object can be updated by doing the following

newObj = {
    name: 'Krish',
    age: 20,
    pass: true
}; // if we remove any one of the property from this updated object, then we will get an error because the structure of the updated object should be same as the object initially declared.
// the values can be changed but the datatypes should remain same for the existing object
