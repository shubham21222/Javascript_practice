// Bind :- bind() is a method used to create a new function that, when invoked, has its this keyword set to a specific value, along with optional parameters passed.

let Nameobj = {
    name: "shubham"
}

let printName = {
    name: "vercel",
    sayHi: function () {
        console.log(this.name)
    }
}

let hiFun = printName.sayHi.bind(Nameobj)

hiFun();


let myNameobj = {
    name : "xyz"
}


let sayhi = {
    name : "shiv",
    message: function() {
        console.log(this.name)
    }
}


let mainmessgae = sayhi.message.bind(myNameobj)
mainmessgae()