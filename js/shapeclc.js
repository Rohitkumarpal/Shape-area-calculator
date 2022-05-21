class shapeCalculator {

    constructor(minorAxis, majorAxis, lenght, width, side, radius) {
        this.minorAxis = Number(minorAxis)
        this.majorAxis = Number(majorAxis)
        this.lenght = Number(lenght)
        this.width = Number(width)
        this.side = Number(side)
        this.radius = Number(radius)
        this.PI = 3.14

    }
    getRectangleArea() {

        return this.lenght * this.width

    }

    getCircleArea() {

        return this.PI * this.radius * this.radius

    }

    getSquareArea() {

        console.log('this.side * this.side', this.side * this.side)
        return this.side * this.side

    }
    getellipseArea() {

        return this.PI * this.minorAxis * this.majorAxis

    }



}

var selectedShape = ''
var totalAreaOfSelectedShape = 0;
var minorAxis
var majorAxis
var length;
var width;
var side;
var radius;



function onchangeRadioButton(event) {
    selectedShape = event.target.value
}

function addFields(selectedShape) {

    // Get the element where the inputs will be added to
    var container = document.getElementById("inputFileds");
    // Remove every children it had before
    while (container.hasChildNodes()) {
        container.removeChild(container.lastChild);
    }
    // Generate a dynamic number of inputs
    var number = 1
    switch (selectedShape) {
        case "rectangle":
            number = 2
            for (i = 0; i < number; i++) {
                if (i == 0) {
                    getFileds(container, "Length")
                } else {
                    getFileds(container, "Width")
                }
            }

            break;
        case "circle":
            number = 1
            for (i = 0; i < number; i++) {
                getFileds(container, "Radius")
            }

            break;
        case "square":
            number = 1
            for (i = 0; i < number; i++) {
                getFileds(container, "Side")
            }

            break;

        case "ellipse":

            number = 2

            for (i = 0; i < number; i++) {
                if (i == 0) {
                    getFileds(container, "Major-Axis")
                } else {
                    getFileds(container, "Minor-Axis")
                }
            }

            break;

        default:
            break;

    }





}

function getFileds(container, labelName) {


    // Append a node with labelName
    var l = document.createElement("LABEL");
    l.innerHTML = labelName
    container.appendChild(l);
    // Create an <input> element, set its type and name attributes
    var input = document.createElement("input");
    input.type = "text";
    input.name = labelName;
    input.id = labelName
    container.appendChild(input);
    // Append a line break 
    container.appendChild(document.createElement("br"));


}

function calculateArea(selectedShape, ) {

    cl = new shapeCalculator(minorAxis, majorAxis, length, width, side, radius)

    switch (selectedShape) {
        case "rectangle":

            totalAreaOfSelectedShape = cl.getRectangleArea().toFixed(2)

            break;
        case "circle":

            totalAreaOfSelectedShape = cl.getCircleArea().toFixed(2)

            break;
        case "square":

            totalAreaOfSelectedShape = cl.getSquareArea().toFixed(2)

            break;

        case "ellipse":

            totalAreaOfSelectedShape = cl.getellipseArea().toFixed(2)

            break;

        default:
            break;


    }

    return totalAreaOfSelectedShape;

}



const gotostep2 = document.querySelector('#btn');
const radioButtons = document.querySelectorAll('input[name="shape"]');
gotostep2.addEventListener("click", () => {
    for (const radioButton of radioButtons) {
        console.log(radioButton.checked, radioButtons)
        if (radioButton.checked) {
            selectedShape = radioButton.value;
            addFields(selectedShape)
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

const canclebtn = document.querySelector('#cancle');
canclebtn.addEventListener("click", () => {

    for (const radioButton of radioButtons) {
        if (radioButton.checked) {
            radioButton.checked = false
            selectedShape = radioButton.value;
            break;
        }
    }



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
    minorAxis = null
    majorAxis = null
    length = null
    width = null
    side = null
    radius = null
    totalAreaOfSelectedShape = 0;

})


//get inputs and button element from document
var gotostep3 = document.querySelector("#calcBtn");

var areagEl = document.querySelector("#area");

//bind a function to the onClick event  Go To Step3 button
gotostep3.onclick = function() {

    if (selectedShape == 'ellipse') {
        majorAxis = document.querySelector("#Minor-Axis").value;
        majorAxis = document.querySelector("#Major-Axis").value;

        showLastStep()

        area = calculateArea(selectedShape)
            //write the results into #area  document 
        areagEl.innerHTML = " You have selected a " + selectedShape + " with Minor-Axis" + minorAxis + " and Major-Axis" + majorAxis + " The area is " + selectedShape + ":" + area;

    } else if (selectedShape == 'rectangle') {
        length = document.querySelector("#Length").value;
        width = document.querySelector("#Width").value;
        showLastStep()

        area = calculateArea(selectedShape)
            //write the results into #area  document 
        areagEl.innerHTML = " You have selected a " + selectedShape + " with Length " + length + " and Width" + width + " The area is " + selectedShape + ":" + area;
    } else if (selectedShape == 'square') {
        side = document.querySelector("#Side").value;
        showLastStep()

        area = calculateArea(selectedShape)
            //write the results into #area  document 
        areagEl.innerHTML = " You have selected a " + selectedShape + " with Side " + side + " The area is " + selectedShape + ":" + area;
    } else if (selectedShape == 'circle') {
        radius = document.querySelector("#Radius").value;
        showLastStep()

        area = calculateArea(selectedShape)
            //write the results into #area document 
        areagEl.innerHTML = " You have selected a " + selectedShape + " with Radius " + radius + " The area is " + selectedShape + ":" + area;
    }


}

const startover = document.querySelector('#startover');

startover.addEventListener("click", () => {

    showFirstSrep()

})

function showSecondStep() {
    document.getElementById('step1').style.display = "none";
    document.getElementById('step3').style.display = "none";
    document.getElementById('step2').style.display = "block";
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