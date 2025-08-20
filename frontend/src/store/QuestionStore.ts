import { create } from "zustand";
import type { QuestionType, AnsweredQuestionType } from "../types/QuestionType";

interface QuestionStore {
  questions: QuestionType[]; // Use array type
  loadQuestions: (questions: QuestionType[]) => void;
  resetQuestion: () => void;
}

interface AnsweredQuestionsStore {
  answeredquestions: AnsweredQuestionType[]; // Use array type
  saveAnsweredQuestions: (answeredquestions: AnsweredQuestionType) => void;
  // This function will now add a single answered question
}

export const useQuestionStore = create<QuestionStore>((set) => ({
  questions: [],
  loadQuestions: (questions) => set({ questions }),
  resetQuestion: () => set({ questions: [] }),
}));

export const useAnsweredQuestions = create<AnsweredQuestionsStore>((set) => ({
  answeredquestions: [],
  saveAnsweredQuestions: (answeredquestion) =>
    set((state) => ({
      // Use the spread operator to add the new answered question to the existing array
      answeredquestions: [...state.answeredquestions, answeredquestion],
    })),
}));