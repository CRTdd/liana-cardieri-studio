// This is an AI-powered question answering flow that summarizes website information to provide informed answers to patient questions.

'use server';

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AnswerQuestionsInputSchema = z.object({
  question: z.string().describe('The question asked by the patient.'),
  context: z.string().optional().describe('Additional context from the website the user has viewed.'),
});
export type AnswerQuestionsInput = z.infer<typeof AnswerQuestionsInputSchema>;

const AnswerQuestionsOutputSchema = z.object({
  answer: z.string().describe('The AI-generated answer to the patient question.'),
});
export type AnswerQuestionsOutput = z.infer<typeof AnswerQuestionsOutputSchema>;

export async function answerQuestions(input: AnswerQuestionsInput): Promise<AnswerQuestionsOutput> {
  return answerQuestionsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'answerQuestionsPrompt',
  input: {
    schema: AnswerQuestionsInputSchema,
  },
  output: {
    schema: AnswerQuestionsOutputSchema,
  },
  prompt: `You are an AI assistant providing information about dental services.

  Answer the following question using the context provided.
  If the answer is not in the context, say you do not have enough information to answer the question.

  Question: {{{question}}}

  Context: {{{context}}}
  `,
});

const answerQuestionsFlow = ai.defineFlow(
  {
    name: 'answerQuestionsFlow',
    inputSchema: AnswerQuestionsInputSchema,
    outputSchema: AnswerQuestionsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
