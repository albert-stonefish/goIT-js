"use strict";
import users from "./users.js";

console.log("task_01");

const getUserNames = (users) => users.map(({ name }) => name);
console.log(getUserNames(users));

console.log("...");
console.log("task_02");

const getUsersWithEyeColor = (users, color) =>
  users.filter(({ eyeColor }) => eyeColor === color);

console.log(getUsersWithEyeColor(users, "blue"));

console.log("...");
console.log("task_03");

const getUsersWithGender = (users, gender) => {
  return users.filter((name) => name.gender === gender).map(({ name }) => name);
};
console.log(getUsersWithGender(users, "male"));

console.log("...");
console.log("task_04");

const getInactiveUsers = (users) => {
  return users.filter(({ isActive }) => !isActive);
};
console.log(getInactiveUsers(users));

console.log("...");
console.log("task_05");

const getUserWithEmail = (users, email) => {
  return users.find(({ email }) => email === email);
};
console.log(getUserWithEmail(users, "shereeanthony@kog.com"));
console.log(getUserWithEmail(users, "elmahead@omatom.com"));

console.log("...");
console.log("task_06");

const getUsersWithAge = (users, min, max) => {
  return users.filter(({ age }) => min < age && age < max);
};
console.log(getUsersWithAge(users, 20, 30));
console.log(getUsersWithAge(users, 30, 40));

console.log("...");
console.log("task_07");

const calculateTotalBalance = (users) => {
  return users.reduce((total, { balance }) => total + balance, 0);
};
console.log(calculateTotalBalance(users));

console.log("...");
console.log("task_08");

const getUsersWithFriend = (users, friendName) => {
  return users
    .filter((user) => user.friends.includes(friendName))
    .map(({ name }) => name);
};
console.log(getUsersWithFriend(users, "Briana Decker"));
console.log(getUsersWithFriend(users, "Goldie Gentry"));

console.log("...");
console.log("task_09");

const getNamesSortedByFriendsCount = (users) => {
  return users
    .sort((a, b) => a.friends.length - b.friends.length)
    .map(({ name }) => name);
};
console.log(getNamesSortedByFriendsCount(users));

console.log("...");
console.log("task_10");

const getSortedUniqueSkills = (users) => {
  let uniqueSkills = [];
  users
    .reduce(
      (allSkills, user) => (allSkills = [...allSkills, ...user.skills]),
      []
    )
    .map((allSkills) => {
      if (!uniqueSkills.includes(allSkills)) {
        uniqueSkills = [...uniqueSkills, allSkills];
      }
    });
  uniqueSkills.sort();
  return uniqueSkills;
};
console.log(getSortedUniqueSkills(users));

console.log("...");
