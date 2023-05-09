const textInput = document.querySelector("#name-input");
const output = document.querySelector("#name-output");

textInput.addEventListener("input", (sense) => {
    output.textContent = sense.currentTarget.value ? sense.currentTarget.value : "Anonymous";
});