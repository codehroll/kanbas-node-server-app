import model from "./model.js";

// 查询特定课程的所有 Quizzes
export function findQuizzesForCourse(courseId) {
  return model.find({ course: courseId });
}

// 创建新的 Quiz
export function createQuiz(quiz) {
  console.log("quiz, ", quiz);
  delete quiz._id; // 删除前端可能带来的 _id
  return model.create(quiz);
}

// 删除指定 Quiz
export function deleteQuiz(quizId) {
  return model.deleteOne({ _id: quizId });
}

// 更新指定 Quiz
export function updateQuiz(quizId, quizUpdates) {
  return model.updateOne({ _id: quizId }, { $set: quizUpdates });
}

// 查询所有 Quizzes（可选）
export function findAllQuizzes() {
  return model.find();
}

// 查询单个 Quiz
export function findQuizById(quizId) {
  return model.findById(quizId);
}
