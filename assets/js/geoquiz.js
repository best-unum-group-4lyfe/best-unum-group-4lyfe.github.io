var pos = 0, test, test_status, question, choice, choices, chA, chB, chC, chD, correct = 0;
var questions = [
  ["Which point is the reflection of the point (–7, 5) over the line y = –x ?", "(-7,5)", "(-5,7)", "(5,–7)", "(7,-5)", "B"],
  ["Which one of these is a quadrilateral ?", "Rectangle", "Square", "Parallelogram", "All of the above", "D"],
  ["What are the classifications of a parallelogram ?", "Two sets of congruent sides", "Opposite angles are congruent", "Adjacent angles are supplementary", "All of the above", "D"],
  ["The sugar in sweet tea is a:", "Solevent", "Concentrate", "Colloid", "Solute", "D"],
  ["What model introduced the nucleus ?", "Dalton's Model", "Bohr Model", "Rutherford Model", "Thomson's model", "C"],
  ["In which direction does atomic size increase on the periodic table ?", "Up,Right", "Up,Left", "Down,Right", "Down,Left", "D"],
  ["Can a compound be separated by physical means ?", "Yes", "No", "Only under extreme pressure", "None of the above", "B"],
  ["What atom model resembles the Solar System ?", "Dalton's Model", "Bohr Model", "Rutherford Model", "Thomson's model", "B"],
  ["What groups are transition metals in ?", "3-12", "4-13", "2-11", "1-10", "A"],
  ["What’s the smallest form of matter that retains its properties?", "Quarq", "Electron", "Atom", "Molecule", "C"],
  ];
function get(x){
  return document.getElementById(x);
}
function renderQuestion(){
  test = get("test");
  if(pos >= questions.length){
    test.innerHTML = "<h2>You got "+correct+" of "+questions.length+" questions correct</h2>";
    get("test_status").innerHTML = "Test completed";
    // resets the variable to allow users to restart the test
    pos = 0;
    correct = 0;
    // stops rest of renderQuestion function running when test is completed
    return false;
  }
  get("test_status").innerHTML = "Question "+(pos+1)+" of "+questions.length;
  question = questions[pos][0];
  chA = questions[pos][1];
  chB = questions[pos][2];
  chC = questions[pos][3];
  chD = questions[pos][4];
  test.innerHTML = "<h3>"+question+"</h3>";
  // the += appends to the data we started on the line above
  test.innerHTML += "<input type='radio' name='choices' value='A'> "+chA+"<br>";
  test.innerHTML += "<input type='radio' name='choices' value='B'> "+chB+"<br>";
  test.innerHTML += "<input type='radio' name='choices' value='C'> "+chC+"<br>";
  test.innerHTML += "<input type='radio' name='choices' value='D'> "+chD+"<br><br>";
  test.innerHTML += "<button onclick='checkAnswer()'>Submit Answer</button>";
  //modal
}
function checkAnswer(){
  // use getElementsByName because we have an array which it will loop through
  choices = document.getElementsByName("choices");
  for(var i=0; i<choices.length; i++){
    if(choices[i].checked){
      choice = choices[i].value;
    }
  }
  // checks if answer matches the correct choice
  if(choice == questions[pos][5]){
    //each time there is a correct answer this value increases
    correct++;
  } else {
    window.alert("Wrong Answer");
  }
  // changes position of which character user is on
  pos++;
  // then the renderQuestion function runs again to go to next question
  renderQuestion();
}
window.addEventListener("load", renderQuestion, false);
