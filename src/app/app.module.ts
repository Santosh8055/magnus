import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { NgxChartsModule } from "@swimlane/ngx-charts";

import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { SideNavigationComponent } from "./side-navigation/side-navigation.component";
import { LayoutModule } from "@angular/cdk/layout";
import {
	MatToolbarModule,
	MatButtonModule,
	MatSidenavModule,
	MatIconModule,
	MatListModule,
	MatGridListModule,
	MatCardModule,
	MatMenuModule,
	MatInputModule,
	MatTableModule,
	MatPaginatorModule,
	MatSortModule
} from "@angular/material";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { RoutingModule } from ".//routing.module";
import { PhaseManagementComponent } from "./phase-management/phase-management.component";
import { UnitManagementComponent } from "./unit-management/unit-management.component";
import { SheepManagementComponent } from "./sheep-management/sheep-management.component";
import { StaffManagementComponent } from "./staff-management/staff-management.component";
import { CustomersComponent } from "./customers/customers.component";
import { ExpencesComponent } from "./expences/expences.component";
import { SecurityManagementComponent } from "./security-management/security-management.component";

@NgModule({
	declarations: [
		AppComponent,
		SideNavigationComponent,
		DashboardComponent,
		PhaseManagementComponent,
		UnitManagementComponent,
		SheepManagementComponent,
		StaffManagementComponent,
		CustomersComponent,
		ExpencesComponent,
		SecurityManagementComponent
	],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		LayoutModule,
		MatToolbarModule,
		MatButtonModule,
		MatSidenavModule,
		MatIconModule,
		MatListModule,
		MatGridListModule,
		MatCardModule,
		MatMenuModule,
		MatInputModule,
		MatTableModule,
		MatPaginatorModule,
		MatSortModule,
		RoutingModule,
		NgxChartsModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {}
