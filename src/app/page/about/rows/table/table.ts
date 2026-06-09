import { Component, Input, ViewChild, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatTableModule, MatTableDataSource } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';

@Component({
  selector: 'spec-table',
  imports: [MatTableModule, CommonModule, MatPaginatorModule, MatSortModule],
  templateUrl: './table.html',
  styleUrl: './table.css',
})
export class Table implements AfterViewInit {
  @Input() title = '';

  @Input() columns: { key: string; label: string }[] = [];

  private _data: any[] = [];

  dataSource = new MatTableDataSource<any>();

  @Input()
  set data(value: any[]) {
    this._data = value;

    this.dataSource.data = value;
  }

  get data(): any[] {
    return this._data;
  }

  get displayedColumns(): string[] {
    return this.columns.map((column) => column.key);
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;

    this.dataSource.sort = this.sort;
  }

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  @ViewChild(MatSort)
  sort!: MatSort;
}
