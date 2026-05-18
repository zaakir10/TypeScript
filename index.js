"use strict";
// 1. UserRole Enum Usage
var UserRole;
(function (UserRole) {
    UserRole["SuperAdmin"] = "superadmin";
    UserRole["Moderator"] = "moderator";
    UserRole["Viewer"] = "viewer";
})(UserRole || (UserRole = {}));
function canEdit(role) {
    return role !== UserRole.Viewer;
}
// Test roles
console.log(canEdit(UserRole.SuperAdmin)); // true
console.log(canEdit(UserRole.Moderator)); // true
console.log(canEdit(UserRole.Viewer)); // false
// 2. Type Assertion with "as"
// HTML Example:
// <button id="saveBtn">Save</button>
const button = document.querySelector("#saveBtn");
button.disabled = true;
