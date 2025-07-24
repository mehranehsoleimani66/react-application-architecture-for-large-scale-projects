export interface Comments {
  id: number;
  date: string;
  userId: number | undefined;
  fullName: string;
  commentText: string;
  score: number | null;
  isResponse: boolean;
}
