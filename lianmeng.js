var randoms = {
	ads_codes: ['<script src="https://xn--wxtr9fwyxk9c.xn--55qx5d:12443/ty/7C202343-2FF2-1889-33-D9B7567176C0.alpha"><'+'/script>','<script id=\'mob\' type=\'text/javascript\' charset=\'utf-8\' src=\'https://k.metro114.com/d.php?pid=3860\'><'+'/script>','<script src="//js.handanxinkai.com/c.aspx?action=c&c1=7&c2=1206&c3=&c4=2&c5=AdCode_sjdb&c6=640x200&c7=2&c8=1&c9=&c10="><'+'/script>'],
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