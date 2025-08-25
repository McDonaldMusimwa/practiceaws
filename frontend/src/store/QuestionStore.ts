import { create } from "zustand";
import type { QuestionType, AnsweredQuestionType } from "../types/QuestionType";

interface QuestionStore {
  questions: QuestionType[];
  loadQuestions: (questions: QuestionType[]) => void;
  resetQuestion: () => void;
}

interface AnsweredQuestionsStore {
  answeredquestions: AnsweredQuestionType[];
  saveAnsweredQuestions: (answeredquestion: AnsweredQuestionType) => void;
  resetAnsweredQuestions: () => void;
  
}

export const useQuestionStore = create<QuestionStore>((set) => ({
  questions: [],
  loadQuestions: (questions: QuestionType[]) => set({ questions }),
  resetQuestion: () => set({ questions: [] }),
}));

export const useAnsweredQuestions = create<AnsweredQuestionsStore>((set) => ({
  answeredquestions: [],
  saveAnsweredQuestions: (answeredquestion: AnsweredQuestionType) =>
    set((state) => ({
      answeredquestions: [...state.answeredquestions, answeredquestion],
    })),

     resetAnsweredQuestions: () => set({ answeredquestions: [] }),
}));
