// import Database from "../Database/index.js";
import mongoose from "mongoose";
import model from "./model.js";
export function findModulesForCourse(courseId) {
  return model.find({ course: courseId });
  // const { modules } = Database;
  // return modules.filter((module) => module.course === courseId);
}

export function createModule(module) {
  // delete module._id;
  const newModule = model.create(module);
  console.log("create current module: ", newModule._id);
  return newModule;
  // const newModule = { ...module, _id: Date.now().toString() };
  // Database.modules = [...Database.modules, newModule];
  // return newModule;
}

export function deleteModule(moduleId) {
  // const curModuleObjectId = new mongoose.Types.ObjectId(moduleId);
  console.log("delete current module: ", moduleId);
  return model.deleteOne({ _id: moduleId });
  // const { modules } = Database;
  // Database.modules = modules.filter((module) => module._id !== moduleId);
}

export function updateModule(moduleId, moduleUpdates) {
  console.log("update current module: ", moduleId);
  // const curModuleObjectId = new mongoose.Types.ObjectId();
  // curModuleObjectId = mongoose.Types.ObjectId(moduleId);
  return model.updateOne({ _id: moduleId }, moduleUpdates);
  // const { modules } = Database;
  // const module = modules.find((module) => module._id === moduleId);
  // Object.assign(module, moduleUpdates);
  // return module;
}
