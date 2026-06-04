import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

export interface MatchResultData {
  competition: string;
  scheduledAt: Date;
  playerOne: string;
  playerTwo: string;
  scorePlayerOne: number | null;
  scorePlayerTwo: number | null;
  status: string;
  notes: string;
}

@Component({
  selector: 'app-match-result-dialog',
  templateUrl: './match-result-dialog.component.html',
  styleUrls: ['./match-result-dialog.component.scss'],
})
export class MatchResultDialogComponent {
  matchResult: MatchResultData = {
    competition: 'Season Ladder',
    scheduledAt: new Date(),
    playerOne: '',
    playerTwo: '',
    scorePlayerOne: null,
    scorePlayerTwo: null,
    status: 'Completed',
    notes: '',
  };

  constructor(
    private dialogRef: MatDialogRef<MatchResultDialogComponent>
  ) {}

  save() {
    this.dialogRef.close(this.matchResult);
  }

  cancel() {
    this.dialogRef.close();
  }
}
