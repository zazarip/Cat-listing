import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';



interface Cat {
  breed: string;
  category: string;
  country: string;
  origin: string;
  coat: string;
  pattern: string;
}

  @Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
  })
  export class AppComponent {
    cats: Cat[] = [];
    filteredCats: Cat[] = [];
    searchOption: string = 'breed'; // Default search option
    currentPage: number = 1;
    itemsPerPage: number = 5;
  
    constructor(private http: HttpClient) {
      this.loadCats();
    }

    loadCats() {
      this.http.get<any>('https://catfact.ninja/breeds')
        .subscribe(response => {
          this.cats = response.data;
          this.updateFilteredCats();
        });
    }
    
    updateFilteredCats() {
      const startIndex = (this.currentPage - 1) * this.itemsPerPage;
      const endIndex = startIndex + this.itemsPerPage;
      this.filteredCats = this.cats.slice(startIndex, endIndex);
    }
  
    onPageChange(newPage: number) {
      this.currentPage = newPage;
      this.updateFilteredCats();
    }
  
    
    getTotalPages(): number {
      return Math.ceil(this.cats.length / this.itemsPerPage);
    }

  search(event: any) {
    const keyword = event.target.value;
    if (keyword.trim() === '') {
      this.filteredCats = this.cats;
    } else {
      this.filteredCats = this.cats.filter(cat =>
        cat[this.searchOption].toLowerCase().includes(keyword.toLowerCase())
      );
    }
  }
}