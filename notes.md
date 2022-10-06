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

TBD



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














