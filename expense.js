// Creat VARIABLES
const submitButton = document.querySelector(".submit");
const name = document.querySelector("#name");
const date = document.querySelector("#date");
const amount = document.querySelector("#amount");
const tbody = document.querySelector(".elements");



//Creat EVENTS
document.addEventListener("DOMcontentLoaded",returnStorage)
submitButton.addEventListener("click",addElement);



//Creat FUNCTIONS
function addElement (event) {
    //Stop browsr from reloding
    event.preventDefault();

    if(name.value !== "" && date.value !== "" && amount.value !== "") {
        //Creat element in table
        const trow = document.createElement("tr");
        const tName = document.createElement("td");
        const tDate = document.createElement("td");
        const tAmount = document.createElement("td");
        const tDelete = document.createElement("td");
            //Add the content
            tName.innerText = name.value;
            tDate.innerText = date.value;
            tAmount.innerText = amount.value;
            tDelete.innerHTML = '<button class="delete-btn"><i class="fas fa-trash"></i></button>';

            
        //append the elements
        tbody.appendChild(trow);
        trow.appendChild(tName);
        trow.appendChild(tDate);
        trow.appendChild(tAmount);
        trow.appendChild(tDelete);

        saveLocal(name.value,date.value,amount.value);
            
        name.value = "";
        date.value = "";
        amount.value = "";


        //Check if the table is empty
        check();

        tDelete.addEventListener("click",removeElement);
    } else {
        alert("please fill in the form");
    }

}

function removeElement(e) {
    const parent = e.target.parentNode.parentNode;

    if(e.target.classList[0] === "delete-btn"){
        parent.remove();
    }

    //Check if the table is empty
    check();

}

function check() {

    if (tbody.childNodes === "") {
        document.querySelector(".empty").style.display = "flex";
    } else {
        document.querySelector(".empty").style.display = "none";
    }
}

function saveLocal(itemName,itemDate,itemAmount) {
    let nameItem;
    let dateItem;
    let amountItem;
    if(localStorage.getItem("nameItem") === null && localStorage.getItem("dateItem") === null && localStorage.getItem("amountItem") === null) {
        nameItem = [];
        dateItem = [];
        amountItem = [];
    } else {
        nameItem = JSON.parse(localStorage.getItem("nameItem"));
        dateItem = JSON.parse(localStorage.getItem("dateItem"));
        amountItem = JSON.parse(localStorage.getItem("amountItem"));
    }

    nameItem.push(itemName);
    dateItem.push(itemDate);
    amountItem.push(itemAmount);
    
    localStorage.setItem("nameItem",JSON.stringify(nameItem));
    localStorage.setItem("dateItem",JSON.stringify(dateItem));
    localStorage.setItem("amountItem",JSON.stringify(amountItem));
}

function returnStorage() {

    let nameItem;
    let dateItem;
    let amountItem;
    if(localStorage.getItem("nameItem") === null && localStorage.getItem("dateItem") === null && localStorage.getItem("amountItem") === null) {
        nameItem = [];
        dateItem = [];
        amountItem = [];
    } else {
        nameItem = JSON.parse(localStorage.getItem("nameItem"));
        dateItem = JSON.parse(localStorage.getItem("dateItem"));
        amountItem = JSON.parse(localStorage.getItem("amountItem"));
    }


    nameItem.forEach(function(item) {

        //Creat element in table
        const trow = document.createElement("tr");
        const tName = document.createElement("td");
        const tDate = document.createElement("td");
        const tAmount = document.createElement("td");
        const tDelete = document.createElement("td");
            //Add the content
            tName.innerText = nameItem[item];
            tDate.innerText = dateItem[item];
            tAmount.innerText = amountItem[item];
            tDelete.innerHTML = '<button class="delete-btn"><i class="fas fa-trash"></i></button>';

            
        //append the elements
        tbody.appendChild(trow);
        trow.appendChild(tName);
        trow.appendChild(tDate);
        trow.appendChild(tAmount);
        trow.appendChild(tDelete);


    });
}