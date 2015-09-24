var environment = (function(){
	function setEnv(){
		var env = "prod";//test; // or dev
		return env;
	}
	return{
		getEnv :setEnv
	}
})()