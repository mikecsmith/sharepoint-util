"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.substr(1);
}
exports.capitalize = capitalize;
function lowerize(str) {
    return str.charAt(0).toLowerCase() + str.substr(1);
}
exports.lowerize = lowerize;
function removeSpaces(str) {
    return str.replace(/[\s]+/g, '');
}
exports.removeSpaces = removeSpaces;
function parenthesize(str) {
    return `{${str}}`;
}
exports.parenthesize = parenthesize;
function getAttr(field, ...fieldNames) {
    var name = null;
    var val = fieldNames.find((e, i) => {
        return ((name = e) && typeof field[name] !== "undefined") ||
            ((name = e.toLowerCase()) && typeof field[name] !== "undefined") ||
            ((name = lowerize(e)) && typeof field[lowerize(e)] !== "undefined") ||
            ((name = capitalize(e)) && typeof field[capitalize(e)] !== "undefined") ||
            ((name = e.toUpperCase()) && typeof field[e.toUpperCase()] !== "undefined");
    });
    if (val) {
        return field[name];
    }
    return undefined;
}
exports.getAttr = getAttr;
function hasAttr(field, ...fieldNames) {
    var found = fieldNames.find((e, i) => {
        return typeof field[e] !== "undefined" ||
            typeof field[e.toLowerCase()] !== "undefined" ||
            typeof field[lowerize(e)] !== "undefined" ||
            typeof field[capitalize(e)] !== "undefined" ||
            typeof field[e.toUpperCase()] !== "undefined";
    });
    if (found) {
        return true;
    }
    return false;
}
exports.hasAttr = hasAttr;
function isString(val) {
    return typeof val === 'string';
}
exports.isString = isString;
function isObject(val) {
    return typeof val === "object";
}
exports.isObject = isObject;
function hasItems(obj, key) {
    var val = (obj && getAttr(obj, key));
    return (val && val.length > 0) ? true : false;
}
exports.hasItems = hasItems;