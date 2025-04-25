// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-dialog-component',
//   standalone: true,
//   imports: [],
//   templateUrl: './dialog-component.component.html',
//   styleUrl: './dialog-component.component.css'
// })
// export class DialogComponentComponent {

// }

import { Component } from '@angular/core';
import { MatDialogRef,
  MatDialog,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogTitle,
 } from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import { FapiService } from '../fapi.service';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog-component.component.html',
  standalone: true,
  imports: [MatButtonModule,MatDialogTitle, MatDialogContent, MatDialogActions, MatDialogClose]
})
export class DialogComponent {
  constructor(public dialogRef: MatDialogRef<DialogComponent>, private fapiService: FapiService) {}

  closeDialog(): void {
    this.dialogRef.close('Dialog closed with some result');
  }
  
}

