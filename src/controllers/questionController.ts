import { Request, Response } from "express";
import answerService from "../services/answerService.js";
import questionService  from "../services/questionService.js";

export async function create(req: Request, res: Response) {
  const { question } = req.body;
  await questionService.createQuestion({question});
  res.sendStatus(201);
}

export async function answer(req: Request, res: Response) {
  const { id } = req.params;
  const { answer } = req.body;
  await answerService.createAnswer( { answer , questionId: parseInt(id) } );
  res.sendStatus(201);
}

export async function get(req: Request, res: Response) {
  const questions = await questionService.getQuestions();
  res.status(200).send(questions);
}

export async function getById(req: Request, res: Response) {
  const { id } = req.params;
  const questions = await questionService.getQuestionByIdWithAnswer(id);
  res.status(200).send(questions);
}
