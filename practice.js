//We're in a job interview. Answer the following questions (try to not look at your notes unless you have to).
  // 1) What is the purpose of the 'this keyword'?

      /*'This' points to or references a specific object. 'This' can be used in constructor functions,
      object definitions, and can be used by call, apply, and bind to have other functions reference a specific object.*/

  // 2) What are the four rules that govern what the 'this keyword' is bound to and describe each?

      /*1. 'This' points to the window object as a default.
      2. 'This' can be implicity defined.
      3. 'This' can be explicity defined.
      4. 'This' points to an object left of a '.'*/

  // 3) What is the difference between call and apply?

      //Call references an object and its paramenters while apply references an object and an array.

  // 4) What does .bind do?

      //.bind points a function to a specific object called within .binds parameters.


//Next Problem

//Create an object called user which has the following properties.
  //username --> which is a string
  //email --> which is a string
  //getUsername --> which is a function that returns the current object's username property. *Don't use 'user' instead use the 'this' keyword*

   var user = {
    username: 'nlahoti',
    email: 'nlahoti@gmail.com',
    getUsername: function() {
      return this.username;
    }
   };

//Now, invoke the getUsername method and verify you got the username of the object and not anything else.

  user.getUsername();

//Next Problem


// Write the function definitions which will make the following function invocations function properly.

var Car = function(type, model, year) {
  this.type = type;
  this.model = model;
  this.year = year;
  this.move = 0;
  this.moveCar = function() {
    return this.move += 10;
  }
}

var prius = new Car('Toyota', 'Prius', 2011);
var mustang = new Car('Ford', 'Mustang', 2013);

prius.moveCar(); //increments prius' move property by 10. Returns the new move property.
mustang.moveCar(); //increments mustang' move property by 10. Returns the new move property.

//Hint, you'll need to write a moveCar function which is added to every object that is being returned from the Car function. 
//You'll also need to use the 'this' keyword properly in order to make sure you're invoking moveCar on the right object (prius vs mustang).

//Continuation of previous problem

var getYear = function(){
  return this.year;
};

//Above you're given the getYear function. Using your prius and mustang objects from above, use the proper syntax that will allow for you to 
//call the getYear function with the prius then the mustang objects being the focal objects. 
//*Don't add getYear as a property on both objects*.

//Note(no tests)

getYear.call(prius);
getYear.call(mustang);


//New Problem



var myUser = {
  username: 'iliketurtles',
  age: 13,
  email: 'iliketurtles@gmail.com'
};

var getMyUsername = function(){
  console.log(this.username);
};

setTimeout(function() {getMyUsername.call(myUser)}, 5000);

//Above you're given an object, a function, and a setTimeout invocation. After 5 seconds, what will the getUsername function return?
//Note(no tests)
  //The getMyUsername function will return either undefined, null, or 1 considering its scope. It doesn't connect back to the myUser
  //object - 'this' can only be called within the object definiton.

//In the example above, what is the 'this keyword' bound to when getUsername runs?

  //This is pointing to the window object.

//Fix the setTimeout invocation so that the user object will be the focal object when getUsername is ran.
