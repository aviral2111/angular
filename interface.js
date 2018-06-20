class Student {
    percentage() {
        let per = (this.maths + this.eng + this.sc) / 3;
        //document.writeln("<label>percentage : </label>"+per);
        this.per = document.getElementById('percentage');
        document.getElementById('percentage').value = per.toString();
    }
}
function printStudent(stu) {
    //document.writeln("<label>Name : </label>"+stu.name);
    //if(stu.age)
    // {
    //document.writeln("<label>Age : </label>"+stu.age);
    // }
    //if(stu.mobile)
    // {
    // console.log(stu.mobile);
    // }
    //document.writeln("<label>English : </label>"+stu.eng);
    // document.writeln("<label>Maths : </label>"+stu.maths);
    // document.writeln("<label>Science : </label>"+stu.sc);
    stu.percentage();
}
var obj = new Student();
obj.age = 18;
obj.name = "jassa";
obj.eng = 98;
obj.maths = 79;
obj.sc = 86;
function OnSubmit() {
    var obj = new Student();
    console.log("p");
    obj.name = document.getElementById("name").value;
    obj.age = Number(document.getElementById("age").value);
    obj.mobile = +(document.getElementById("mob").value);
    obj.eng = Number(document.getElementById("eng").value);
    obj.maths = Number(document.getElementById("maths").value);
    obj.sc = Number(document.getElementById("sc").value);
    printStudent(obj);
}
function OnReset() {
    var obj = new Student();
    console.log("h");
    document.getElementById("name").value = "";
    (document.getElementById("age").value) = "";
    (document.getElementById("mob").value) = "";
    (document.getElementById("eng").value) = "";
    (document.getElementById("maths").value) = "";
    (document.getElementById("sc").value) = "";
}
