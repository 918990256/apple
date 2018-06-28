$(function(){
	let lis=$(".fttopmin>ul>li");
	lis.click(function(){
		$(this).css({"height":"auto"}).children(".ftbox").toggleClass("none"),
		$(this).find("i").toggleClass("hot")
	})
})