document.querySelector(".button").addEventListener("mouseover", (event) => {
    let element = event.target;
    element.text = "Just Go Ahead"
});

document.querySelector(".button").addEventListener("mouseout", (event) => {
    let element = event.target;
    element.text = "Let's go"
});


