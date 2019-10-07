import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DebounceComponent } from './pages/debounce/debounce.component';
import { SingletonComponent } from './pages/singleton/singleton.component';
import { RandomComponent } from './pages/random/random.component';

const routes: Routes = [
  {
    path: 'random',
    component: RandomComponent
  },
  {
    path: 'debounce',
    component: DebounceComponent
  },
  {
    path: 'singleton',
    component: SingletonComponent
  },
  {
    path: '**',
    redirectTo: 'random'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
