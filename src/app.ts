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

/* ----------------------------------------------------------------------------------------------------------------------------- */
/** Dynamic (any) type in Typescript */
let a: any; //by declaring variable 'a' to 'any' type, we can store any value in the variable like a number string boolean etc.

a = 20;
a = 'Arya';
a = false;
a = {
    name: "Arya",
    age: 20
};
//from the above 4 lines, we can see that variable 'a' is given 'any' type so 'a' can be a number string boolean or an object


//defining an array of type 'any'
let arrayTypeAny: any[] = []; //WHILE EXPLICITLY DEFINING A TYPE WE NEED TO USE COLON ':' INSTEAD OF EQUAL TO SIGN

arrayTypeAny.push(25);
arrayTypeAny.push('Arya');
arrayTypeAny.push(true);
arrayTypeAny.push(25.23);
arrayTypeAny.push('New');
console.log(arrayTypeAny);

//Defining an object of 'any' type
let typeAnyObj: {
    name: any,
    age: any
};

/* ----------------------------------------------------------------------------------------------------------------------------- */
/** Function Basics */

let newFun: Function; //explicitily defining newFun as a function

newFun = () => {
    console.log('hello from a function')
};

newFun();

const add = (num1: number, num2: number, num3: number | string = 30): void => {
    console.log('addition is: ', (num1 + num2));
    console.log('third variable is: ', num3)
};
// we can put '?' sign after a variable to set a default value and the function will work as required even if the third value is not passed during function call.
// or we can simply put default value as shown above

add(50, 20); //this line passes 2 value to function 'add' and the third value 'num3' is considered as undefined if no value is passed to it during function call

add(50, 25, '100'); // now the value of 'num3' will be 100

// defining a function returning a value

const subtract = (num1: number, num2: number): number => {
    // console.log("the Subtraction is: ", (num1 - num2));
    return num1 - num2;
};

// and specified data type after the function parathesis is the return data type
// now even if we do not provide the return data type explicitly, typescript automatically infers the return type on the basis of values passed into the function

let resultSub = subtract(50, 30);
console.log(resultSub);

//by default a function which does not contain any return statement, the function automatically sets the function type to void;


/* ----------------------------------------------------------------------------------------------------------------------------- */
/** 'type' in TS */

type stringOrNumber = string | number;
type userObject = { uname: string, age: number, online: boolean }

const userDetails = (name: string, age: number) => {
    console.log('user')
};

const getUser = (uid: stringOrNumber, name: string) => {
    console.log(`username is: ${name}`)
};

const getUser1 = (user: userObject) => {
    console.log(`user age: ${user.age}`)
};
