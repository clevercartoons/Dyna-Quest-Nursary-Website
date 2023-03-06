/**
 * Dyna Quest
 * Dyna Quest is an Online Education Website Template Kit
 * Exclusively on https://1.envato.market/Dyna Quest-html
 *
 * @encoding        UTF-8
 * @version         1.0.0
 * @copyright       (C) 2018 - 2022 A. KOMANE ( https://merkulov.design/ ). All rights reserved.
 * @license         Envato License https://1.envato.market/KYbje
 * @contributors    Lamber Lilith (winter.rituel@gmail.com)
 * @support         help@merkulov.design
 **/
"use strict";

import simpleParallax from 'simple-parallax-js';

export function setParallax() {
    const targetElems = document.querySelectorAll('.parallax')
    new simpleParallax(targetElems, {scale: 1.1});
}
