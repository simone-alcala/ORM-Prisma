import { Answers } from '@prisma/client';

const answerService = {createAnswer};
export default answerService;

import answerRepository from '../repositories/answerRepository.js';

export type CreateAnswerData = Omit<Answers, 'id'>;

async function createAnswer(createAnswer: CreateAnswerData) {
  return await answerRepository.insert(createAnswer);
}
