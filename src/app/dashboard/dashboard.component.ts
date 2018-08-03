import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointState, BreakpointObserver } from '@angular/cdk/layout';

@Component({
	selector: 'dashboard',
	templateUrl: './dashboard.component.html',
	styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
	// pie chart data
	single: any[] = [
		{
			'name': 'Germany',
			'value': 8940000
		},
		{
			'name': 'USA',
			'value': 5000000
		},
		{
			'name': 'France',
			'value': 7200000
		}
	];
	showLegend = true;
	showLabels = true;
	explodeSlices = false;



	showXAxis = true;
	showYAxis = true;
	gradient = false;
	showXAxisLabel = true;
	xAxisLabel = 'Country';
	showYAxisLabel = true;
	yAxisLabel = 'Population';

	// stacked chart data

	stackedMulti = [
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

	  // guage data 

	  guageData = [
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
	
	


	onSelect(event) {
		console.log(event);
	}

	constructor(private breakpointObserver: BreakpointObserver) {

	}
}
