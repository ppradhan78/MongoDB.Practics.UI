import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { SearchService } from './search.service';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ISearch } from '../../models/ISearch';
import { MatPaginator } from '@angular/material/paginator';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-search-list',
  templateUrl: './search-list.component.html',
  styleUrls: ['./search-list.component.css']
})
export class SearchListComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = ['fileName', 'searchContent', 'highlightedText', 'People', 'filePath',
    'keyphrases'];
  Categories: ISearch[] = [];
  searchText: any;
  dataSource = new MatTableDataSource<ISearch>(this.Categories)

  @ViewChild(MatSort, { static: false }) sort!: MatSort;
  @ViewChild(MatPaginator, { static: false }) paginator!: MatPaginator;
  
  constructor(private categoriesService: SearchService) {
  }

  ngOnInit(): void {
    //this.getAllCategories();
  }
  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }
  getAllCategories(searchText: string){
    this.categoriesService.getAllcategories(searchText).subscribe(responce => {
      this.Categories = responce;
      alert(responce);
      alert(this.Categories);
      this.dataSource = new MatTableDataSource(this.Categories);
    })

  }
}
