"use strict";
var Page = (function () {
    //Define the basic contruct of a Hal response with pagination for the page object
    function Page(size, totalElements, totalPages, number) {
        this.size = size;
        this.totalElements = totalElements;
        this.totalPages = totalPages;
        this.number = number;
    }
    return Page;
}());
exports.Page = Page;
