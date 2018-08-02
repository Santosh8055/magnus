import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { PhaseManagementComponent } from './phase-management/phase-management.component';
import { UnitManagementComponent } from './unit-management/unit-management.component';
import { SheepManagementComponent } from './sheep-management/sheep-management.component';
import { StaffManagementComponent } from './staff-management/staff-management.component';
import { CustomersComponent } from './customers/customers.component';
import { ExpencesComponent } from './expences/expences.component';
import { SecurityManagementComponent } from './security-management/security-management.component';
const routes: Routes = [
	{ path: '', redirectTo: '/dashboard', pathMatch: 'full' },
	{ path: 'dashboard', component: DashboardComponent },
	{ path: 'phase-management', component: PhaseManagementComponent },
	{ path: 'unit-management', component: UnitManagementComponent },
	{ path: 'sheep-management', component: SheepManagementComponent },
	{ path: 'staff-management', component: StaffManagementComponent },
	{ path: 'customers', component: CustomersComponent },
	{ path: 'expences', component: ExpencesComponent },
	{ path: 'security-management', component: SecurityManagementComponent }
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class RoutingModule { }
