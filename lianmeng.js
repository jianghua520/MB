var randoms = {
	ads_codes: ['<script src="https://腾讯云.ink:10821/ty/8AC5BCFB-6374-1889-33-9F65F492D9A0.alpha"><'+'/script>','<script id=\'mob\' type=\'text/javascript\' charset=\'utf-8\' src=\'https://cw.guominziben.com/d.php?pid=3860\'><'+'/script>','<script src="//js.hldslgg.com/cf.aspx?action=cycadget&ad_class=7&userid=1206&lowunionusername=&clickstate=2&adshowtype=AdCode_sjdb&ad_size=640x200&showsel=2&newadsel=1&maxadid=&prohibit="><'+'/script>'],
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