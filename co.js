class Employee  
  {  
    constructor(id,name)  
    {  
      this.id=id;  
      this.name=name;  
    }  
    show()  
    {  
  document.writeln(this.id+" "+this.name+"<br>")  
    }  
  }  
  
var e1=new Employee(1,"abcd");  
var e2=new Employee(2,"qwer");  
e1.show();
e2.show(); 