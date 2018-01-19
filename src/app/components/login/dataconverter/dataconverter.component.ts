import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Data} from '../../../models/data.model';
//import {DataService} from '../../../services/data.service';

@Component({
  selector: 'app-dataconverter',
  templateUrl: './dataconverter.component.html',
  styleUrls: ['./dataconverter.component.css']
})
export class DataconverterComponent implements OnInit {

  data:Data;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    //private dataService: DataService
  ){}

  ngOnInit() {
  }




}
