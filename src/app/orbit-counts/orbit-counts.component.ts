import { Component, OnInit, Input } from '@angular/core';
import { Satellite } from '../satellite';

@Component({
  selector: 'app-orbit-counts',
  templateUrl: './orbit-counts.component.html',
  styleUrls: ['./orbit-counts.component.css']
})
export class OrbitCountsComponent implements OnInit {

  @Input() satellites: Satellite[];

  constructor() { }

  ngOnInit() {
  }

  getSum(whatSum: string): number {
    let count = 0
    if (whatSum === 'total') {
      for (let i=0; i<this.satellites.length; i++) {
        count++
      }
    } else if (whatSum.toLowerCase() === 'space debris') {
      for (let i=0; i<this.satellites.length; i++) {
        if (this.satellites[i]['type'].toLowerCase() === 'space debris') {
          count++
        }
      }
    } else if (whatSum.toLowerCase() === 'communication') {
      for (let i=0; i<this.satellites.length; i++) {
        if (this.satellites[i]['type'].toLowerCase() === 'communication') {
          count++
        }
      }
    } else if (whatSum.toLowerCase() === 'probe') {
      for (let i=0; i<this.satellites.length; i++) {
        if (this.satellites[i]['type'].toLowerCase() === 'probe') {
          count++
        }
      }
    } else if (whatSum.toLowerCase() === 'positioning') {
      for (let i=0; i<this.satellites.length; i++) {
        if (this.satellites[i]['type'].toLowerCase() === 'positioning') {
          count++
        }
      }
    } else if (whatSum.toLowerCase() === 'space station') {
      for (let i=0; i<this.satellites.length; i++) {
        if (this.satellites[i]['type'].toLowerCase() === 'space station') {
          count++
        }
      }
    } else if (whatSum.toLowerCase() === 'telescope') {
      for (let i=0; i<this.satellites.length; i++) {
        if (this.satellites[i]['type'].toLowerCase() === 'telescope') {
          count++
        }
      }
    }
    return count
  }

}
