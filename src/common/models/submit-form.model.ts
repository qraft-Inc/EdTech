export interface SubmitFormModel {
  userId?: any;
  isSignedIn?: any;
  callback: (result: { success: boolean; res?: any; error?: string }) => void;
}
