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

/* ----------------------------------------------------------------------------------------------------------------------------- */

/** Explicit Types */
//----------------------------------------------------

let username: string;
let userAge: number;
let userActive: boolean;
//we can use this method to initialize a variable without actually giving it a value

username = 'Arya';
userAge = 10;
userActive = false;
//now while giving the variables a value, we need to match the data types provided to them when initializing


/** Arrays */
//-----------------------------------------------------------------------

let userArray: string[] = []; //initializes empty array for values of string data type only
// we cannot directly push a value in the array as it is not declared it as an empty array

userArray.push('JavaScript');
userArray = ['Arya', 'Hello', 'Position', 'TypeScript'];
// userArray.push(50); (not allowed as userArray is defined to contain only string values)


/** Mixed Types */
// ---------------------------------------------------------------------------

let mixArr: (string | number | boolean)[] = []; // it tells that an array can contain values for string or number or boolean 
mixArr.push(21);
mixArr.push("Arya");
mixArr.push(true);
mixArr.push("Krish");
console.log(mixArr);


//now to declared a variable to contain string or number value
let userID: string | number; // now variable userID can contain string or a numerical value

/** Objects */
// ---------------------------------------------------------------------------

let objectOne: object;
objectOne = {
    name: "Arya",
    age: 21,
    isPass: true
}; //as variable objectOne is given the type of object, it can store value for any data type without following a structure of variable

let objectTwo: {
    name: string,
    age: number,
    isPass: boolean
}; // now when declaring values to objectTwo, we need to declare value for all the properties like name, age, and isPass

objectTwo = {
    name: 'Krish',
    age: 20,
    isPass: false
};

console.log(objectTwo)
