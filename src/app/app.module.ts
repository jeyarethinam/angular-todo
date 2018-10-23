import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ContactComponent } from './contact/contact.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule, MatDialogModule,MatIconModule } from '@angular/material';
import {MatToolbarModule} from '@angular/material/toolbar';
import { ContactService } from './service/contact.service';
import { ContactListComponent } from './contact-list/contact-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    ContactListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatCardModule,
    MatIconModule,
    MatToolbarModule,
    BrowserAnimationsModule,
  ],
  providers: [ContactService],
  entryComponents: [ContactComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
