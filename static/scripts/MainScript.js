"use strict";

import "./../mainStyle.scss";

import PrintScript from "./PrintScript";

class MainScript {
    constructor() {
        for(let i = 0; i < 10; i++) {
            new PrintScript(i, "Hello world").printMethod();
        }
    }
}

window.onload = function() {
    new MainScript();
};
