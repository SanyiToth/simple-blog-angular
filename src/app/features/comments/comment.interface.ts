export interface Comment {
  postId: number | undefined;
  name: string;
  email: string;
  body: string;
}

export interface NewComment extends Comment {
  acceptedTermsAndConditions: boolean;
}
