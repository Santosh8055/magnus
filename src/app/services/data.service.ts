import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

import { Observable, of } from "rxjs";
import { catchError } from "rxjs/operators";

// const httpOptions = {
// 	headers: new HttpHeaders({ "Content-Type": "application/json" })
// };
let headers = new HttpHeaders();
headers = headers
	.set("Content-Type", "application/json")
	.set("Access-Control-Allow-Origin", "*")
	.set(
		"Access-Control-Allow-Methods",
		"GET, POST, PATCH, PUT, DELETE, OPTIONS"
	)
	.set("Access-Control-Allow-Headers", "Origin, Content-Type, X-Auth-Token");

@Injectable({
	providedIn: "root"
})
export class DataService {
	private phaseURL =
		"http://13.127.175.211:8088/magnus-management/v1.0/phase";
	constructor(private http: HttpClient) {}

	getPhases(): Observable<any> {
		return this.http.get<any[]>(this.phaseURL, { headers: headers });
	}
	private handleError<T>(operation = "operation", result?: T) {
		return (error: any): Observable<T> => {
			// TODO: send the error to remote logging infrastructure
			console.error(error); // log to console instead
			console.error(operation); // log to console instead
			// TODO: better job of transforming error for user consumption
			// Let the app keep running by returning an empty result.
			return of(result as T);
		};
	}
}
