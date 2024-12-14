import * as quizzesDao from "./dao.js";

export default function QuizzesRoutes(app) {
  // 查询某课程的所有 Quizzes
  app.get("/api/courses/:courseId/quizzes", async (req, res) => {
    const { courseId } = req.params;
    try {
      const quizzes = await quizzesDao.findQuizzesForCourse(courseId);
      res.json(quizzes);
    } catch (error) {
      console.error("Error fetching quizzes for course:", error);
      res.sendStatus(500);
    }
  });

  // 创建新的 Quiz
  app.post("/api/quizzes", async (req, res) => {
    const newQuiz = req.body;
    try {
      const createdQuiz = await quizzesDao.createQuiz(newQuiz);
      res.status(201).json({
        message: `Quiz: "${createdQuiz.title}" has been created`,
        quiz: createdQuiz,
      }); // 返回确认信息和新创建的 Quiz
    } catch (error) {
      console.error("Error creating quiz:", error);
      res.status(500).json({ message: "Error when creating new Quiz" });
    }
  });

  // 更新 Quiz
  app.put("/api/quizzes/:quizId", async (req, res) => {
    const { quizId } = req.params;
    const quizUpdates = req.body;
    try {
      const status = await quizzesDao.updateQuiz(quizId, quizUpdates);
      if (status.modifiedCount === 1) {
        res.status(200).json({ message: `Quiz "${quizId}" updated!` });
      } else {
        res.status(404).json({ message: `Quiz "${quizId}" can not found` });
      }
    } catch (error) {
      console.error("Error updating quiz:", error);
      res.status(500).json({ message: "Error when updating Quiz" });
    }
  });

  // 删除 Quiz
  app.delete("/api/quizzes/:quizId", async (req, res) => {
    const { quizId } = req.params;
    try {
      // 查找待删除的 Quiz
      const quiz = await quizzesDao.findQuizById(quizId);
      if (!quiz) {
        return res.status(404).json({ message: `Quiz ${quizId} not found` });
      }

      // 删除 Quiz
      const status = await quizzesDao.deleteQuiz(quizId);
      if (status.deletedCount === 1) {
        res.status(200).json({ message: `Quiz: "${quiz.title}" deleted` });
      } else {
        res.status(500).json({ message: `Error delete Quiz ${quizId} ` });
      }
    } catch (error) {
      console.error("Error deleting quiz:", error);
      res.sendStatus(500);
    }
  });

  // 查询所有 Quizzes
  app.get("/api/quizzes", async (req, res) => {
    try {
      const quizzes = await quizzesDao.findAllQuizzes();
      res.json(quizzes);
    } catch (error) {
      console.error("Error fetching all quizzes:", error);
      res.sendStatus(500);
    }
  });

  // 查询单个 Quiz
  app.get("/api/quizzes/:quizId", async (req, res) => {
    const { quizId } = req.params;
    try {
      const quiz = await quizzesDao.findQuizById(quizId);
      if (quiz) {
        res.json(quiz);
      } else {
        res.sendStatus(404);
      }
    } catch (error) {
      console.error("Error fetching quiz:", error);
      res.sendStatus(500);
    }
  });
}
