//单例模式

//闭包返回一个类，用来存储数据
let F=(function () {
  let ins=null;//闭包存储一个数据用来判断是否实例过
  return class{
    constructor(name,age,sex){
      if (ins) return ins;//如果实例过直接返回原实例
      ins=this;//如果没有实例过，将该实例赋值给闭包
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
})()

let a=new F(1,2,3);//实例a，创建a时没有记录，ins为null，成功创建
let b=new F(4,5,6);//实例b，创建b时已有ins，返回a的实例

a.sayName();
a.name=4;//a的变化也会引起b的变化，因为单例是共用的
a.sayName();
b.sayName();
console.log(a===b);