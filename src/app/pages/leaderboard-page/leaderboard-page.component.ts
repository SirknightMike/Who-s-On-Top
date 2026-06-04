import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Matches, UserTable } from 'src/app/interfaces/User-interfaces';
import {
  MatchResultData,
  MatchResultDialogComponent,
} from 'src/components/match-result-dialog/match-result-dialog.component';

const data: UserTable[] = [
  {
    position: 1,
    name: 'Hydrogen',
    victories: 20,
    losses: 4,
    winPercentage: '20%',
    championshipVictories: 4,
    lastFiveMatchesResults: [
      Matches.lose,
      Matches.lose,
      Matches.lose,
      Matches.lose,
      Matches.win,
    ],
  },
  {
    position: 2,
    name: 'Helium',
    victories: 10,
    losses: 6,
    winPercentage: '20%',
    championshipVictories: 4,
    lastFiveMatchesResults: [
      Matches.win,
      Matches.lose,
      Matches.lose,
      Matches.lose,
      Matches.lose,
    ],
  },
  {
    position: 3,
    name: 'Lithium',
    victories: 7,
    losses: 0,
    winPercentage: '20%',
    championshipVictories: 4,
    lastFiveMatchesResults: [
      Matches.win,
      Matches.win,
      Matches.win,
      Matches.win,
      Matches.win,
    ],
  },
  {
    position: 4,
    name: 'Beryllium',
    victories: 8,
    losses: 8,
    winPercentage: '20%',
    championshipVictories: 4,
    lastFiveMatchesResults: [
      Matches.lose,
      Matches.win,
      Matches.lose,
      Matches.win,
      Matches.lose,
    ],
  },
  {
    position: 5,
    name: 'Boron',
    victories: 20,
    losses: 2,
    winPercentage: '20%',
    championshipVictories: 4,
    lastFiveMatchesResults: [
      Matches.win,
      Matches.win,
      Matches.lose,
      Matches.win,
      Matches.win,
    ],
  },
  {
    position: 6,
    name: 'Carbon',
    victories: 12,
    losses: 2,
    winPercentage: '20%',
    championshipVictories: 4,
    lastFiveMatchesResults: [
      Matches.win,
      Matches.win,
      Matches.lose,
      Matches.win,
      Matches.win,
    ],
  },
  {
    position: 7,
    name: 'Nitrogen',
    victories: 14,
    losses: 5,
    winPercentage: '20%',
    championshipVictories: 4,
    lastFiveMatchesResults: [
      Matches.win,
      Matches.win,
      Matches.lose,
      Matches.win,
      Matches.win,
    ],
  },
  {
    position: 8,
    name: 'Oxygen',
    victories: 15,
    losses: 2,
    winPercentage: '20%',
    championshipVictories: 4,
    lastFiveMatchesResults: [
      Matches.win,
      Matches.win,
      Matches.lose,
      Matches.win,
      Matches.win,
    ],
  },
  {
    position: 9,
    name: 'Fluorine',
    victories: 18,
    losses: 10,
    winPercentage: '20%',
    championshipVictories: 4,
    lastFiveMatchesResults: [
      Matches.win,
      Matches.win,
      Matches.lose,
      Matches.win,
      Matches.win,
    ],
  },
  {
    position: 10,
    name: 'Neon',
    victories: 20,
    losses: 1,
    winPercentage: '20%',
    championshipVictories: 4,
    lastFiveMatchesResults: [
      Matches.win,
      Matches.win,
      Matches.lose,
      Matches.win,
      Matches.win,
    ],
  },
  {
    position: 11,
    name: 'Neon',
    victories: 20,
    losses: 1,
    winPercentage: '20%',
    championshipVictories: 4,
    lastFiveMatchesResults: [
      Matches.win,
      Matches.win,
      Matches.lose,
      Matches.win,
      Matches.win,
    ],
  },
  {
    position: 12,
    name: 'Neon',
    victories: 21,
    losses: 1,
    winPercentage: '20%',
    championshipVictories: 4,
    lastFiveMatchesResults: [
      Matches.win,
      Matches.win,
      Matches.lose,
      Matches.lose,
      Matches.lose,
    ],
  },
  {
    position: 13,
    name: 'Neon',
    victories: 19,
    losses: 7,
    winPercentage: '20%',
    championshipVictories: 4,
    lastFiveMatchesResults: [
      Matches.lose,
      Matches.lose,
      Matches.lose,
      Matches.lose,
      Matches.win,
    ],
  },
  {
    position: 14,
    name: 'Neon',
    victories: 4,
    losses: 9,
    winPercentage: '20%',
    championshipVictories: 4,
    lastFiveMatchesResults: [
      Matches.win,
      Matches.win,
      Matches.win,
      Matches.win,
      Matches.win,
    ],
  },
];

@Component({
  selector: 'app-leaderboard-page',
  templateUrl: './leaderboard-page.component.html',
  styleUrls: ['./leaderboard-page.component.scss'],
})
export class LeaderboardPageComponent {
  displayedColumns: string[] = [
    'position',
    'name',
    'victories',
    'losses',
    'winPercentage',
    'championshipVictories',
    'lastFiveMatchesResults',
  ];
  dataSource = new MatTableDataSource<UserTable>(data);

  Matches = Matches;
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

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private dialog: MatDialog) {}

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

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
