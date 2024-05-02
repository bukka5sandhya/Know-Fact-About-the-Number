let userInputEle = document.getElementById("userInput");
let spinnerEle = document.getElementById("spinner");
let factEle = document.getElementById("fact");

function getFactAboutNumber(event){
    if(event.key === "Enter"){
        let userInputVal = userInputEle.value ;
        if(userInputVal === ""){
            alert("Enter a Number");
            return;
        }

        let url = "https://apis.ccbp.in/numbers-fact?number="+userInputVal;
        let options = {
            method:'GET'
        }
        spinnerEle.classList.remove("d-none");
        factEle.classList.add("d-none");

        fetch(url,options)
        .then(function(response){
            return response.json();
        })
        .then(function(jsonData){
            factEle.classList.remove("d-none");
            spinnerEle.classList.add("d-none");

            let{fact} = jsonData;
            factEle.textContent = fact;

        })

    }
}
userInputEle.addEventListener("keyup",getFactAboutNumber);