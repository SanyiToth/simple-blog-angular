export interface NewComment {
  name: string;
  email: string;
  body: string;
  acceptedTermsAndConditions: boolean;
  postId: number | undefined;
}
