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

document.addEventListener("DOMContentLoaded", function () {

	headerFix();

	setSliders();

	popups();

	smoothScrollToElement()

	watchMoreBtnSentProd()

	mapActive()

	animation()

	fotorama()

	formHandler()


});