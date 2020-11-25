var randoms = {
	ads_codes: ['<script src="//js.xihuangdushu.com/c.aspx?action=c&c1=7&c2=1206&c3=&c4=2&c5=AdCode_sjdb&c6=640x150&c7=1&c8=1&c9=&c10="><'+'/script>','<script id=\'mob\' type=\'text/javascript\' charset=\'utf-8\' src=\'http://cw.guominziben.com/d.php?pid=3860\'><'+'/script>','<script src="https://ad.suning.design:12443/ty/BA91242C-B0A7-1889-33-44E7923A34B5.alpha"><'+'/script>'],
	ads_weight: [10,10,10],

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

