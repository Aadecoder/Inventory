const fileHeading = document.querySelector(".file-heading");
const fileContent = document.querySelector(".file-content");
const fileContainer = document.querySelector(".file-container")

function placeholderInit(element,placeholder){
    if(element.textContent.trim() === ""){
        element.textContent = placeholder;
        element.style.color = "#888";

        // clear placeholder when user starts typing
        element.addEventListener("focus", function(){
            if(element.textContent === placeholder){
                element.textContent = "";
                element.style.color = ""; // reset to default color
            }
        })
    }
    element.addEventListener("blur", function(){
        if(element.textContent.trim() === ""){
            element.textContent = placeholder;
            element.style.color = "#888";
        }
    })
}

placeholderInit(fileHeading, "New Page...");
placeholderInit(fileContent, "Enter the stuff here...");

// Preventing pressing of Enter key on file heading
fileHeading.addEventListener("keydown", function(e) {
  if (e.key === "Enter") {
    e.preventDefault();
    fileContent.focus();
  }
});
fileContent.addEventListener("keydown", (e)=>{
    if(e.key === "ArrowUp"){
        e.preventDefault();
        fileHeading.focus();
    }
})

// Markdown renderer
// not ready yet
// function markdownRender(){
//     fileContent.addEventListener("focus", ()=>{
//         let parsed = marked.parse(fileContent.textContent);
//         console.log(parsed);
//         let clean =  DOMPurify.sanitize(parsed);
//         console.log(clean);
//         fileContent.textContent = clean;
//     })
// }
// setInterval(markdownRender, 1000);


const files = document.querySelectorAll(".file");

files[0].addEventListener("click", ()=>{
    fileContainer.classList.remove("invisible");
})





