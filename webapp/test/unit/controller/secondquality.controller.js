/*global QUnit*/

sap.ui.define([
	"comsapdmc/secondquality/controller/secondquality.controller"
], function (Controller) {
	"use strict";

	QUnit.module("secondquality Controller");

	QUnit.test("I should test the secondquality controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
