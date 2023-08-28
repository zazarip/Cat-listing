import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { AppComponent } from './app.component'; 
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  imports: [BrowserModule, FormsModule,HttpClientModule, IonicModule.forRoot()],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
