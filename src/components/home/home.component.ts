import { Component, OnInit } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit(): void {
  }

  public navToCourseDetails() {
    this.router.navigateByUrl("/course-details");
  }

  public navToAbout() {
    this.router.navigateByUrl("/about");
  }

  public navToContact() {
    this.router.navigateByUrl("/contact");
  }

  public navToTimings() {
    this.router.navigateByUrl("/timings");
  }

  public navToPricing() {
    this.router.navigateByUrl("/pricing");
  }

}
