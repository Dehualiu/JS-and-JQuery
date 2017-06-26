/**
 * Created by Administrator on 2017/5/24.
 */
function A(){
    /*通过函数闭包，给函数动态附加属性*/
    this.sayhehe = function(){
        console.log("函数闭包附加");
    };
}

/*在原型量里面进行附加   */
A.prototype.sayhello = function(){
    console.log("Hello,JS")
}

/*静态引用*/
A.sayhi = function(){
    console.log("hi,5month");
}

/*创建一个新的A的实例*/
var a = new A();
/*引用创建的方法*/
a.sayhello();
A.sayhi();


/*继承类*/
function B(){

}
/*继承A类*/
B.prototype = new A();
var b = new B();
b.sayhello();
b.sayhehe();