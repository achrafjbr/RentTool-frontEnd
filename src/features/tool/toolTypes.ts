export interface Tool {
  _id: string;
  name: string;
  pricePerDay: number;
}

export interface ToolState {
  tools: Tool[];
  loading: boolean;
  error: string | null;
}
