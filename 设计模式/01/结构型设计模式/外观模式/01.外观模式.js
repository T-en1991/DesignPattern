//外观模式（Facede）：为一组复杂的子接口提供一个更高级的统一接口，以便更方便的去实现子接口的功能。

//以添加事件为例：我们是不推荐直接 on+事件 的赋值形式添加事件的，因为这是DOM0级事件，下次再添加时就直接覆盖上一次的了，所以我们使用DOM2级事件添加方式 addEventListener，而IE是不兼容的，需要使用attachEvent，从而添加一个click的事件写法如下：
function click(){
  //code……
}

if( document.addEventListener ){
  oDiv.addEventListener("click" , click, false);
}else if(document.attachEvent){
  oDiv.attachEvent("onclick" , click);
}else{
  oDiv.onclick = click;
}
//很显然每个事件都要写这么一堆是很麻烦的，我们都会封装一下：


//javascrip的兼容部分确实比较多，所以我们可以将众多兼容操作综合起来，这样就通过外观模式封装了一个小型的库：
var F = {
  getDOM : function(selector){
    return document.querySelector(selector);
  },
  on: function(selector,eName,fn){
    var dom = this.getDOM(selector);
    if( document.addEventListener ){
      dom.addEventListener(eName,fn,false);
    }else if( document.attachEvent ){
      dom.attachEvent("on"+eName,fn);
    }else{
      dom["on"+eName] = fn;
    }
  },
  getStyle : function(selector,attr){
    var dom = this.getDOM(selector);
    if( window.getComputedStyle ){
      return getComputedStyle(dom)[attr];
    }else{
      return dom.currentStyle[attr];
    }
  }
  //code……
}

//使用
F.on("#wrap","click" , function(){
  //code……
})