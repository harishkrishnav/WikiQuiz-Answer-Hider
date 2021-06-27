hideAnswers();

async function hideAnswers() {
  console.log("We are in WikiQuiz!");
  const delay = ms => new Promise(res => setTimeout(res, ms));
  await delay(3000);

  try{
    var qandatab = document.getElementById("qanda-tab");
    qandatab.click();  
  }
  catch(e){
    ;
  }
  
  var elements = document.getElementsByClassName("ng-binding");

  for (item of elements) {
    try {
      if(item.attributes['data-ng-bind-html'].value === "r.answer|render"){
        item.id = counter;

        item.style.visibility = 'hidden';
        
        const answerCopy = document.createElement("p");
        answerCopy.className = counter;
        answerCopy.innerText = item.innerText;
        answerCopy.style.display = 'none';
        answerCopy.style.width = 'fit-content';

        const newButton = document.createElement("button");
        newButton.innerText = "Click to reveal answer";
        newButton.style.visibility = 'visible';
        newButton.style.width = 'stretch';
        newButton.onclick = () => {
          newButton.style.display = 'none'; 
          answerCopy.style.display = 'block'; 
          answerCopy.style.visibility = 'visible'; 
          item.style.display = 'none';
        };

        item.prepend(newButton);
        item.prepend(answerCopy);

      }
    }
    catch(e) {
      ;
    }
  }
}
