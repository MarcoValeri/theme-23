// Layouts
import navigation from "../../components/layout/navigation/_navigation.js";

// Components
import guides from "../../components/template/guides/guides.js";
import textblock from "../../components/template/testblock/testblock.js";

const $ = jQuery;

$(document).ready(function($) {
    navigation();
    guides();
    textblock()
});
