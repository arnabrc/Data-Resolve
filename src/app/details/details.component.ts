import { Component, OnInit } from '@angular/core';

import { AppServiceService } from '../app-service.service';
import { ActivatedRoute, Router, Data, Params} from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  data;
  constructor(private route: ActivatedRoute) {
    console.log('details');
  }

  ngOnInit() {
    // this.data = this.route.snapshot.data.data;
  }

}
