import type { FailureResponse } from "./failureResoponse";

export interface State {
  isLoading: boolean;
  error: FailureResponse | null;
}
