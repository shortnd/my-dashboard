import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { GithubComponent } from './github/github.component';
import { LoadingComponent } from './loading/loading.component';
import { BasicInfoComponent } from './basic-info/basic-info.component';
import { CardComponent } from './card/card.component';

@NgModule({
  declarations: [
    AppComponent,
    GithubComponent,
    LoadingComponent,
    BasicInfoComponent,
    CardComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
