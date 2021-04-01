//非工厂模式下
class student{
  constructor() {
    this.type='好学生';
    this.level='三年级';
  }
  saySelf(){
    console.log(`我是student,而且是${this.type},我上${this.level}`);
  }
}

class engineer{
  constructor() {
    this.type='前端程序员';
    this.level='高级职称';
  }
  saySelf(){
    console.log(`我是engineer,我是${this.type},我是${this.level}`);
  }
}

class teacher{
  constructor() {
    this.type='人民教师';
    this.level='高级职称';
  }
  saySelf(){
    console.log(`我是teacher,我是${this.type},我是${this.level}`);
  }
}

let a=new student();
a.saySelf();
let b=new engineer();
b.saySelf();
let c=new teacher();
c.saySelf();
//创建了很多相似的类