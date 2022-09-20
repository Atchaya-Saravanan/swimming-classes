import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from 'src/components/about/about.component';
import { ContactComponent } from 'src/components/contact/contact.component';
import { DiffLevelsComponent } from 'src/components/diff-levels/diff-levels.component';
import { HomeComponent } from 'src/components/home/home.component';
import { PricingComponent } from 'src/components/pricing/pricing.component';
import { TimingsComponent } from 'src/components/timings/timings.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'pricing', component: PricingComponent },
  { path: 'timings', component: TimingsComponent },
  { path: 'course-details', component: DiffLevelsComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
