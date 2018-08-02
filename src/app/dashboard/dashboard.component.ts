import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointState, BreakpointObserver } from '@angular/cdk/layout';


@Component({
	selector: 'dashboard',
	templateUrl: './dashboard.component.html',
	styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
	single: any[] = [
		{
			"name": "Germany",
			"value": 8940000
		},
		{
			"name": "USA",
			"value": 5000000
		},
		{
			"name": "France",
			"value": 7200000
		}
	];
	multi: any[] = [
		{
			"name": "Germany",
			"series": [
				{
					"name": "2010",
					"value": 7300000
				},
				{
					"name": "2011",
					"value": 8940000
				}
			]
		},

		{
			"name": "USA",
			"series": [
				{
					"name": "2010",
					"value": 7870000
				},
				{
					"name": "2011",
					"value": 8270000
				}
			]
		},

		{
			"name": "France",
			"series": [
				{
					"name": "2010",
					"value": 5000002
				},
				{
					"name": "2011",
					"value": 5800000
				}
			]
		}
	];

	// view: any[] = [472, 272];

	// options
	showLegend = true;

	colorScheme = {
		domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
	};

	// pie
	showLabels = true;
	explodeSlices = false;
	doughnut = false;
	onSelect(event) {
		console.log(event);
	}
	/** Based on the screen size, switch from standard to one column per row */
	cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
		map(({ matches }) => {
			if (matches) {
				return [
					{ title: 'Card 1', cols: 2, rows: 1 },
					{ title: 'Card 2', cols: 2, rows: 1 },
					{ title: 'Card 3', cols: 2, rows: 1 },
					{ title: 'Card 4', cols: 2, rows: 1 }
				];
			}

			return [
				{ title: 'Card 1', cols: 1, rows: 1 },
				{ title: 'Card 2', cols: 1, rows: 1 },
				{ title: 'Card 3', cols: 1, rows: 1 },
				{ title: 'Card 4', cols: 1, rows: 1 }
			];
		})
	);

	constructor(private breakpointObserver: BreakpointObserver) {

	}
}
