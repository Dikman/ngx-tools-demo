import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DebounceComponent } from './pages/debounce/debounce.component';
import { SingletonComponent } from './pages/singleton/singleton.component';
import { RandomComponent } from './pages/random/random.component';
import { ChecksumComponent } from './pages/checksum/checksum.component';
import { TestComponent } from './pages/test/test.component';

const routes: Routes = [
  {
    path: 'random',
    component: RandomComponent
  },
  {
    path: 'checksum',
    component: ChecksumComponent
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
    path: 'test',
    component: TestComponent
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
