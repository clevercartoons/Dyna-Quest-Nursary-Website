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

import initFilter from "./modules/filter";
import { drawTeamPopup } from "./modules/modal";

document.addEventListener('DOMContentLoaded', () => {
    drawTeamPopup();
    initFilter('.list_SMS', '.list_tags-tag', {
        itemSelector: '.list_SMS-card'
    });
})