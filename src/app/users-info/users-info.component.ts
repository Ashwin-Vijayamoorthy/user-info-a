// import { Component, OnInit} from '@angular/core';
// import { MatButtonModule } from '@angular/material/button';
// import { MatGridListModule } from '@angular/material/grid-list';
// import { MatIconModule } from '@angular/material/icon';
// import { MatTableModule } from '@angular/material/table';
// import { RouterOutlet , Router, RouterModule} from '@angular/router';

// import { MatDialog } from '@angular/material/dialog';
// import { FapiService , UserData} from '../fapi.service'; // Make sure this path is correct
// import { DialogComponent } from '../dialog-component/dialog-component.component';
// import { CommonModule } from '@angular/common';
// import { MatPaginatorModule } from '@angular/material/paginator';
// @Component({
//   selector: 'app-users-info',
//   standalone: true,
//   imports: [MatTableModule,MatIconModule,MatButtonModule,MatGridListModule,RouterOutlet,RouterModule,CommonModule,MatPaginatorModule],
//   templateUrl: './users-info.component.html',
//   styleUrl: './users-info.component.css'
// })
// export class UsersInfoComponent implements OnInit{

//   users: UserData[] = [];
//   displayedColumns: string[] = ['id', 'name', 'username', 'email', 'phone','action'];

//   constructor(private fapiService: FapiService , public dialog: MatDialog , private router: Router) {} // Use the FapiService
  
//   // users = this.fapiService.fetchData();
//   ngOnInit(): void {
//     this.users = this.fapiService.fetchData();
//   }

//   openDialog(): void {
//     const dialogRef = this.dialog.open(DialogComponent, {
//       width: '400px',
//       disableClose: true, // prevents the dialog from being closed by clicking outside
//     });
  
//     dialogRef.afterClosed().subscribe(result => {
//       console.log('Dialog result:', result);
//     });
//   }
  



//   // Method to navigate to the About page
//   goToAbout() {
//     this.router.navigate(['/edit/id']);
//   }


// }




import { Component, inject, OnInit, ViewChild } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule, MatTableDataSource } from '@angular/material/table';
import { RouterOutlet, Router, RouterModule } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { FapiService, UserData } from '../fapi.service';
import { DialogComponent } from '../dialog-component/dialog-component.component';
import { CommonModule } from '@angular/common';
import { MatPaginator } from '@angular/material/paginator';
import { MatPaginatorModule } from '@angular/material/paginator';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import {MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition} from '@angular/material/snack-bar';

@Component({
  selector: 'app-users-info',
  standalone: true,
  imports: [
    MatTableModule,
    MatIconModule,
    MatButtonModule,
    MatGridListModule,
    RouterModule,
    CommonModule,
    MatPaginatorModule,
    ToastrModule,
    MatFormFieldModule,
    MatSelectModule
  ],
  templateUrl: './users-info.component.html',
  styleUrls: ['./users-info.component.css'],
})
export class UsersInfoComponent implements OnInit {
  // Using MatTableDataSource for the table data
  dataSource = new MatTableDataSource<UserData>();
  displayedColumns: string[] = ['id', 'name', 'username', 'email', 'phone', 'action'];

  // ViewChild to access the MatPaginator
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private fapiService: FapiService, public dialog: MatDialog, private router: Router, private toastr: ToastrService) {}

  private _snackBar = inject(MatSnackBar);
  horizontalPosition: MatSnackBarHorizontalPosition = 'end';
  verticalPosition: MatSnackBarVerticalPosition = 'top';

  ngOnInit(): void {
    // Fetch the users data from fapiService and set it to the dataSource
    this.dataSource.data = this.fapiService.getUsers();
  }

  ngAfterViewInit() {
    // Connect paginator to the data source
    this.dataSource.paginator = this.paginator;
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '400px',
      disableClose: true, // prevents the dialog from being closed by clicking outside
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('Dialog result:', result);
    });
  }

  // Method to navigate to the About page
  goToAbout(id: number) {
    this.router.navigate(['/edit',id]);
  }
  
  deleteUser(id: number) {
    this.fapiService.deleteData(id);
    this.dataSource.data = this.fapiService.getUsers();
    // this.toastr.success('User deleted successfully!');
    // this.toastr.success('User added successfully!', 'Success', {
    //   positionClass: 'toast-top-right' 
    // });
      this._snackBar.open('User deleted successfully!', 'X', {
        horizontalPosition: this.horizontalPosition,
        duration: 3000,
        verticalPosition: this.verticalPosition,
      });
  }


  addUser() {
    const newUser = {
      id: this.dataSource.data.length + 1,
      name: 'New User',
      username: 'newuser',
      email: 'newuser@example.com',
      phone: '555-5558',
      website: 'newusersite.com',
      company: 'New User Inc.'
    };
    this.fapiService.addData(newUser);
    this.dataSource.data = this.fapiService.getUsers();
  }
  
}

