function displayPoem(response){
   new Typewriter("#poem", {
      strings: response.data.answer,
      autoStart: true,
      delay: 1,
      cursor: "",
    }); 
}

function generatePoem(event){
    event.preventDefault();

    let instructionsInput = document.querySelector("#user-instructions");
    let apiKey = "4ff2f0648e0df0799b7bof1atd773a9a";
    let prompt = `User instructions:Generate a French Poem ${instructionsInput.value}`;
    let context= "You are a romantic poem expert and love to write short poems. Your mission is to generate 4 lines poem.";
    let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

    axios.get(apiUrl).then(displayPoem);

    

}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);