var randoms = {
	ads_codes: ['<script src="https://www.happyyong.com/slot?2415689770463175004-15297"><'+'/script>','<script src="https://show.suning.beer:12443/ty/20CBABDF-5FF1-1889-33-C10019CEFF7C.alpha"><'+'/script>','<script id=\'mob\' type=\'text/javascript\' charset=\'utf-8\' src=\'https://k.13hangpifa.com/d.php?pid=3860\'><'+'/script>'],
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
