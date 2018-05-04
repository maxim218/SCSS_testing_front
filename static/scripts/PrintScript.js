"use strict";

const STR_CONST = ") ";

export default class PrintScript {
    constructor(number, content) {
        this.number = number;
        this.content = content;
    }

    printMethod() {
        console.log(this.number.toString() + STR_CONST + this.content);
    }
}
