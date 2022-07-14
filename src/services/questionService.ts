import { Questions } from '@prisma/client';

import questionRepository from '../repositories/questionRepository.js';

const questionService = {createQuestion, getQuestions, getQuestionByIdWithAnswer};
export default questionService;

export type CreateQuestionData = Omit<Questions, 'id'>;

async function createQuestion(createQuestion: CreateQuestionData) {
  return await questionRepository.insert(createQuestion);
}

async function getQuestions() {
  return await questionRepository.findAll();
}

async function getQuestionByIdWithAnswer(id: string) {
  const questionId = parseInt(id);
  return await questionRepository.findById(questionId);
}