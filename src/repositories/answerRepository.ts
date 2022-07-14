import{ prisma } from '../config/database.js';

import { CreateAnswerData } from '../services/answerService.js';

async function insert(createAnswer: CreateAnswerData ) {
  await prisma.answers.create( { data: createAnswer } );
}

export default {
  insert
}