interface IStudent
{
    name : string;
    age: number;
    mobile: number;
    maths: number;
    eng: number;
    sc: number;
    percentage();
}
 
class Student implements IStudent
{
    per:HTMLElement
    name : string;
    age: number;
    mobile: number;
    maths: number;
    eng: number;
    sc: number;
    percentage()
    {
        let per:number=(this.maths+this.eng+this.sc)/3;
      //document.writeln("<label>percentage : </label>"+per);
        this.per= (<HTMLInputElement>document.getElementById('percentage'));
        (<HTMLInputElement>document.getElementById('percentage')).value = per.toString();
    }
}
 
 function printStudent( stu : Student)
 {
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

var obj : Student = new Student();
obj.age=18;
obj.name="jassa";
obj.eng=98;
obj.maths=79;
obj.sc=86;

function OnSubmit()
{
var obj : Student = new Student();
console.log("p");
 obj.name= (<HTMLInputElement>document.getElementById("name")).value;
 obj.age= Number((<HTMLInputElement>document.getElementById("age")).value);
 obj.mobile= +((<HTMLInputElement>document.getElementById("mob")).value);
 obj.eng= Number((<HTMLInputElement>document.getElementById("eng")).value);
 obj.maths=Number((<HTMLInputElement>document.getElementById("maths")).value);
 obj.sc= Number((<HTMLInputElement>document.getElementById("sc")).value);
printStudent(obj);
}
function OnReset()
{//test
var obj : Student = new Student();
console.log("h");
    (<HTMLInputElement>document.getElementById("name")).value="";
    ((<HTMLInputElement>document.getElementById("age")).value)="";
    ((<HTMLInputElement>document.getElementById("mob")).value)="";
    ((<HTMLInputElement>document.getElementById("eng")).value)="";
    ((<HTMLInputElement>document.getElementById("maths")).value)="";
    ((<HTMLInputElement>document.getElementById("sc")).value)="";

}