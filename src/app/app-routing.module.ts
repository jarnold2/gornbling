import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { BlackjackComponent } from './blackjack/blackjack.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  { path: 'bj', component: BlackjackComponent },
  { path: '', component: HomeComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
