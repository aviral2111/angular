interface funcInt
{
   ( name: String, add: String):void
    
}

let  funInt:funcInt;

funInt=function(name:String,add:String):void
{
    console.log(name); 
}
funInt("abc","da");

class Animal
{
    private theName:string;
    protected theAge:number;
    private _age:number;
    public passcode:string;
    constructor(name: string)
    {
        this.theName = name;

    }
    public printName= function():void
    {
        console.log(this.theName);
        console.log(this.theAge);
    }
    get age():number{
        if(this.passcode=="abc"){
            return this._age ;
        
        }
        else{
            return 0;
        }
    }
    set age(value:number){
        if(this.passcode=="abc"){
            this._age=value;
        }
    }
}
class Elephant extends Animal
{
    x:HTMLElement
    
    constructor(Name:string,Weight:number,age:number)
    {
        super(Name);
        this.theAge=age;
        this.x = (<HTMLInputElement>document.getElementById('abc'));
        (<HTMLInputElement>document.getElementById('abc')).value = 'abc';
       
    };
};

var ele= new Elephant("sdd",12,40);
ele.printName();
ele.passcode="abc";
ele.age=25;
console.log(ele.age);