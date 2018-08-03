import { Component, OnInit } from "@angular/core";

@Component({
	selector: "phase-management",
	templateUrl: "./phase-management.component.html",
	styleUrls: ["./phase-management.component.scss"]
})
export class PhaseManagementComponent implements OnInit {
	constructor() {}

	ngOnInit() {}

	handleAdd() {
		console.log("handling add");
	}

	handleClear() {
		console.log("handle Clear");
	}
}
