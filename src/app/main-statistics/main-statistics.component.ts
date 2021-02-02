import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-main-statistics',
  templateUrl: './main-statistics.component.html',
  styleUrls: ['./main-statistics.component.scss']
})
export class MainStatisticsComponent implements OnInit {
  totalCases = 0;
  totalDeath = 0;
  totalRecovered = 0;
  updateTime = 0;
  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
    this.httpClient.get('https://disease.sh/v3/covid-19/all').subscribe((data: any) => {
      this.totalCases = data.cases;
      this.totalDeath = data.deaths;
      this.totalRecovered = data.recovered;
      this.updateTime = data.updated;
    });
  }

}
