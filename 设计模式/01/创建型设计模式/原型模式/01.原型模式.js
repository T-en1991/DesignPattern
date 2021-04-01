/*

原型模式（Prototype）：用原型实例指定创建对象的种类，并且通过拷贝这些原型创建新的对象。

这个概念在JavaScript中和我们讲过的原型继承是同一个意思。
 */

/*
       原型继承
       */

/*function F(){
}
F.prototype.g = function(){}
function G(){
    F.call(this)
}
function Fn(){}
Fn.prototype = F.prototype;
G.prototype = new Fn();
G.prototype.constructor = G;*/


class F{
  constructor(){
    this.name='zs'
  }
  x(){
    console.log('x');
  }
}

class G extends F{
  constructor(){
    super()
  }
  x(){
    console.log('xx');
  }
  y(){
    console.log('yy');
  }
}

let a=new G();
console.log(a.name);
a.x();
a.y();