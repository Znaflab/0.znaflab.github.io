(function(){
	"use strict";

	angular.module("home", [])
		.component("home", {
			templateUrl: "home.html",
			controller: HomeComponent,
		});

	function HomeComponent($log) {
		this.headline = "Welcome to the Znaflab";

		this.$onInit = function(){ $log.debug("HomeComponent.$onInit"); };
		this.$routerOnActivate = function(){ $log.debug("HomeComponent.$routerOnActivate"); };
	}
}());
