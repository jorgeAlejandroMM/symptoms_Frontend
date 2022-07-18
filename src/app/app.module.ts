import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SymptomService } from './services/Symptom/symptom.service';
import { TableComponent } from './table/table.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    CardComponent,
  ],
  imports: [
    RouterModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    BrowserAnimationsModule,
  ],
  providers: [SymptomService],
  bootstrap: [AppComponent]
})
export class AppModule { }
