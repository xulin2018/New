$(".focusbox").slide ({
//    focusbox对应HTMLL 里执行动画部分的包裹层
    titCell: ".hd li",
//    标题部分，鼠标的触发对象 精确到列表
    mainCell: ".bd",
//    内容部分，切换的图片，只需要包裹层
    autoPlay: true,
//      自动运行
    deleteTime: 1000,
//    特效切换的持续时间，一次切换效果执行所用的时间长度
    interTime: 2000,
//    特效切换的间隔时间2秒，自动运行间隔 无缝滚动时相当于运行速度
    effect: "leftLoop"
    //    动画效果向左循环, 最后一个不需要逗号
})


//租车流程 新闻动态
$(".process-new").slide ({
    mainCell: "ul", 
    autoPlay: true,
    effect: "topMarquee",
    vis: 5,
    interTime: 50
});



//租车展示
$(".center-show").slide ({
    mainCell: ".show-list",          
    deleteTime: 1000,
    interTime: 1000,
    effect: "leftLoop",
    autoPlay: true,
    vis:4 ,
    scroll:1
});


//客户案例
$(".center-case").slide ({
    mainCell: ".case-img",          
    deleteTime: 1000,
    interTime: 1000,
    effect: "leftLoop",
    autoPlay: true,
    vis:4 ,
    scroll:1
});




