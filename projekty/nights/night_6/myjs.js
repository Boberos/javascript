

var kamil = (function(){
	var DEFAULTS = {
			defaults: '',
			say: 'hello',
			speed: 'normal'
	}
	
	return {
		
		speak: function(){
			var myArg = arguments[0] || DEFAULTS.defaults;
			var statment = myArg.say || DEFAULTS.say;
			console.log(statment);
			return this;
		},
		run: function(){
			var myArg = arguments[0] || DEFAULTS.defaults;
			var run = myArg.speed || DEFAULTS.speed;
			console.log('running '+ run);
			return this;
		}
	};
	
})();