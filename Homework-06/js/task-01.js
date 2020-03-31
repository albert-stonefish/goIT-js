"use strict";
console.log("task_01");

import users from "./users.js";

const getUserNames = users => {
  const userNames = [];
  users.forEach(function(users) {
    userNames.push(users.name);
  });
  return userNames;
};
console.log(getUserNames(users));

console.log("...");
console.log("task_02");

const getUsersWithEyeColor = (users, color) => {
  return users.filter(users => users.eyeColor === color);
};
console.log(getUsersWithEyeColor(users, "blue"));

console.log("...");
console.log("task_03");

const getUsersWithGender = (users, gender) => {
  const userNames = [];
  users.forEach(function(users) {
    if (users.gender === gender) {
      userNames.push(users.name);
    }
  });
  return userNames;
};
console.log(getUsersWithGender(users, "male"));

console.log("...");
console.log("task_04");

const getInactiveUsers = users => {
  return users.filter(users => !users.isActive);
};
console.log(getInactiveUsers(users));

console.log("...");
console.log("task_05");

const getUserWithEmail = (users, email) => {
  return users.find(users => users.email === email);
};
console.log(getUserWithEmail(users, "shereeanthony@kog.com"));
console.log(getUserWithEmail(users, "elmahead@omatom.com"));

console.log("...");
console.log("task_06");

const getUsersWithAge = (users, min, max) => {
  return users.filter(users => min < users.age && users.age < max);
};
console.log(getUsersWithAge(users, 20, 30));
console.log(getUsersWithAge(users, 30, 40));

console.log("...");
console.log("task_07");

const calculateTotalBalance = users => {
  return users.reduce((total, users) => total + users.balance, 0);
};
console.log(calculateTotalBalance(users));

console.log("...");
console.log("task_08");

const getUsersWithFriend = (users, friendName) => {
  const userNames = [];
  users.forEach(function(users) {
    if (users.friends.includes(friendName)) {
      userNames.push(users.name);
    }
  });
  return userNames;
};
console.log(getUsersWithFriend(users, "Briana Decker"));
console.log(getUsersWithFriend(users, "Goldie Gentry"));

console.log("...");
console.log("task_09");

const getNamesSortedByFriendsCount = users => {
  const userNames = [];
  users.sort((a, b) => a.friends.length - b.friends.length);
  users.forEach(users => userNames.push(users.name));
  return userNames;
};
console.log(getNamesSortedByFriendsCount(users));

console.log("...");
console.log("task_10");

const getSortedUniqueSkills = users => {
  let totalSkills = [];
  const uniqueSkills = [];
  users.forEach(users => (totalSkills = totalSkills.concat(users.skills)));
  totalSkills.forEach(totalSkills => {
    if (!uniqueSkills.includes(totalSkills)) {
      uniqueSkills.push(totalSkills);
    }
  });
  uniqueSkills.sort();
  return uniqueSkills;
};
console.log(getSortedUniqueSkills(users));
// [ 'adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex', 'ipsum', 'irure', 'laborum', 'lorem', 'mollit', 'non', 'nostrud', 'nulla', 'proident', 'tempor', 'velit', 'veniam' ]

console.log("...");
