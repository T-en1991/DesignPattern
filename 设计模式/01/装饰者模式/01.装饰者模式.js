//装饰者模式（Decorator）：在不改变原对象的基础上，对其进行包装拓展，以满足更复杂的需求。

//Teacher类
class Teacher{
  constructor(name,sex){
    this.name = name;
    this.sex = sex;
  }
  showName(){
    alert(this.name);
  }
}

//实例 、 使用……
let afei = new Teacher("阿飞","男");//实例1
let wula = new Teacher("乌拉","女");//实例2
let zhuque = new Teacher("朱雀","女");//实例3
let xinai = new Teacher("心艾","女");//实例4
//code…… 这里的代码是和上面的实例相关的使用代码

//现在需要对 wula实例（或者个别实例） 进行age、marry等属性的扩展
//很显然此时不能直接扩展到Teacher，不然会影响其他实例
//如果继承，那么需要重新实例化出新的，不必要且浪费
//我们目前只需要在已有的实例上稍作装饰就能满足需求
function Decorator(obj,age,marry){
  obj.age = age;
  obj.marry = marry;
  return obj;
}
Decorator(wula,18,"未婚");
//code…… 新属性的使用代码

/*
更复杂的装饰者模式还可以继续抽象成类，实现对对象的扩展。

**总结：**装饰者模式就是一种更灵活的继承方案，对对象进行所需要的扩展而不用重新继承构造出新的实例。

*/