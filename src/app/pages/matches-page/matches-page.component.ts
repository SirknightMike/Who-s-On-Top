import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {
  MatchResultData,
  MatchResultDialogComponent,
} from 'src/components/match-result-dialog/match-result-dialog.component';

@Component({
  selector: 'app-matches-page',
  templateUrl: './matches-page.component.html',
  styleUrls: ['./matches-page.component.scss'],
})
export class MatchesPageComponent {
  matchResults: MatchResultData[] = [
    {
      competition: 'Season Ladder',
      scheduledAt: new Date(2026, 0, 24),
      playerOne: 'Hydrogen',
      playerTwo: 'Lithium',
      scorePlayerOne: 3,
      scorePlayerTwo: 1,
      status: 'Completed',
      notes: 'Hydrogen wins with a late push.',
    },
    {
      competition: 'Weekend Sprint',
      scheduledAt: new Date(2026, 0, 23),
      playerOne: 'Beryllium',
      playerTwo: 'Oxygen',
      scorePlayerOne: 2,
      scorePlayerTwo: 2,
      status: 'Draw',
      notes: 'Balanced matchup across all rounds.',
    },
    {
      competition: 'Friendly',
      scheduledAt: new Date(2026, 0, 22),
      playerOne: 'Neon',
      playerTwo: 'Boron',
      scorePlayerOne: 0,
      scorePlayerTwo: 1,
      status: 'Completed',
      notes: 'Boron takes it in overtime.',
    },
  ];

  constructor(private dialog: MatDialog) {}

  openAddResultDialog() {
    const dialogRef = this.dialog.open(MatchResultDialogComponent, {
      width: '560px',
    });

    dialogRef.afterClosed().subscribe((result: MatchResultData | undefined) => {
      if (!result) {
        return;
      }

      this.matchResults = [result, ...this.matchResults];
    });
  }

  getStatusClass(status: string) {
    const normalized = status
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '');
    return `status-${normalized}`;
  }
}
