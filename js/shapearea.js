function getRectangleArea(width , length) {

    return width * length 
    
}

function getCircleArea(radius) {

    return Math.PI * radius * radius

}

function getSquareArea(side) {

    return side * side

}
function getellipseArea(minorAxis,majorAxis) {

    return Math.PI * minorAxis * majorAxis

}

export {
    getRectangleArea,
    getCircleArea,
    getSquareArea,
    getellipseArea
};