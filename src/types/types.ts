export type listOfTickets = [{ price: number; carrier: string; segments: [Segment, Segment] }];
type Segment = { date: string; destination: string; duration: number; origin: string; stops: string[] };
export type filters = {
  all: boolean;
  noTransfer: boolean;
  oneTransfer: boolean;
  twoTransfers: boolean;
  threeTransfers: boolean;
};
