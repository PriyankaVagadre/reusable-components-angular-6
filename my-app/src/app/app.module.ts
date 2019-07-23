import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule, RoutingList } from './app-routing.module';
import { AppComponent } from './app.component';

import { NgxQRCodeModule } from 'ngx-qrcode2';
import { NgQRCodeReaderModule } from 'ng2-qrcode-reader';
import { CopyToClipboardComponent } from './copy-to-clipboard/copy-to-clipboard.component';


@NgModule({
  declarations: [
    AppComponent,
    RoutingList,
    CopyToClipboardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxQRCodeModule,
    FormsModule,
    BrowserAnimationsModule,
    NgQRCodeReaderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
