import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './components/card/card.component';
import { ListComponent } from './components/list/list.component';
import { BoardComponent } from './components/board/board.component';
import { CdkDrag, CdkDropList } from '@angular/cdk/drag-drop';

@NgModule({
  declarations: [AppComponent, CardComponent, ListComponent, BoardComponent],
  imports: [BrowserModule, AppRoutingModule, CdkDrag, CdkDropList],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
