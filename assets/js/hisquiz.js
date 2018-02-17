//modal ?
var pos = 0, test, test_status, question, choice, choices, chA, chB, chC, chD, correct = 0;
var questions = [
  ["What was the treaty that ended WWI that laid some of the unrest that would later explode into WWII?", "Geneva Conference", "Treaty of Versailles", "Paris Peace Accords", "Treaty of Brest-Litovs", "B", "Though nearly thirty nations participated, the representatives of the United Kingdom, France, the United States, and Italy became known as the “Big Four.” The “Big Four” dominated the proceedings that led to the formulation of the Treaty of Versailles, a treaty that ended World War I.", "The Paris Peace Conference and the Treaty of Versailles https://history.state.gov, Office of the Historian Bureau of Public Affairs, n.d., Internet Source, 2/6/18",],
  ["The British Expeditionary Force was made to evacuate France in 1940 through the French port of:", "Dunkirk", "Antwerp", "Le Rochelle", "Calais", "A", "While soldiers fought tenaciously to hold back advancing German troops, the Royal Air Force (RAF) battled to protect the vulnerable ships and the soldiers waiting at the harbour and on the beaches from attacks by the Luftwaffe. Fighting continued until the last moments with French troops remaining behind to safeguard the last to leave.", "THE DUNKIRK EVACUATION, https://www.cwgc.org, Commonwealth War Graves Commision, 2018, Internet Source, 2/6/18",],
  ["The Baby Boom refers to the rise in ____________ after World War II.", "Taxes", "Death rates of babies", "Childhood diseases", "Birth rates and family growth", "D", "Following World War II, the United States experienced a greatly elevated birth rate, adding on average 4.24 million new babies to the population every year between 1946 and 1964.This generation of baby boomers was the result of a strong postwar economy, in which Americans felt confident they would be able to support a larger number of children. Boomers also influenced the economy as a core marketing demographic for products tied to their age group, from toys to records. Constituting as much as 40% of the American population, baby boomers have exerted a strong pull on American culture at large, particularly during the social movements of the 1960s.", "The baby boom, https://www.khanacademy.org, 2018 Khan Academy, Internet Source, 2/12/18",],
  ["What American military base was bombed By the Japanese on “a day that will live in infamy…”?", "Bay of Pigs", "Fort Lauderdale", "Dresden", "Pearl Harbor", "D", "The bombing [of pearl harbor] killed more than 2,300 Americans. It completely destroyed the American battleship U.S.S. Arizona and capsized the U.S.S. Oklahoma. The attack sank or beached a total of twelve ships and damaged nine others. 160 aircraft were destroyed and 150 others damaged. The attack took the country by surprise, especially the ill-prepared Pearl Harbor base.", "The Japanese Attacked Pearl Harbor December 7, 1941, www.americaslibrary.gov, Library of Congress, n.d., Internet Source, 2/6/18",],
  ["The firebombing of this German town was a major civilian tragedy during the war.", "Dusseldorf", "Dresden", "Stutgaart", "Frankfurt", "B", "Victor Gregg, a British para captured at Arnhem, was a prisoner of war in Dresden that night who was ordered to help with the clear up. In a 2014 BBC interview he recalled the hunt for survivors after the apocalyptic firestorm. In one incident, it took his team seven hours to get into a 1,000-person air-raid shelter in the Altstadt. Once inside, they found no survivors or corpses: just a green-brown liquid with bones sticking out of it. The cowering people had all melted...", "Selwood Dominic, Dresden was a civilian town with no military significance. Why did we burn its people?, http://www.telegraph.co.uk/history/world-war-two,  Telegraph Media Group Limited 2018, Internet Source, 2/12/18",],
  ["ALL of the following were reasons for the post World War II economic boom EXCEPT:", "Increased production of consumer goods", "A rapid growth in technology", "Inflation and higher prices", "Purchases made on credit", "D", "The private economy boomed as the government sector stopped buying munitions and hiring soldiers. Factories that had once made bombs now made toasters, and toaster sales were rising. On paper, measured GDP did drop after the war: It was 13 percent lower in 1947 than in 1944. But this was a GDP accounting quirk, not an indication of a stalled private economy or of economic hardship. A prewar appliance factory converted to munitions production, when sold to the government for $10 million in 1944, added $10 million to measured GDP. The same factory converted back to civilian production might make a million toasters in 1947 that sold for $8 million—adding only $8 million to GDP. Americans surely saw the necessity for making bombs in 1944, but just as surely are better off when those resources are used to make toasters. More to the point, growth in private spending continued unabated despite a bean-counting decline in GDP.", "Bohanon Cecil, Economic Recovery: Lessons from the Post-World War II Period, https://www.mercatus.org, George Mason University, Internet Source, 2/13/18",],
  ["Which of the the Axis powers was almost completely reconstructed by the united states after the devastation of the war left them helpless ?", "Italy", "Japan", "Turkey", "Germany", "B", "In September, 1945, General Douglas MacArthur took charge of the Supreme Command of Allied Powers (SCAP) and began the work of rebuilding Japan. Although Great Britain, the Soviet Union, and the Republic of China had an advisory role as part of an “Allied Council,” MacArthur had the final authority to make all decisions.", "Occupation and Reconstruction of Japan, 1945–52, https://history.state.gov/milestones/1945-1952/japan-reconstruction, Office of the Historian, Bureau of Public Affairs, United States Department of State, Internet Source, 2/12/18",],
  ["Hitler became the essential dictator of Germany in which decade ?", "1910s", "1920s", "1930s", "1940s", "C", "In the aftermath of Germany’s surrender in 1945, western Allied forces suspected that Hitler had committed suicide but did not immediately find evidence of his death. At the time, it was feared that Hitler may have escaped in the closing days of the war, and searches were made to determine if he was still alive. FBI Files indicate that the Bureau investigated some of the rumors of Hitler’s survival.", "Adolf Hitler, https://vault.fbi.gov ,  U.S. Department of Justice, 1999, 2/6/18",],
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
  why = questions[pos][6];
  cite = questions[pos][7];
  // use getElementsByName because we have an array which it will loop through
  choices = document.getElementsByName("choices");
  for(var i=0; i<choices.length; i++){
    if(choices[i].checked){
      choice = choices[i].value;
    }
  }
  // checks if answer matches the correct choice
  if(choice == questions[pos][5]){
    window.alert(why + "\n" + cite);
    //each time there is a correct answer this value increases
    correct++;
  } else {
    window.alert("Wrong Answer \n" + why + "\n" + cite);
  }
  // changes position of which character user is on
  pos++;
  // then the renderQuestion function runs again to go to next question
  renderQuestion();
}
window.addEventListener("load", renderQuestion, false);
