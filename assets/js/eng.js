var pos = 0, test, test_status, question, choice, choices, chA, chB, chC, chD, correct = 0;
var questions = [
  ["John went to the store to get some food for the game.", "Full Sentence", "Fragment", "", "", "A"],
  ["Went to play baseball", "Full Sentence", "Fragment", "", "", "B"],
  ["The London Bridge, as well as several other bridges, (spans, span) the Thames River.", "Spans", "Span", "", "", "A"],
  ["The paper in those boxes (is, are) for the copy machine.", "Is", "Are", "", "", "B"],
  ["Driving a car is fast and comfortable, riding the bicycle is better for one's health.", "Driving a car is fast and comfortable, but riding a bicycle is better for one's health.", "Driving a car is fast and comfortable riding a bicycle is better for one's health.", "Although driving a car is fast and comfortable riding a bike is better for one's health.", "", "A"],
  ["Select the sentence that uses colons correctly.", "We knew who would win the game: the Eagles.", "Barry wanted to know why I didn’t respond to his:text I hadn’t received it.", "This house has everything I need two bedrooms: a backyard and a garage.", "None of the above", "A"],
  ["Choose the sentence that correctly show the use of a semicolon.", "She was not prepared for an overnight stay; that is, she had not brought a change of clothes.", "She was not prepared for an overnight stay: that is; she had not brought a change of clothes.", "She was not prepared for an overnight stay, that is she had not brought a change of clothes.", "She was not prepared for an overnight stay, that is; she had not brought a change of clothes.", "A"],
  ["John is always late for work, nobody seems to care.", "Comma Splice", "Complete Sentence", "", "", "A"],
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
