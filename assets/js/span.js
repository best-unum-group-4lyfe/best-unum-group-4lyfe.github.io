var pos = 0, test, test_status, question, choice, choices, chA, chB, chC, chD, correct = 0;
var questions = [
  ["If a spanish word ends in -o it is typically ____", "Feminine", "Direct", "A Noun", "Masculine", "D"],
  ["If you want to change a singular word ending in -e to plural the you add/change ___.", "S", "E to C and add Es", "Es", "The last letter to the first letter and add zes to it", "A"],
  ["What gender is the default gender in the spanish language ?", "Masculine", "Spanish isn’t gendered", "There isn’t a default", "Feminine", "A"],
  ["What is the unchanged/unmodified form of a verb called ?", "Indifferent", "Unaltered", "Infinitive", "Unoriginal", "C"],
  ["What is the Spanish word for plus ?", "Mas", "Es", "Menos", "Más", "D"],
  ["Finish the problem (in spanish).  “siete menos seis...”", "Es uno", "Son un", "Son uno", "Es un", "A"],
  ["During which step of the SER process do you drop the last original two letters of a verb ?", "First", "Second", "Third", "Fourth", "A"],
  ["Which one of these letter pairs is not one that ends regular spanish verbs ?", "AR", "OR", "ER", "IR", "B"],
  ["In the Spanish language, what part of the date follows the Month when saying or writing the date ?", "The Day", "The Year", "The Current Time", "1-10", "B"],
  ["Translate into Spanish: July twenty third two thousand two", "El Julio de veintitrés dos mil dos", "El veintitrés de Julio dos mil dos", "El de veintitrés Julio dos mil", " El de Julio veintitrés dos mil", "B"],
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
