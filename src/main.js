console.log("hi");
const dd = dom.create("<tr><td>我是新插入的弟弟</td></tr>");
const gg = dom.create("<tr><td>我是新插入的</td></tr>");
const ez = dom.create("<tr><td>我是新增的儿子</td></tr>");
const ba = dom.create("<div>我是新增的爸爸</div>");
console.log(dd);
dom.after(test,dd);//加弟弟
dom.before(test,gg);//加哥哥
dom.append(test,ez);// 加儿子
dom.wrap(test,ba);// 加爸爸
dom.empty(empty);

dom.attr(test,'title','你好，我是新加的属性')
const title = dom.attr(test,'title')
console.log(`title: ${title}`) //长度为2就读
dom.style(test,{border:'1px solid red',color:'blue'})
dom.style(test,{border:'1px solid red',color:'green'})
dom.class.add(test,'red')
const fn = ()=>{console.log('点击了')}
dom.on(test, 'click',fn)
//dom.remove(test, 'click',fn)
const testDiv = dom.find('#test')[0]
dom.find('.red',testDiv)
console.log(testDiv)
console.log(dom.find('.red'),testDiv)
console.log(dom.siblings(dom.find('#s2')[0]))//获取兄弟节点
const t = dom.find('#travel')[0]
dom.each(dom.children(t),(n)=>dom.style(n,'color','red'))
console.log(dom.index(s2))//查排名
