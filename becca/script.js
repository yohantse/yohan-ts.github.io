const buttons = document.querySelectorAll("button");

buttons.forEach(button => {

    button.addEventListener("click", () => {

        document
        .querySelector("#journal")
        .scrollIntoView({
            behavior:"smooth"
        });

    });

});