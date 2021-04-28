export interface Comment {
  postId: number | undefined;
  name: string;
  email: string;
  body: string;
  id?: number;
}

export interface NewComment extends Comment {
  acceptedTermsAndConditions: boolean;
}
