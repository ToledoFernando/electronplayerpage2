export interface IQuestions {
  question: string;
  answer: string;
}

export interface IFormData {
  name: string;
  email: string;
  message: string;
}

export interface IFormDataError {
  name: boolean;
  email: boolean;
  message: boolean;
}

export const initialFormDataError = {
  name: false,
  email: false,
  message: false,
} as IFormDataError;

export const initialFormData = {
  name: "",
  email: "",
  message: "",
} as IFormData;
