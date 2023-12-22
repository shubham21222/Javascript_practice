console.log(this);

var user = {
    firstName : "shubham",
    secondNmae : "raikwar",
    courses : 4,
    getCourseCount : function () {
        console.log("LINE 4" , this);
        function Hello() {
            console.log("hello Ji");
            console.log("LINE 5" ,this);

        }
        Hello();
    }
};

user.getCourseCount();