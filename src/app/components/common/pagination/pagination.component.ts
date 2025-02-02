import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent {
  @Input() currentPage: number = 1;
  @Input() totalPages: number = 1;     
  @Input() totalItems: number = 0;     
  @Output() pageChange: EventEmitter<number> = new EventEmitter(); 
  @Output() itemsPerPageChange: EventEmitter<number> = new EventEmitter(); 

  itemsPerPage: number = 5; 


  onItemsPerPageChange() {
    this.itemsPerPageChange.emit(this.itemsPerPage);
    this.currentPage = 1; 
    this.pageChange.emit(this.currentPage);
  }

  
  prevPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.pageChange.emit(this.currentPage); 
    }
  }

  
  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.pageChange.emit(this.currentPage); 
    }
  }

  getTotalPages() {
    return Math.ceil(this.totalItems / this.itemsPerPage);
  }
}
