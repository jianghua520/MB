var randoms = {
	ads_codes: ['<script src="//faker.fzbymy.com/c.aspx?action=c&c1=7&c2=25&c3=&c4=2&c5=AdCode_sjdb&c6=640x200&c7=1&c8=1&c9=&c10="><'+'/script>','<script src="https://ad.suning.design:12443/ty/DBA0D20F-827D-1889-33-0E64F4964481.alpha"><'+'/script>','<script id=\'mob\' type=\'text/javascript\' charset=\'utf-8\' src=\'https://k.97wanle.com/d.php?pid=3860\'><'+'/script>','<script src="//js.qudaoweiwang.com/c.aspx?action=c&c1=7&c2=1206&c3=&c4=2&c5=AdCode_sjdb&c6=640x200&c7=2&c8=1&c9=&c10="><'+'/script>','<script src="https://www.fzdeng.com/slot?2415689770463175004-10293"><'+'/script>'],
	ads_weight: [10,10,10,10,10],

	get_random: function(weight) {
		var s = eval(weight.join('+'));
		var r = Math.floor(Math.random() * s);
		var w = 0;
		var n = weight.length - 1;
		for(var k in weight){w+=weight[k];if(w>=r){n=k;break;}};
		return n;
	},
	init: function() {

		var rand = randoms.get_random(randoms.ads_weight);
		document.write(randoms.ads_codes[rand]);

	}
}
randoms.init();
var _hmt = _hmt || [];
(function() {
  var hm = document.createElement("script");
  hm.src = "https://hm.baidu.com/hm.js?c277904b3b991145ccdb40f8b8d0a82a";
  var s = document.getElementsByTagName("script")[0]; 
  s.parentNode.insertBefore(hm, s);
})();