(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{379:function(t,n,a){"use strict";a.r(n);var e=a(7),s=Object(e.a)({},(function(){var t=this,n=t._self._c;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h3",{attrs:{id:"_1-类的声明形式"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-类的声明形式"}},[t._v("#")]),t._v(" 1. 类的声明形式")]),t._v(" "),n("div",{staticClass:"language-c++ extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("class ClassName{\n\tpublic:\n\t\t公有成员(外部接口)\n\tprotected:\n\t\t保护型成员\n\tprivate:\n\t\t私有成员\n};\n")])])]),n("p",[t._v("“public”（公共部分）：不受限制的访问和调用\n“private”（私有部分）：只有在类的内部的成员，或者友元才可以访问\n“protect”（保护部分）：类似“private”，只有类的内部成员以及友元或子类才可以调用\nPS：1.友元即与原有的类是并列关系的函数，子类则是继承了原有类的新类。（这里不做深究）\n2.友元的权限比子类高（你的兄弟比你的儿子重要）")]),t._v(" "),n("ol",[n("li",[t._v("public, protected, private被称为"),n("strong",[t._v("段约束符")]),t._v("，可多次使用，未说明的成员都默认为private")]),t._v(" "),n("li",[t._v("成员可包括"),n("strong",[t._v("数据成员")]),t._v("和"),n("strong",[t._v("函数成员")])]),t._v(" "),n("li",[t._v("声明的大括号最后要接分号；")]),t._v(" "),n("li",[t._v("一个成员只能有一种访问属性\n例子")])]),t._v(" "),n("div",{staticClass:"language-c++ extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("class Clock{\n\tint hour, minute, second;\n\tvoid SetTime(int h, int m, int s);//为何不用全称\n\tvoid ShowTime();\n};\nh,*h?\n\tvoid Clock::Showtime(), Clock::ShowTime?\n")])])]),n("p",[t._v("[注]:\n类可以先声明，再定义，但是，在未给出完整定义之前，不可将类实例化")]),t._v(" "),n("h3",{attrs:{id:"_2-类的实现"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-类的实现"}},[t._v("#")]),t._v(" 2. 类的实现")]),t._v(" "),n("p",[t._v("实现一个类，就是实现类中的每一个成员函数\n成员函数的定义有两种方式：类内定义和类外定义\n类内：和一般定义方式相同\n类外：函数返回类型+类名+ :: +函数名+函数定义")]),t._v(" "),n("ol",[n("li",[t._v("函数成员的实现可以在类内实现，也可以只在类内声明函数原型，在类外定义")]),t._v(" "),n("li",[t._v("在类内实现成员函数，函数按照内联函数处理；在类外实现函数时，需要用类的作用域分辨符::")]),t._v(" "),n("li",[t._v("类内实现函数时，注意不能既出现函数定义，又出现函数原型")]),t._v(" "),n("li",[t._v("对于成员函数的实现，要注意其不遵循传统的C的函数的工作原理，因为成员函数是可以直接访问和修改本类中的数据成员的，而非在一块单独的内存中自顾自得实现功能")])])])}),[],!1,null,null,null);n.default=s.exports}}]);