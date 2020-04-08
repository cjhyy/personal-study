---
title: 原型链和原型
---

## 一、原型

原型是ECMAScript实现继承的过程中产生的一个概念。

### 继承

指在一个对象的基础上创建新对象的过程。原型指在这过程中作为基础的对象

### 创建原型

``` javascript
// 鸟对象
var bird = {
    name: "bird",
    fly: function () {
        console.log("fly");
   }
}
```


假设我们需要一个鹰对象，因为我们已经有一个鸟对象，因此可以从这个鸟对象继承信息。

``` javascript
//鹰对象
var eagle = Object.create(bird);
eagle.fly(); // fly
```

通过 Object.create() 方法我们传入了鸟对象，作为鹰对象的原型来创建鹰对象，然后鹰对象中就产生了一个叫 _proto_ 的指针，这指针指向鸟对象。通过这个指针鹰对象就可以访问到鸟对象的 fly() 方法，当然编译器帮我们自动处理了这个指针访问的过程。

但是对于原型来讲，prototype 属性是很重要的存在，下面来讲讲 prototype。
