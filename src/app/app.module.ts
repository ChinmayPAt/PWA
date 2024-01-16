import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './components/card/card.component';
import { ListComponent } from './components/list/list.component';
import { BoardComponent } from './components/board/board.component';
import { CdkDrag, CdkDropList } from '@angular/cdk/drag-drop';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CreateTaskComponent } from './components/create-task/create-task.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [AppComponent, CardComponent, ListComponent, BoardComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CdkDrag,
    CdkDropList,
    ReactiveFormsModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    BrowserAnimationsModule,
    CreateTaskComponent,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
