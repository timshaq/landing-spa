"use strict";

import headerFix from './headerFix';
import setSliders from './sliders';
import popups from './popups';
import smoothScrollToElement from './smoothScrollToElement';
import watchMoreBtnSentProd from './watchMoreBtnSentProd';
import mapActive from './mapActive';
import animation from './animation';
import fotorama from './fotorama';
import formHandler from './formHandler';
import webpTest from './webpTest';
import loadProducts from './loadProducts';

	webpTest();

document.addEventListener("DOMContentLoaded", function () {

	headerFix();

	smoothScrollToElement();

	setSliders();

	watchMoreBtnSentProd();

	animation();

	fotorama();

	mapActive();

	popups();

	formHandler();


});

window.onload = function() {
	loadProducts();
}