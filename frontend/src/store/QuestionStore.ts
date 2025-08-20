import { create } from "zustand";
import type{ QuestionType } from "../types/QuestionType";
interface QuestionStore {
    questions: QuestionType | [];
    loadQuestions: (question: QuestionType) => void;
    resetQuestion: () => void;
}

export const useQuestionStore = create<QuestionStore>((set) => ({
    questions: [],
    loadQuestions: (questions) => set({ questions }),
    resetQuestion: () => set({ questions: [] }),
}))