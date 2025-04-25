// import { Component } from '@angular/core';
// import { RouterOutlet } from '@angular/router';

// @Component({
//   selector: 'app-root',
//   standalone: true,
//   imports: [RouterOutlet],
//   templateUrl: './app.component.html',
//   styleUrl: './app.component.css'
// })
// export class AppComponent {
//   title = 'systemuserinfo';
// }


// import {Component} from '@angular/core';
// import {MatTableModule} from '@angular/material/table';

// export interface PeriodicElement {
//   name: string;
//   position: number;
//   weight: number;
//   symbol: string;
// }

// const ELEMENT_DATA: PeriodicElement[] = [
//   {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
//   {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
//   {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
//   {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
//   {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
//   {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
//   {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
//   {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
//   {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
//   {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
// ];

// /**
//  * @title Basic use of `<mat-table>` (uses display flex)
//  */
// @Component({
//   selector: 'app-root',
//   styleUrl: 'app.component.css',
//   templateUrl: 'app.component.html',
//   standalone: true,
//   imports: [MatTableModule],
// })
// export class TableFlexBasicExample {
//   displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
//   dataSource = ELEMENT_DATA;
// }



// import { Component, OnInit } from '@angular/core';
// import { FapiService } from './fapi.service'; // Ensure correct import path
// import { MatTableModule } from '@angular/material/table';

// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   standalone: true,
//   imports: [MatTableModule], // Import any other necessary modules
// })
// export class AppComponent implements OnInit {
//   users: any[] = []; // Store user data
//   displayedColumns: string[] = ['id', 'name', 'username', 'email', 'phone', 'website', 'company'];

//   constructor(private fapiService: FapiService) {}

//   ngOnInit(): void {
//     this.fapiService.fetchData().subscribe({
//       next: (response) => {
//         this.users = response; // Assuming the API returns an array of users
//         console.log(this.users);
//       },
//       error: (error) => {
//         console.error('Error fetching data:', error);
//       },
//       complete: () => {
//         console.log('Data fetching complete');
//       }
//     });
//   }
// }




// //working code

// // app.component.ts
// import { Component, OnInit } from '@angular/core';
// import { FapiService } from './fapi.service'; // Make sure this path is correct
// import { MatTableModule } from '@angular/material/table';
// import { MatIconModule } from '@angular/material/icon';
// import {MatButtonModule} from '@angular/material/button';
// import {MatGridListModule} from '@angular/material/grid-list';

// import { MatDialog } from '@angular/material/dialog';
// import { DialogComponent } from './dialog-component/dialog-component.component';
// import {RouterOutlet, Router } from '@angular/router';

// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.scss'],
//   standalone: true,
//   imports: [MatTableModule,MatIconModule,MatButtonModule,MatGridListModule,RouterOutlet]
// })
// export class AppComponent implements OnInit {
//   users: any[] = [];
//   displayedColumns: string[] = ['id', 'name', 'username', 'email', 'phone', 'website', 'company'];

//   constructor(private fapiService: FapiService , public dialog: MatDialog , private router: Router) {} // Use the FapiService


//   // openDialog(): void {
//   //   const dialogRef = this.dialog.open(DialogComponent);

//   //   dialogRef.afterClosed().subscribe(result => {
//   //     console.log('Dialog result:', result);
//   //   });
//   // }
//   openDialog(): void {
//     const dialogRef = this.dialog.open(DialogComponent, {
//       width: '400px',
//       disableClose: true, // prevents the dialog from being closed by clicking outside
//     });
  
//     dialogRef.afterClosed().subscribe(result => {
//       console.log('Dialog result:', result);
//     });
//   }
  

//   ngOnInit(): void {
//     this.fapiService.fetchData().subscribe({
//       next: (response) => {
//         this.users = response; // Assuming the API returns an array of users
//         console.log(this.users);
//       },
//       error: (error) => {
//         console.error('Error fetching data:', error);
//       },
//       complete: () => {
//         console.log('Data fetching complete');
//       }
//     });
//   }


//   // constructor(private router: Router) {}

//   // Method to navigate to the About page
//   goToAbout() {
//     this.router.navigate(['/modify']);
//   }

// }


import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'pagedirect';
}



