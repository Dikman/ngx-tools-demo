import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatTabsModule } from '@angular/material/tabs';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DebounceComponent } from './pages/debounce/debounce.component';
import { SingletonComponent } from './pages/singleton/singleton.component';
import { RandomComponent } from './pages/random/random.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HighlightModule } from 'ngx-highlightjs';

import typescript from 'highlight.js/lib/languages/typescript';
import { TestComponent } from './pages/test/test.component';
import { ChecksumComponent } from './pages/checksum/checksum.component';

export function hljsLanguages() {
  return [
    { name: 'typescript', func: typescript },
  ];
}

@NgModule({
  declarations: [
    AppComponent,
    DebounceComponent,
    SingletonComponent,
    RandomComponent,
    TestComponent,
    ChecksumComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatGridListModule,
    MatTabsModule,
    HighlightModule.forRoot({
      languages: hljsLanguages
    })
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [DebounceComponent]
})
export class AppModule { }
