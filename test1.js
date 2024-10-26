let car = {
    name: "Lambogini",
    version: 16.8,
    color: "Red",
    Speed: 400,
    veel: 4,
    fullName: function(){
        return (this.name+" "+this.version).toUpperCase()
    }   
}

console.log(car.fullName())