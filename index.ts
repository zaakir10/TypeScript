// 1. UserRole Enum Usage

enum UserRole {
  SuperAdmin = "superadmin",
  Moderator = "moderator",
  Viewer = "viewer"
}

function canEdit(role: UserRole): boolean {
  return role !== UserRole.Viewer;
}

// Test roles
console.log(canEdit(UserRole.SuperAdmin)); // true
console.log(canEdit(UserRole.Moderator)); // true
console.log(canEdit(UserRole.Viewer)); // false



// 2. Type Assertion with "as"

// HTML Example:
// <button id="saveBtn">Save</button>

const button = document.querySelector(
  "#saveBtn"
) as HTMLButtonElement;

button.disabled = true;