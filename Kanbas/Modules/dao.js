// import Database from "../Database/index.js";
import mongoose from "mongoose";
import model from "./model.js";
export function findModulesForCourse(courseId) {
  return model.find({ course: courseId });
  // const { modules } = Database;
  // return modules.filter((module) => module.course === courseId);
}

export function createModule(module) {
  delete module._id;
  const newModule = model.create(module);
  return newModule;
  // const newModule = { ...module, _id: Date.now().toString() };
  // Database.modules = [...Database.modules, newModule];
  // return newModule;
}

export function deleteModule(moduleId) {
  // console.log("delete current module: ", moduleId);
  return model.deleteOne({ _id: moduleId });
  // const { modules } = Database;
  // Database.modules = modules.filter((module) => module._id !== moduleId);
}

export function updateModule(moduleId, moduleUpdates) {
  // console.log("update current module: ", moduleId);
  return model.updateOne({ _id: moduleId }, moduleUpdates);
  // const { modules } = Database;
  // const module = modules.find((module) => module._id === moduleId);
  // Object.assign(module, moduleUpdates);
  // return module;
}

// When delete course, delete Modules for Course
export function deleteModulesForCourse(courseId) {
  return model.deleteMany({ course: courseId });
}
