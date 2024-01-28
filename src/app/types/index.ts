export interface PoolAmount {
  poolId: string;
  lotteryId: string;
  coinId: string;
  coinSymbol: string;
  coinName: string;
  roundId: string;
  poolAmount: string;
  createdAt: string;
}

export interface LotteryData {
  lotteryName: string;
  lotteryPrice: number;
  roundNumber: number;
  previousWinningticket: number[];
  poolAmount: PoolAmount[];
  winningPot: number;
  currentPool: number;
  nextDraw: number;
  ticketCount: number;
  prevTicketCount: number;
  showPoolDetail: boolean;
}
