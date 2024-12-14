import RecordModel from "./model.js";

// 创建记录
export const createRecord = async (record) => {
  console.log("Creating record with data:", record);
  return RecordModel.create(record);
};

// 获取某个 Quiz 的所有记录
export const findRecordsForQuiz = async (quizId) => {
  console.log("Finding records for quizId:", quizId);
  const records = await RecordModel.find({ quizId: quizId.toString() });
  console.log("Found records for quizId:", records);
  return records;
};

// 获取某个 User 的所有记录
export const findRecordsForUser = async (userId) => {
  console.log("Finding records for userId");
  const records = await RecordModel.find({ userId: userId.toString() });
  console.log("Found records for userId:", records);
  return records;
};

// 获取某个 Quiz 下某个用户的所有记录
export const findRecordsForQuizAndUser = async (quizId, userId) => {
  console.log("Finding records for quizId, ", quizId, " and userId, ", userId);

  const records = await RecordModel.find({
    quizId: quizId.toString(),
    userId: userId.toString(),
  });
  
  console.log("Found records for quizId and userId", records);
  return records;
};

// 删除记录
export const deleteRecord = async (recordId) => {
  console.log("Deleting record with recordId:", recordId);
  const result = await RecordModel.deleteOne({ _id: recordId });
  console.log("Delete result:", result);
  return result;
};
