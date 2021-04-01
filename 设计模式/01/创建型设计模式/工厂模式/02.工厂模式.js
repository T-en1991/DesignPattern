//工厂模式
//把同类型的放在一起，通过工厂去调用，方便简化调用，减少维护成本
let person=(function () {
  let s={
    student(){
      this.type='好学生';
      this.level='三年级';
    },
    engineer(){
      this.type='前端程序员';
      this.level='高级职称';
    },
    teacher(){
      this.type='人民教师';
      this.level='高级职称';
    }
  }
  return class {
    constructor(w){
      try{
        this.name=w;
        s[w].call(this)
      }catch (e) {
        throw new Error('error')
      }
    }
    saySelf(){
      console.log(`我是${this.name},而且是${this.type},我上${this.level}`);
    }
  }
})()

let a=new person('student');
a.saySelf()