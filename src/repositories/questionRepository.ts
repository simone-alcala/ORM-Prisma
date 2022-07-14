import { Answers } from '@prisma/client';
import{ prisma } from '../config/database.js';


import { CreateQuestionData } from '../services/questionService.js';

async function findAll() {
  return await prisma.questions.findMany();
}

async function findById(id: number) {
  return await prisma.questions.findMany({
    where: { id },
    include : {
      answer : true
    }
  })
}

async function insert(createQuestion: CreateQuestionData ) {
  await prisma.questions.create( { data: createQuestion } );
}

export default {
  findAll,
  findById,
  insert
}