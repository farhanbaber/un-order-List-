function search() {
    let inputElement = document.getElementById("input")
    let input = inputElement.value
    let newItem = document.createElement("li")
    if (input.trim() === "" ) {
        alert("Plz fill the Input First")
        
    } else {
        newItem.innerText = input
        document.getElementById("class").appendChild(newItem)
    }

    inputElement.value = ""
}
