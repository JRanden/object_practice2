searchButton = document.getElementById("searchButton")

str = document.getElementById("searchField");

nameField = document.getElementById("nameField")

positionField = document.getElementById("positionField")

textField = document.getElementById("textField")

infoText = document.getElementById("infoText")

image = document.getElementById("image")

myDiv = document.getElementById("myDiv")

var employees = [
    {
        ansatt_id: "laila johanne handelsby",
        name: "Laila Johanne Handelsby",
        position: "Rektor",
        picture: "../img/rektor-laila-handelsby.jpg",
        text:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur"
    },
    {
        ansatt_id: "torben andersen",
        name: "Torben Andersen",
        position:"Assisterende rektor",
        picture:"../img/torben-gjerstad.jpg",
        text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur"

    },
    {
        ansatt_id: "martin sandø-frank",
        name: "Martin Sandø-Frank",
        position: "Studieleder",
        picture:"../img/martin-frank.jpg",
        text:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur"
    },
    {
        ansatt_id: "cathrine mannsaker",
        name: "Cathrine Mannsaker",
        position: "Undervisningsleder",
        picture:"../img/cathrine-mannsaker.jpg",
        text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur"
    },
    {
        ansatt_id: "anette øwre bollvåg",
        name: "Anette Øwre Bollvåg",
        position: "Undervisningsleder",
        picture:"../img/anette-owre-bollvag.jpg",
        text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur"
    }
]


    function sendValue(){
       var input = str.value.toLocaleLowerCase()

        if(input == 0){
            searchButton.classList.add("error")
            resetFields()
        }
    
    searchField.value = ""

        result = []

        for (let i = 0; i < employees.length; i++) {
            if (employees[i].name.toLocaleLowerCase().includes(input)) {
                result.push(employees.map(e => e.name).indexOf(employees[i].name));
                console.log(result)
            }     
        }
    if (result.length == 1){
        index = result[0]
        console.log(index)
        imageGenerate(employees[index].picture)
        nameField.innerHTML = employees[index].name;
        positionField.innerHTML = employees[index].position
        textField.innerHTML = employees[index].text
        infoText.innerHTML =" "
        searchButton.classList.remove("error")
        infoText.classList.remove("error")
        myDiv.classList.remove("error")
    }
    else {
        searchButton.classList.add("error")
        infoText.classList.add("error")
        infoText.innerHTML = "No employee with this name"
        myDiv.classList.add("error")
    }
    }

 function resetFields(){
    str.value = ""
    nameField.innerHTML = ""
    positionField.innerHTML = ""
    textField.innerHTML = ""
    image.src = ""
    
 }

 function imageGenerate(search) {
    image.src = search
 }

 var form = document.getElementById("form1");
 function handleForm(event) { event.preventDefault(); } 
 form.addEventListener('submit', handleForm);