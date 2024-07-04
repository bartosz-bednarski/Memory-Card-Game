export type GameTypes = "4x4" | "4x5" | "4x6";
export type Card = {
  value: number;
  id: string;
  matched: boolean;
  selected: boolean;
};
