console.log('Hello World!')
const $input = document.querySelectorAll(".input__text"),
    $submit = document.getElementById("submit"),
    $inputInvalid = document.querySelectorAll(".invalid");
let str = "";
document.addEventListener("click", (e) => {
    if (e.target.matches('input[type="submit"]')) {
        let i = 0;
        $input.forEach((input) => {
            str = input.value.toString();
            if (input.required && str.trim() === "") {
                input.classList.add("error")
                $inputInvalid[i].style.display = "block"
            } else {
                input.classList.remove("error")
                $inputInvalid[i].style.display = "none"
            }
            if (input.type === "email") {
                input.placeholder = "email@example/com"
            }
            i++;
        })
    }
});