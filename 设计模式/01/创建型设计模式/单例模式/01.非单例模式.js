//非单例模式
//定义一个普通类
class gte{
  constructor(name,age,sex){
    this.name=name;
    this.age=age;
    this.sex=sex;
  }

  sayName(){
    console.log(this.name);
  }
  sayAge(){
    console.log(this.age);
  }
  saySex(){
    console.log(this.sex);
  }
}

let a=new gte('1',2,3);//实例a
let b=new gte('1',2,3);//实例b
console.log(a==b);//false
//new一个对象的每个实例是不同的，如果存在想要共用一个对象的时候就需要使用单例模式