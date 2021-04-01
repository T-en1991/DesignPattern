/*

      建造者模式（Builder）：将一个复杂对象的构建与它的表示分离，使得同样的构建过程可以创建不同的表示。

      看名称我们首先想到的就是造房子。建造者模式就像是施工团队，包工头和客户沟通了解了客户的建房需求后，在自己团队内部分发任务，将复杂的建房过程分解成若干小组，各小组分工合作最终得到需求的房子。

     建造者模式：复杂的表示和构建分离，使用者不需要知道内部的操作，表示部分已经定好了，如room，space，style

      */

let Builder = (function(){

  //通过入住人数，建造者帮你规划房间数量
  function room(p){
    if( p<=0 ){
      throw new Error("入住人员数量信息错误");
    }
    this.rooms = p<3?2:3;
  }

  //通过预算金额，建造者帮你选择合适面积
  function space(m){
    if( m < 30 ){
      throw new Error("预算太低…");
    }
    this.space = m;
  }

  //通过需求的风格，建造者帮你设计风格
  function style(s){
    this.style = s;
  }

  /*
  客户只需要告诉建造者相关信息
  参数：
      p : number 入住人员
      m : number 预算
      s : string 风格
   */
  return class{
    constructor(p,m,s){
      room.call(this,p);
      space.call(this,m);
      style.call(this,s);
    }
  };
})();


//实例1
let house1 = new Builder(2,100,"小清新");

//实例2
let house2 = new Builder(3,50,"普通");

console.log(house1);

console.log(house2);