http://127.0.0.1/ -> http://localhost

localhost -> 127.0.0.1

-----------------------------------

http://127.0.0.1:5500/index.html

PROTOCOL://IP_ADDRESS:PORT/index.html
---------------------------------


JS :

Single threaded
Interpreted (nowadays browsers have something called JIT - Just in time compilation)
Prototype based
dynamic
Multi paradigm :
1. event driven -> JS reacts to events (mostly user actions - like clicking      submit button)
2. Functional -> Pure functions/ functions treated as first class members
3. Object oriented
4. Imperative
5. Declarative


-----------------------------------------

JS :

1. Variables :

Declare a variable - var <VARIABLE_NAME>;
Define/assign value to a variable - <VARIABLE_NAME> = VALUE;
Use that variable - <VARIABLE_NAME>

VARIABLE_NAME -> can start with $, _, alphabets -> and after numbers are also allowed.
Also, they are case sensitive.

-----------------------------------------

Primitive Datatypes in JS :

1. String ("" / '')
2. number (equivalent to int/float both)
3. boolean
4. bigint (suffix by n)
5. undefined -> if we have not assigned any value to the variable, by default,  value is given as undefined and also, typeof of that variable results in "undefined" i.e. value and datatype both appears to be the same

6. null -> is a value that can be assigned to a variable. (Representation of a no value) typeof null is not equal to "null" rather it is an "object" -> it was a bug that got introduced in JS in 1990ss. 
7. Symbol

------

Non-primitives :

1. Objects

is an entity having state n behaviour (propeties and methods).

Using object literal :

var obj = {
    KEY: "VALUE",
    KEY: "VALUE"
}

var person = {
    name: "Sharad",
    age: 28
}

Using new Keyword :

var obj = new Object();

Using Constructor method :

Discussed on 6th oct.



2. Arrays :


Declare/define array : 



var x = []; -> Declare variable with name "x" and assign it this empty array

Initilize array with values -> 1,2,3
var y = [1,2,3];

Access values in an array :
y[0], y[1], y[2]

Can we store different primitive types in an array ?
var arr = [1, "Sharad", false, 234]

Using new Keyword :

var arr = new Array()


-----------------------------------


Functions :

Syntax :

function FUNCTION_NAME(PARAMETER_1, PARAMETER_2..PARAMETER_N) {
    // reusable piece of code or set of instructions to be executed 
}

-------------

Repository -> JS (Belongs to Teacher)

Student 1 -> git clone <Repository_URL>
Student 2 -> git clone <Repository_URL>

Student1 -> JS folder -> git add . -> git commit -m "" -> JS FOlder + something more

Student2 -> JS folder -> git add . -> git commit -m "" -> JS FOlder + something more


They want me to review their code changes ->
What i will do ?

I Will ask both students - TO CREATE BRANCH FROM MY BRANCH
Branch


-------------------------------------


JS Operators :

Operators - / + - * 

Operands - OP1 OPERATOR OP2 (BINARY OPERATOR)

OP1 OPERATOR -> eg a++ (UNARY OPERATOR)

Arith:

+, -, /, *, %, ++, -->


number + number -> number

10 + "20"
number + string -> string (concatenation).
How ?
Coercion -> Means implicit (internal) conversion


number + string ->
Choice 1 -> convert both to number -> number + number
Choice 2 -> convert both to string -> string + string

But ONE RULE REMAINS SAME -> i.e. BOTH TYPES should be same.
They gone with option 2 -> i.e. 10 + "20" internally converts to-> "10" + "20" -> finally 2 strings concat (+) -> "1020"

10 + true
number + boolean

But ONE RULE REMAINS SAME -> i.e. BOTH TYPES should be same.
number + boolean ->
Choice 1 -> convert both to boolean -> boolean + boolean
Choice 2 -> convert both to number -> number + number

Choice 2 is selectd in JS.
10 + true -> 10 + 1 -> 11

10 + undefined
10 + null

"a" - "b" 

Comparison operators -

<, >, <= , >= , ==, ===, ?


== -> only checks the value
=== -> checks type and value both

<CONDITION> ? <RUN_THIS_IF_CONDITION_TRUE> : <RUN_THIS_IF_CONDITION_FALSE>

Empty String or 0 value -> Falsy Value 
"fdfdf" or 1 value -> Truthy value

--------------------------------------

Short Overview :
DOM (Document object model) :

Browsers -> LEts represent HTML Document in the form of OBJECT 

{

}

JS -> DOM  

-----------------------------------------

Logical Operators :

&&(And), ||(Or), !(not)  ---->


&& -> IF both operands on left n right are true -> true

A && B

IF A -> false, Will B be evaluated ? No
If A -> true, then, B is evaluated ? Yes


var dummy = true && "sha";
var dummy1 = true && false;
var dummy3 = true && 20;
var dummy4 = true && 0;

-> IF Left operand is true, then, return right Operand
 here,Left operand needs to be of type Boolean and if it is not, then 
 implicity Javascript will convert it to Boolean via Boolean() constructor


 || (OR) ->

 -> IF Left operand is true, then, return Left Operand else return RIGHT OPERAND


 -----------------------------------------

 Assignment operators :

 =
 += a=a+2
 -= a=a-2
 *= a=a*2;
 /=
 %=
 **=

----------------------------------------

Precedence & Associativity :

3 + 2 * 5;

-----------------
option 1
(3 + 2) * 5 OR 

option 2
3 + (2 * 5);

----

option2 ------
got selected

---------------------------

var a = 3 + 2 * 5;

3 + 2 * 5 = var a; ??????????

Each operator in any lang. have its own Associativity.
There are 2 types - left associative & right associative

OPERAOTR - 

= -> Either flow will be from left to right or from right to left



-------------------------

var a = 3 + 2 * 5;

Step 1 : First it checks operators who have highest precedence.
Step 2 : Then, executes them according to their associatvity
Step 3 : Then, again repeat Step 1.


20 + 40 + sumOfTwonumber(20,30) * 50 + b++ + 2**4;


var a = b = 20;

var a = 20 + 2 + 3;


-----------------------------

Scope ->

Local vs Global

Local scope ->

if any variable is defined inside function, then, that variable can only be
accessed inside that function

global Scope ->

if any variable is defined globally, then, it is accessible to every function.


------------------------------------------------

FUNCTION -

Syntax 1 :
Function declaration
function <FUCTION_NAME>() {

}


Syntax 2 :
Function expression

2.1 ->
NAMED FUNCTIONS
var <VARIABLE_NAME> = function <FUCTION_NAME>() {
......
....
}

2.2 ->
Anonymous FUNCTIONs

var <VARIABLE_NAME> = function() {
......
}


3 ->

IIFE (immediately invoked function expression) :

Requirmnent ->
I want function to be executed immediately but also it should execute only once!

Syntax :

(
    function() {
        ...
    }
)();

4. Arrow Functions (ES6). - TBD

---------------------------------------------------------------

How JS Works ?

Javascript is single threaded, synchronous -> 

that means only 1 statement can execute at a time.

Execution Context :
Whenever JS Script is ran, execution context is created for each
FUNCTION INVOCATION/CALL.

By default, there is a Global Execution Context created whenever our code is executed.

Execution context is made of 2 phases :
1. Memory creation
2. Execution phase


1. Memory Creation :

Memory is allocated to each object and function(internally functions are also objects)

eg :

function sum() {
    var result = 10 + 20;
    console.log(result);
    return result;
}

var name = "Sharad";

Here, sum and name needs to be allocated memory.

Once memory is allocated, JS will assign default values to them!
For variables, default value is undefined.
For functions, default value -> whole function body is copy/pasted.


---------------------

by Value vs by Reference :

In JS, Objects & arrays (bascially objects only) are references while
primitives (number, boolean, string, etc) are treated as values.

int arr[];



---------------

Hoisting :

Ability to access variables/functions even before their declaration.
Internally, there is no magic. This is how JS Execution Context works and due to which, this kind of phenomenon is seen.

-----------------

ES6 Variable Constructs : (Es6 ~ Es2015 ~ features introduced in 2015 in JS )

let, const ->

Both keywords are used for declaring variables.

let -> 

var title = "sharad";

vs 

let title = "sharad";

Difference ?
w.r.t SCOPE .

var is FUNCTION SCOPED whereas let is BLOCK SCOPED.

FUNCTION SCOPED -> anything defined inside "function" keyword will be visible in that 
                    function only.

Block Scoped -> anything defined inside blocks i.e. opening block{ and closing block }.
                it will be visible inside these brackets only. 


const ->

Its behaviour is exactly same as let, only diff. being -> it cannot be reassigned.

Any implications w.r.t HOISTING ?

var -> variables declared with var are hoisted. i.e. it can be accessed before declaration

let, const -> looks like variables declared with var are not hoisted.But in reality,
                JS works the same (i.e. Execution context - memory allocation phase happens for these variables also). That means memory is allocated to 
                these variables TOO! but they still cannot be accessed due to TDZ 
                (Temporal Dead Zone)


-----------------------------------------

Loops : (already taught/students aware)

1. while
2. do...while
3. for 
4. switch case 
5. if... else
6. if ...else if...else
7. break continue


--------------------------------------------

parseInt/parseFloat

parseInt ->

Number("23sharad") -> NaN (not a number)
parseInt("23sharad") -> 23

note :

parseInt("sharad25") -> NaN 
i.e. only when digits are present in the begining, it is able to extract.


Number System -

 010111
 2847

 2847 -> 10
 
parseFloat -> 
Same rules as parseInt, only parsing changes to float.


---------------------------------------------------


OBJECTS :

var obj = {
    KEY: VALUE
}

let obj = {
    KEY: VALUE
}

const obj = {
    KEY: VALUE
}

here, KEY can be string or SYMBOL
whereas value can be anything

Also, KEY needs to be unique.

let obj = {
    title: "Sharad",
    age: 28
}

How to Access - 

Dot Notation - .

Bracket notation - []


Bracket preferred/only option when ->

There is a space between Key names
When we want to access some values of Object with dynamic KEYs


Delete any property of Object :

delete <OBJECT_NAME>[KEY_NAME]

------------------------------------------

Shorthand syntax :

let obj = {
    title: "sharad"
}

OR

let title1 = "sharad";

let obj = {
    title: title1
}

OR

let title = "sharad";

let obj = {
    title
}

-----------------------------------------

let person1 = {
    name: "Sharad",
    age: 28,
}

let person2 = {
    name: "Ritesh",
    age: 32
}

let person3 = {
    name: "Akhil",
    age: 43
}

let person4 = {
    name: "Tina",
    age: 34
}


function Person(name,age) {
    this.name = name;
    this.age = age;
}



let person1 = new Person("Sharad", 28);



new -> 

    Creates object  ->  {} 
    Points "this" to newly created object  -> this = {};
    Returns newly created object

Whenever inside the function, we want to fill certain details in the newly
created object. We can use "this" keyword for that.






here, new -> creates new object and assigns that newly created object to THIS variable
            and it returns newly created object.

    this -> it acts as a placeholder variable name for this newly created object 

    this keyword always point to some Entity of JS.
    example : globally, it will point to WINDOW OBJECT.
                creating objects via FUNCTION CONSTRUCTOR, this points to newly created object.


----------------------------------------------

Symbol -

primitive type.
used to generate unique values.

Syntax :

Symbol(<NAME_DESCRIPTOR>)

even if NAME_DESCRIPTOR is same, then, also Symbol constructor will return different/
unique Symbol value.

Symobl('sharad') -> returns Symbol value or Symbol. (which is always unique).

Usecase :

Primarily used as KEYS of objects, since KEYS always have to be unqiue. 
Hence, creating KEYS of object with Symbol instead of String will help avoid KEY 
DUPLICATION.

Note :

In order to avoid uniqueness i.e. if NAME_DESCRIPTOR is same, then, Symbol value
should also be the same! -> Symbol.for(<NAME_DESCRIPTOR>)


-----------------------------------------------

Checking if key is present on Object or not ?


in keyword :

<KEY_NAME> in <OBJECT_NAME>

hasOwnProperty :

<OBJECT>.hasOwnProperty(<KEY_NAME>)

------------------------------------------------

Methods :

Syntax 1: 
let obj = {
    title: "Sharad",
    age: 29,
    showTitle: function() {
        console.log("Hi. this is a function");
    }
}

syntax 2:
let obj = {
    title: "Sharad",
    age: 29,
    showTitle() {
        console.log("Hi. this is a function");
    }
}

Getters & Setters :

Any method inside object can be termed as getter or setter 
via keywords "get" and "set".

While calling these getter/setter methods, () should not be used.

let person = {
    title: "Sharad",

    get getTitle() {
        // can do anything but generally used to fetch object properties
        return this.title;
    },

    set setTitle(name) {
        this.title = name;
    }
}

person.setTitle = "Ankit";


-----------------------------------------------

Loops :

for 
while
do..while

for..in
for..of
forEach


-----------------------------

DOM (Document object model) :

Interface/bridge between js and html/css.

Whole document (i.e. html page) represented in the form of Js Object.

Object is available globally and named as "document".
It is a part of global window object also. (window.document).

Now,
Any JS Object consists of properties and methods.

Under document object, we will use certain methods to interact 
with our html page.

1. getElementById -> Input is <ID_NAME> -> Output is HTMLELEMENT is found and null if no html element with given id is found


2. getElementsByClassName -> Input is <CLASSNAME> -> 
Output is -> HTMLCollectionOf<Element> (array of elements but not completely true)

3. getElementsByTagName -> Input is <TAG_NAME> -> 
Output is -> HTMLCollectionOf<Element> (array of elements but not completely true)

4. querySelector -> Input is <CSS_SELECTOR> -> Output is -> <Element> or null

Note : querySelector always returns single element, if more than
one element matchesm, then, element that comes first, will be returned by this method. (TOP to Bottom manner).

5. querySelectorAll -> Input is <CSS_SELECTOR> -> Output is -> NodeListOf<Element>
(array of elements but not completely true)
 or null

All the above methods of document object are for -> 
to get hold of particular html element.

This is similar to CSS Selectors where we used to catch hold of
particular html elements.
eg : ID selector (#<ID>), Class selector (.<CLASSNAME>),
Tag selector (<TAG_NAME>).

------------------------------------

How To add/create HTML element via JS and ADD to HTML page ?



------------------------------------


Transform :

Translate
scale
rotate

------------------------------------

Script tag -

defer vs async 

Defer suits in situations -> where javascript file is interacting with DOM
async suits in situations -> where javascript file is not interacting with DOM INITIALLY.

In Defer, there is a guarenttee of order of execution whereas in async there is no guarnttee

---------------------------------------


Call, bind, apply

If we want to change CONTEXT of THIS variable inside methods.
We can do that with the help of methods called - call(), apply(), bind()

let obj = {
    name: "Sharad",
    age: 28,
    printName: function() {
        console.log(this.name);
    }
}

// here, this points to obj object. 
Now, we want "this" to point towards some other object.
eg :

let obj2 = {
    name: "Trikha"
}

Basically we want "this" inside printName method of obj to point to "obj2" rather
than "obj"

obj.printName() -> this will point to obj
but i want to perform some magic that it should start pointing to obj2


Basically we want to change CONTEXT of this i.e. we want to change - where this is pointing to ?

To do that, there 3 methods - call,apply,bind.

call ->

<FUNCTION>.call(<VARIABLE_THAT_YOU_WANT_THIS_TO_POINT_TOWARDS>, <INPUT1_for_the_called_function>, <INPUT2_for_the_called_function>,.........);

apply -> 

<FUNCTION>.apply(<VARIABLE_THAT_YOU_WANT_THIS_TO_POINT_TOWARDS>, ARRAY<INPUT1, INPUT2,...........>);


Bind -> 

Bind also changes context of this but its different from call and apply in the sense...that incase of bind...function is not executed immediately.

Bind method -> returns a function with context of "this" changed.


<FUNCTION>.bind(<VARIABLE_THAT_YOU_WANT_THIS_TO_POINT_TOWARDS>) 

bind method returns new FUNCTION with new context of "this".
i.e. we can call the function at a LATER STAGE whenever it is required.


TODO Questions for this week (17/10 - 21/10) : (in class)

1. Word highlighter
2. Array merger 
3. Search through the Bill (Group Contest: April '21) - ????
4. GRE Essay Tool - done

Todo questions for (24/10 - 28/10)

1. Bubble Sort visualizer
2. Movie Booking JS
3. 


Object creation :

new -> constructor function
object literal -> " "
new Object()


Object.create -> 

if you want to inherit some properties of existing object while creating new object


var vegetable = { 
    status: "Healthy"
}

// Parent

now, lets create new TYPE of Vegetable called - brocolli.
Since, brocolli is TYPE of Vegetable then it means should be inherit all the
PROPERTIES of Vegetable ......

This is somewhat tending towards INHERITANCE i.e. child inheriting properties of 
parent.

var brocolli = Object.create(vegetable);

As soon as we did that, brocolli object got created but there is no property called "status" directly attached to brocolli.
Then, there is one random object [[PROTOTYPE]]: Object inside which "status"
property resides.

Now, Whenever we use DOT operator to reference some property inside object.
How Javascript behaves ?
it behaves like ->
First JS will check or look out for that property at TOP most level.
Then, 
IF found -> it returns value from there.
If not found -> it continues its search in there [[PROTOTYPE]] : Object.

By Default, whenever we create any object in Javasccript...this newly created
object inherits some of the properties and methods from OBJECT



var obj = {
    name: "sharad",
    age: 28
}

Object.keys(obj) -> [name,age]
Object.values(obj) -> ["sharad", 28]
Object.entries(obj) -> [["name", "sharad"], []];

for..in ->
Enumerable properties of object :

Any object in JS that has properties. 
Here, we can attach some behaviours (writable, enumerable) to these properties.
Enumerable can be set to true or false on each PROPERTY of an OBJECT.

var person = {
    name: "sharad",
    age: 28,
}

Now, we want to add 1 property to this object "person", but whenever any1 tries to
iterate over this object...then...that property should not be visible during iteration


Whenever we create properties of an object via literals, then, enumerable flag is automatically set to TRUE. i.e. these properties can be iterated over loops 
like for..in and they are also present in OBject.keys.

But if you want to explicitly change enumerable flag to false for some property
of an object.
It can be done with the help of ->
Object.defineProperty()

Syntax:

Object.defineProperty(<OBJECT_WHERE_PROPERTY_NEEDS_TO_BE_DEFINED>, <KEY_NAME>, {
    // descriptor i.e. 3rd arg. is an object that describes the value along with enumerable flag
    <VALUE>: <WHATEVER_VALUE_YOU_WANT_TO_ASSIGN>,
    <enumerable>: <BOOLEAN> if set to false -> this property won't be present during iteration of object and also, not present during Object.keys.
})

To check whether property is enumerable or not -->
<OBJECT_NAME>.propertyIsEnumerable(<PROPERTY_NAME>)

To check whether property is of own or Inherited --->

<OBJECT_NAME>.hasOwnProperty(<PROPERTY_NAME>)


for..in loop ->

Iterates over ENUMERABLE STRING Properties only.

var person = {
    name: "",
    age: "",
    printMyName: function() {
        //
    }
}

now, from above we understand that iterating over name, age might make sense
for some programming logic....why to waste 1 iteration over printmyName ?



PROTOTYPES :

Every object in Javascript contains 1 property popularly known as "Prototype".
"Prototype" property itself is an "OBJECT".

Since "Prototype" property is available on every object in JS and in this "PROTOTYPE" property, (which is an object itself) contains certain properties/methods which can be used directly via DOT operator.

By Default, whenever we create any object in Javasccript...this newly created
object inherits some of the properties and methods from OBJECT

----------->

now, "Prototype" property of any object is referred by a key called "__proto__".
__proto__ -> here, generally whenever "_" is prefixed on any property name, it signifies that 
it is a internal property and it should NOT be used

var obj = {
    KEY: VALUE,
    [[PROTOTYPE]]: OBJECT
}

[[PROTOTYPE]] -> __proto__

Now, whenever we are accessing obj.__proto__ -> 
We are getting OBJECT in return.
this object is nothing but VALUE of PROTOTYPE OBJECT.

Inheritance :

Acquiring properties/behaviour from some other entity.
In Javascript, it implies acquiring properties/methods of some object.

var obj1 = {
    name: "Sharad"
}

obj1 needs to have these methods by default :

1. toString
2. valueOf

Now, in order to have these methods bydefault to every object created in Javascript,
we make use of Prototype Inheritance.

In Class based lang., Inheritance works differently.
ie.
class Parent {
    // properties

    // methods
}


class Child extends Parent {
    // implement or overrides
}

Now, In javascript which is a "OBJECT BASED" language. Inheritance is done via Prototypes.
i.e. All the properties/methods which are to be inherited are added to the "PROTOTYPE" property of the object.

Function's Prototype :

Every Function constructor in JS have one property called "prototype".



How does Prototype inheritance implemented ?

1 Wrong/discouraged way :

Directly changing __proto__ property of object.

let obj1 = {
    title: "Sharad1"
}

let obj2 = {
    title: "Sharad2"
}

obj2.__proto__ = obj1;

2 Right ways :

Using Object.create : 

let obj1 = {
    title: "sharad1"
}

let obj2 = Object.create(obj1);
obj2.title = "Sharad2"


eg :
Lets create PARENT object called "person" and implement certain methods specific to a person.

let person = {
    
    canWalk: function(){
        console.log("Person can walk");
    },
    canTalk: function() {
        console.log("Person can talk");
    }
}

Now, lets create object representing specific person called "sharad". Now, since sharad is a "type" of
PERSON. So, "sharad" would like to INHERIT properties/methods of PERSON. 

let personSharad = Object.create(person);
// Above line creates an empty object with "PROTOTYPE" property of this empty object set to/point to person object.

personSharad.title = "sharad";


Using Constructor Function :


const Person = function(name) {

    this.title = name;
    this.canWalk = function() {
        console.log("Person can walk");
    };
    this.canTalk = function() {
        console.log("Person can talk");
    }
}

const p1 = new Person("sharad");

Here, everything we wanted to achieve is done.
Also, it looks like there is no need of inheritance.
But there is a issue here :

Whenever object gets created via "new" keyowrd...
All the properties inside Object gets memory allocated.
Here, properties can be of type - number, boolean, object, functions...etc
But issue here is...
Common Behaviours/methods like canTalk, canWalk are given MEMORY on each object INSTANTIATION.

To mitigate that, we can make use of "prototype" property of Function constructor.
i.e. All the functionality/methods/properties which are common to every instance can be put inside
"prototype" property.

example: 


const Person = function(name) {
    this.title = name;
}


Person.prototype.canWalk = function() {
     console.log("Person can walk");
}

Person.prototype.canTalk = function() {
        console.log("Person can talk");
}
------------------

conclusion :

Object.create(<WHATEVER_YOU_WANT_NEW_OBJECT_PROTOTYPE_TO_POINT_TO>)

<FUNCTION_CONSTRUCTOR_NAME>.prototype.<KEY> = <WHATEVER_YOU_WANT_NEW_OBJECT_PROTOTYPE_TO_POINT_TO>

Confusion creating terms :

__proto__
prototype
[[PROTOTYPE]]

Confusion creating statements :

Object.prototype equal to obj.__proto__

Prototype Chain ->

Every object have one property called "Prototype".
This property is itself an object, thereby, again having property called "PROTOTYPE".....
this goes on...till the value of "PROTOTYPE" is null.
This chain of PROTOTYPES..is nothing but "Prototype Chain".


--------------------------------------------------------------

Javascript String :

In JS, String can act as primitive as well as Object.
Largely, convention is if string is created with Literals, it act as primitive.
If created with new String() -> then it acts as Object.(non-primitive).

Whenever we use DOT Operator on string primitive, we are still able to access properties/methods -> because In javascript, coercion happens i.e. implict 
type conversion happens due to which String Primitive is converted to String Object.

Property :

1. length property :
In string, we have length property avaiable to us which counts number of characters
in a string and returns that number....
Note: This is not exactly true

Methods :

1. Retrieving specific character via index :

string[index]

2. Test if string contains substring or not :


i want to check whether str2 exists inside str1 or not 
let str1 = "Hello world";
let str2 = "Hello";

-> <PARENT_STRING>.includes(<SUBSTRING_YOU_WANT_TO_SEARCH>) -> returns boolean value
true -> if substring is present in parent string
false -> if not present

-> endsWith()->  return boolean value (true if present, false if absent)
-> startsWith() ->  return boolean value (true if present, false if absent)
All of them are CASE SENSITIVE.


Find position of Substring in string :

indexOf() -> returns index from where substring starts..
If not found..it returns -1.


Extracting substring :

slice(<START_INDEX>, <END_INDEX>) ->

If <END_INDEX> is not given, then, it will return whole string starting from <START_INDEX>.

Here, 
<START_INDEX> -> Character at start_index is included whereas
<END_INDEX> -> Character at end_index is excluded


Changing case :

toUpperCase()
toLowerCase()

Update some parts of a string :

replace(<SEARCH_VALUE>, <STRING_TO_BE_REPLACED_WITH>) -> returns new string


Method Chaining : 

let str1 = "Hello world. World is so awesome.";
str1.toLowerCase().replaceAll("world", "Sharad");

Above line is calling 2 methods -
1. toLowerCase()
2. replaceAll()

One way to write it as :
let str2 = str1.toLowerCase();
let str3 = str2.replaceAll("world", "Sharad");

But this can be done in a shorter syntax without declaring too many variables :

str1.toLowerCase().replaceAll("world", "Sharad");

Trim :

Remove whitespace from the start n end.
.trim()

charAt and charCodeAt

Conversion of STRING to ARRAY :

let str1 = "Hello world";
we need to convert to Array ["Hello", "World"].

-> split() method :

it takes input 1 RegEx or matching expression and based on it SPLITS characters into
array.


-----------------------

ARRAYS :

const arr = new Array();
const arr = [1,2,3];

CONVERT ARRAY to STRING :

join(<SEPARATOR>) -> returns String

Search Index of an element of array :

indexOf(<ARRAY_ELEMENT_TO_BE_SEARCHED>)
if found returns index of that element otherwise -1

Check whether element exist or not :

.includes(ARRAY_ELEMENT_TO_BE_SEARCHED) -> returns boolean

Add element To the end of Array:

.push(<ARRAY_ELEMENT_TO_BE_ADDED>)

Add Element to The begining of Array :
.unshift(<ARRAY_ELEMENT_TO_BE_ADDED>)


Remove element from the end of Array :

.pop() -> Returns removed element

Remove element from the start of array :

.shift() -> Returns removed element


-----------------------

Deleting elements of an array and also, modify the existing array
Syntax: 
.splice(start_index, delete_count, add_item1, add_item2,..........)

here, start_index is INCLUDED

Returns :

All the removed elements in an array

Simplest form :

.splice(start_index)



eg :
let arr = ["sharad", "newton", "placement", "java", "js", "css"];
I want to remove all the elements after "sharad" :

arr.splice(1) ->

Important point here is..that it changes (OR MUTATES) the existing array itself.


Now, 
I want to remove elements from 1st index and only want to delete 2 elements from there and at the sametime, I want to ADD 2 new elements to this array.

eg :
let arr = ["sharad", "newton", "placement", "java", "js", "css"];
arr.splice(1,2, "random1", "random2");


-------------------------------------

Higher Order Functions ?

function abc(def) {
    def()
};

here, what is abc and what is def ?
abc -> Higher order function i.e. if a function accepts any function as input or 
        returns function ... then...that function is termed as higher order function.

def -> callback Function -> function that might not be called immediately (implicitly) or any function which is called inside a function (not invoked explicitly).


------------------------------------

Iterate 

forEach loop :

Invokes a callback for every element in an array.

const arr = [10,20,30,40,50];

arr.forEach(<CALLBACK_FUNCTION>)
where <CALLBACK_FUNCTION> will be executed for every element in an array.
This <CALLBACK_FUNCTION> is supplied with certain inputs like -
current_element of array, index, array.

----------------------------------------

Sorting Array :

const arr = ["newton", "gryfinndor", "placement", "sureshot"];

Sort array based on Alphabets:

arr.sort() -> Returns SORTED ARRAY and also, it changes the SOURCE ARRAY
on which it was used i.e. it MUTATES original array

It works well on array of strings since internally ASCII are compared.
Note :
Incase, to avoid Capitalization issues either convert to lowercase or uppercase.


But it does not work well incase of numbers.
eg - const arr = [22,222, 2222, 99];

Becuase internally, these numbers are converted to Strings and then, these are compared and since Strings are compared based on aSCII value.
Such problem arise!

To fix this, we can give own implementation of compare function.
i.e. sort method accepts callback function as argument that can help sort the elements of an array.



arr.sort(<CALLBACK_FUNCTION>)

<CALLBACK_FUNCTION> gets 2 elements as arguments. These elements are elements of array only.

RETURN VALUE :

<CALLBACK_FUNCTION> can return 3 values :-

a-b -> Here, a represents first value and b -> second value

if first_value - second_value is negative -> then, it means first_value was smaller

1. NEGATIVE : if it is negative, then, a is sorted before b
2. POSITIVE

function compare(a,b) {
    return a-b;
}

Code trace :

const arr = [22,222,99];
function compare(a,b) {
    console.log(`compare ${a} with ${b}`)
    return a-b;
}

1st iteration :

compare -> 22, 222

22 - 222 -> NEGATIVE

means ______________ first value was smaller -> Don't swap...


2nd iteration :

compare -> 222, 99

222 - 99 -> POSITIVe

means _____________ first value was larger -> Swap..
99,222


->
22,99,222


----------------------------------------------------

Merge Array :

concat Method -

<ARRAY1>.concat(<ARRAY2>)



-----------------------------------------------------

filter, map, reduce :


Higher order functions
Callback functions

Here, filter, map, reduce are higher order functions.
All 3 of them, take callback function as input.
Like all the methods, these methods are also chainable.

filter :

filter method as the name suggest is used to filter elements of an array
based on some CONDITION (that means based on boolean value).

const arr = [10,20,40,500,1000];


Requirement :
Filter out/Remove all the elements whose value is greater than 100 from above array.

INPUT - [10,20,40,500,1000]
OUTPUT - [10,20,40]

arr.filter(<CALLBACK_FUNC>)

Here, <CALLBACK_FUNC> needs to return true or false...
BASED on that, element will be added or removed.

RETURN Type :
filter() method returns new array of elements (which satisfy the condition written
 inside callback function)

--------------------

map :

It is used to alter/change elements of an array.

eg :

const arr = [10,20,30];

Requirement :

Multiply every element by 2 and store it in a new array.


----------------------

const arr = [10,20,30,40,50,200,300,400,500];

Requirement :

FILTER array only having elements having value less than 100 AND
After that, multiply remaining elements by 3 ....
Finally return the new array.

arr.filter(function(elem) {
    return elem < 100
}).map(function(element) {
    return element * 3
})



------------------------

reduce() method :

It is used whenever we want to iterate over array but need to conclude in a single value.

eg :
const arr = [20,30,40,50];

Req: 
Sum of all elements ?

Syntax :

arr.reduce(<CALLBACK>, <INITIAL_VALUE>);

Here <CALLBACK> gets 2 important inputs..these are different from callbacks of 
forEach, map, filter.
Here, 1st input is generally termed as ACCUMULATOR.
2nd input is termed as CURRENT_VALUE (is the element value we get on each iteration i.e. it is same as 1st argument of callbacks of filter,map)

If <INITIAL_VALUE> is not set, then, it assigns first element of array into ACCUMULATOR and starts looping from 1st index of array and CURRENT_VALUE is assigned as arr[1]