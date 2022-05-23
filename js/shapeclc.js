
import { getRectangleArea, getCircleArea, getSquareArea, getellipseArea } from './shapearea.js';
var shapeList = [{ id: 'rectangle', shapeName: "Rectangle" },
{ id: 'circle', shapeName: "Circle" },
{ id: 'square', shapeName: "Square" },
{ id: 'ellipse', shapeName: "Ellipse" }

]
var selectedShape = ''
var shapeListIds = document.querySelector('#shapeList');

for (let i = 0; i < shapeList.length; i++) {
    let label = document.createElement('label');
    label.textContent = shapeList[i].shapeName + "\n";
    shapeListIds.appendChild(label);
    let radio = document.createElement('input');
    radio.type = 'radio';
    radio.name = "shape";
    radio.value = shapeList[i].id;
    radio.id= shapeList[i].id
    shapeListIds.appendChild(radio);
    let linebreak = document.createElement('br');
    shapeListIds.appendChild(linebreak);
};



const gotostep2 = document.querySelector('#btn');
const radioButtons = document.querySelectorAll('input[name="shape"]');
gotostep2.addEventListener("click", () => {
    for (const radioButton of radioButtons) {
        console.log(radioButton.checked, radioButtons)
        if (radioButton.checked) {
            selectedShape = radioButton.value;
            showSecondStep()
            break;
        }
    }

    if (!selectedShape) {

        alert("please select a shape")

    }
    //  // show the output:
    output.innerText = selectedShape ? `You have selected a ${selectedShape}` + " please input the required variables" : `You haven't selected any shape`;
});


const canclestep2 = document.querySelector('#canclestep2');
canclestep2.addEventListener("click", () => {

    showFirstSrep()


    for (const radioButton of radioButtons) {
        if (radioButton.checked) {
            radioButton.checked = false
            selectedShape = radioButton.value;
            break;
        }
    }

})


//get inputs and button element from document
var gotostep3 = document.querySelector("#calcBtn");

var areagEl = document.querySelector("#area");

//bind a function to the onClick event  Go To Step3 button
gotostep3.onclick = function () {

    let x = document.querySelector("#x-axis") ? document.querySelector("#x-axis").value : null;
    let y = document.querySelector("#y-axis") ? document.querySelector("#y-axis").value : null;
    let area = 0;


    switch (selectedShape) {
        case "rectangle":

            area = getRectangleArea(x, y).toFixed(2)
            areagEl.innerHTML = " You have selected a " + selectedShape + " with Length " + x + " and Width" + y + " The area is " + selectedShape + ":" + area;
            showLastStep()
            break;
        case "circle":

            area = getCircleArea(x).toFixed(2)
            areagEl.innerHTML = " You have selected a " + selectedShape + " with Radius " + x + " The area is " + selectedShape + ":" + area;
            showLastStep()
            break;
        case "square":

            area = getSquareArea(x).toFixed(2)
            areagEl.innerHTML = " You have selected a " + selectedShape + " with Side " + x + " The area is " + selectedShape + ":" + area;
            showLastStep()
            break;

        case "ellipse":

            area = getellipseArea(x, y).toFixed(2)
            areagEl.innerHTML = " You have selected a " + selectedShape + " with Minor-Axis" + x + " and Major-Axis" + y + " The area is " + selectedShape + ":" + area;
            showLastStep()
            break;

        default:
            break;


    }
}

const startover = document.querySelector('#startover');

startover.addEventListener("click", () => {

    showFirstSrep()

})

function showInputFileds() {
    shapeList.forEach(element => {
        if (selectedShape == element.id) {
            document.querySelector("#" + element.id + "InputFileds").style.display = 'block'
        } else {
            document.querySelector("#" + element.id + "InputFileds").style.display = 'none'

        }
    });
}

function showSecondStep() {
    document.getElementById('step1').style.display = "none";
    document.getElementById('step3').style.display = "none";
    document.getElementById('step2').style.display = "block";
    showInputFileds()
}

function showLastStep() {
    document.getElementById('step1').style.display = "none";
    document.getElementById('step2').style.display = "none";
    document.getElementById('step3').style.display = "block";
}

function showFirstSrep() {
    document.getElementById('step1').style.display = "block";
    document.getElementById('step2').style.display = "none";
    document.getElementById('step3').style.display = "none";
}