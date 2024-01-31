// Creating classes with for shapes 

class Shape {

    constructor(){
        this.color=''
    }

    setColor(color){
        this.color=(color);
    }
 };

 // Creating extension classes to class Shape, for size, position, and color for the shape chosen


 class Square extends Shape{
    render(){
        return `<rect x="50" y="0" height="100%" width="66.666%" fill="${this.color}"/>`

    }
 };

 class Triangle extends Shape {
    render(){
        return `<polygon x="0" y="0" height="100%" width="100%" points="150, 0 300, 200 0, 200" fill="${this.color}"/>`

    }
 };

 class Circle extends Shape {
    render(){
        return `<circle cx="150" cy="100" r="100" height="100%" width="100%" fill="${this.color}"/>`

    }

 };
 
 // Exporting so to use in index.js and jest test
 
 module.exports = {Square, Triangle, Circle}
 