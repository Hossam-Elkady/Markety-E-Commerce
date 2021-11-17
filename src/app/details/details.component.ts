import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../shared/api.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  constructor(private _ApiService: ApiService, private _ActivatedRoute: ActivatedRoute) { }
  id: any;
  ngOnInit(): void {
    this.id = this._ActivatedRoute.snapshot.params.id;
    this.getDetails();
    for (let i = 0; i < 30; i++) {
      this.items.push(i)
    }
    console.log(this.items);

  }

  holdinstal: any;

  details: any = "";

  instalment: any;

  instalmentPerMonth: number = 0;

  items: number[] = [];


  getDetails() {
    this._ApiService.getProductDetails(this.id).subscribe(res => {
      this.details = res;
      this.instalment = res.price;
      this.instalmentPerMonth = this.instalment / 48;
      // console.log(this.instalmentPerMonth);
      this.holdinstal = document.getElementById("instalment");
      this.holdinstal.innerHTML = parseFloat(this.instalmentPerMonth.toString()).toFixed(2) + "$";
    })
  }
}
