import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-countries-statistics',
  templateUrl: './countries-statistics.component.html',
  styleUrls: ['./countries-statistics.component.scss']
})
export class CountriesStatisticsComponent implements OnInit {
  countriesStatistics: any;
  originalStatistics: any;
  keyword: string;
  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
    this.httpClient.get('https://disease.sh/v3/covid-19/countries').subscribe(data => {
      this.countriesStatistics = data;
      this.originalStatistics = data;
    });
  }

  onCountryFilter() {
    this.countriesStatistics = this.originalStatistics.filter(
      (statistics) => {
        return statistics.country.toLowerCase().includes(this.keyword.toLowerCase());
      }
    )
  }

}
