import { Component } from "@angular/core";
import {
	BreakpointObserver,
	Breakpoints,
	BreakpointState
} from "@angular/cdk/layout";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

@Component({
	selector: "side-navigation",
	templateUrl: "./side-navigation.component.html",
	styleUrls: ["./side-navigation.component.scss"]
})
export class SideNavigationComponent {
	isHandset$: Observable<boolean> = this.breakpointObserver
		.observe(Breakpoints.Handset)
		.pipe(map((result: any) => result.matches));

	constructor(private breakpointObserver: BreakpointObserver) {}
	toggleTheme() {
		document.querySelector("body").classList.toggle("dark-theme");
	}
}
