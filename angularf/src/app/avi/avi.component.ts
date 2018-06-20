import { Component,OnInit } from '@angular/core';

@Component(
{
  selector: 'app-avi',
  //template:`<div>Hi There !!</div>`,
  templateUrl: './avi.component.html',
  //styleUrls: ['./avi.component.css'],
  styles:[`div{ color : red; }`]
})
export class AviComponent implements OnInit 
{
  ngOnInit(){
    //(<HTMLInputElement>document.getElementById('formSubmit')).onclick = this.OnSubmit();
  }
  constructor() { 

  }
  OnSubmit(): any
  {
      var obj : Student = new Student();
      console.log("p");
      debugger;
      obj.name= (<HTMLInputElement>document.getElementById("name")).value;
      obj.age= Number((<HTMLInputElement>document.getElementById("age")).value);
      obj.mobile= +((<HTMLInputElement>document.getElementById("mob")).value);
      obj.eng= Number((<HTMLInputElement>document.getElementById("eng")).value);
      obj.maths=Number((<HTMLInputElement>document.getElementById("maths")).value);
      obj.sc= Number((<HTMLInputElement>document.getElementById("sc")).value);
      this.printStudent(obj);
  }
  printStudent( stu : Student)
  {
    stu.percentage();
  }
}

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

export class Student implements IStudent
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