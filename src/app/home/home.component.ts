import { Component, OnInit } from '@angular/core';

import { AppServiceService } from '../app-service.service';
import { ActivatedRoute, Router, Data, Params} from '@angular/router';
import {CanActivate} from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  data: any;

  constructor(private route: ActivatedRoute, private router: Router, public appService: AppServiceService) {
    /*this.appService.getJSON().subscribe(data => {
      console.log(data);
    });*/
    /*this.appService.getJSON().subscribe(data => {
      this.router.navigate(['/details']);
      console.log('home');
      console.log(data);
    }, (err) => {
      console.log('Error Occured');
    });*/
  }

  ngOnInit() {
  }
}
