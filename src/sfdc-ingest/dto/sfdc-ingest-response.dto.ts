export class SfdcIngestFailureDto {
  recordIndex: number;
  loanApplicationNoLan: string;
  error: string;
}

export class SfdcIngestResponseDto {
  success: boolean;
  recordsReceived: number;
  recordsAdded: number;
  recordsFailed: number;
  failures: SfdcIngestFailureDto[];
}
