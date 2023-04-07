import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-doctor-card',
  templateUrl: './doctor-card.component.html',
  styleUrls: ['./doctor-card.component.scss']
})
export class DoctorCardComponent implements OnInit {

  private apiUrl = 'http://localhost:3000/doctors';
  doctors: any[] = [];

  constructor(private http: HttpClient) { }

  getDoctors(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }

  ngOnInit(): void {
     this.getDoctors().subscribe(data => {
      this.doctors = data.data;
      console.log(this.doctors)
      });
  }

}
