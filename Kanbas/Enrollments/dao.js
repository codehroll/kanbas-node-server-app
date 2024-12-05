// import Database from "../Database/index.js";
import model from "./model.js";
export async function findCoursesForUser(userId) {
  const enrollments = await model.find({ user: userId }).populate("course");
  return enrollments.map((enrollment) => enrollment.course);
}
export async function findUsersForCourse(courseId) {
  const enrollments = await model.find({ course: courseId }).populate("user");
  return enrollments.map((enrollment) => enrollment.user);
}
export function enrollUserInCourse(user, course) {
  return model.create({ user, course });
}
export function unenrollUserFromCourse(user, course) {
  return model.deleteOne({ user, course });
}

export async function findEnrollmentsForUser(userId) {
  // const { enrollments } = Database;
  // const curUserEnrollments = enrollments.filter(
  //   (enrollment) => enrollment.user === userId
  // );
  const curUserEnrollments = await model
    .find({ user: userId })
    .populate("course");
  return curUserEnrollments;
}

// export function enrollUserInCourse(userId, courseId) {
//   const { enrollments } = Database;
//   enrollments.push({ _id: Date.now(), user: userId, course: courseId });
// }

// export function unEnrollUserInCourse(userId, courseId) {
//   const { enrollments } = Database;
//   Database.enrollments = enrollments.filter(
//     (enrollment) => enrollment.user !== userId || enrollment.course !== courseId
//   );
// }
