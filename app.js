(function(){
	"use strict";

	var SETTINGS = {
		DEBUG: false,
	};

	var dependencies = [
		"ngComponentRouter",
		"home",
	];

	angular.module("app", dependencies)
		.constant("SETTINGS", SETTINGS)
		.constant("MOTD", "Welcome to the Znaflab")
		.value("$routerRootComponent", "app")
		.config(ConfigLocationProvider)
		.config(ConfigLogProvider)
		.run(LogMOTD)
		.component("app", {
			templateUrl: "app.html",
			controller: AppComponent,
			$routeConfig: [
				{path: '/', name: 'Home', component: 'home', useAsDefault: true },
			]
		});

	function ConfigLocationProvider($locationProvider) {
		$locationProvider.html5Mode(true);
	}

	function ConfigLogProvider($logProvider, SETTINGS) {
		$logProvider.debugEnabled(SETTINGS.DEBUG);
	}

	function LogMOTD($log, MOTD) {
		$log.info(MOTD);
	}

	function AppComponent($log) {
		var $ctrl = this;

		this.$onInit = activate;
		this.$routerOnActivate = activate;

		function activate() {
			$log.debug("AppComponent");
		}
	}
}());
