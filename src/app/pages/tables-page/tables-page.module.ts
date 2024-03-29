import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { TablesPageComponent } from './tables-page.component';
import { AirInfoTableComponent } from './air-info-table/air-info-table.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [TablesPageComponent, AirInfoTableComponent],
  imports: [CommonModule, FormsModule],
})
export class TablesPageModule {}
