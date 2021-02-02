import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-country-page',
  templateUrl: './country-page.component.html',
  styleUrls: ['./country-page.component.scss']
})
export class CountryPageComponent implements OnInit {
  countryStatistics;
  constructor(private route: ActivatedRoute,
              private httpClient: HttpClient) {
    const countryCode = this.route.snapshot.params.code;
    this.httpClient.get('https://disease.sh/v3/covid-19/countries/' + countryCode).subscribe(result => {
      this.countryStatistics = result;
    });
   }

  ngOnInit(): void {
    
  }

}
