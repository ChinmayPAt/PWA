import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './components/card/card.component';
import { ListComponent } from './components/list/list.component';
import { BoardComponent } from './components/board/board.component';
import { CreateTaskComponent } from './components/create-task/create-task.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    ListComponent,
    BoardComponent
  ],
  imports: [
    AppRoutingModule,
    CreateTaskComponent,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
