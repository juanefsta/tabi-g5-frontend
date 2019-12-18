import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { LineaTelefonicaService } from 'src/app/services/lineaTelefonica.service';

@Component({
    selector: 'llamadas-filtered-list',
    styleUrls: ['llamadas-filtered-list.component.css'],
    templateUrl: 'llamadas-filtered-list.component.html',
})
export class LlamadasFilteredListComponent implements OnInit {

    displayedColumns: string[] = ['name', 'value'];
    dataSource: MatTableDataSource<any>;

    @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
    @ViewChild(MatSort, { static: true }) sort: MatSort;

    constructor(
        private _lineaService: LineaTelefonicaService
    ) { }

    ngOnInit() {
        this._lineaService.GetAllLlamadasPorMunicipio()
            .subscribe((res: any) => {
                this.dataSource = new MatTableDataSource(res.body.data);
                this.dataSource.paginator = this.paginator;
                this.dataSource.sort = this.sort;
            });
    }
    applyFilter(filterValue: string) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    }
}