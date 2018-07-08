import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AdminComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { UserFilter } from './user/user.pipe';

@NgModule({
  declarations: [
    AdminComponent,
    UserComponent,
    UserFilter
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AdminComponent]
})
export class AppModule { }
