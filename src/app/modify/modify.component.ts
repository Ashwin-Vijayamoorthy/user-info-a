import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { MatButton, MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { FapiService } from '../fapi.service';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-modify',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, MatSelectModule, RouterModule, MatButton, MatCardModule, MatIconModule, MatButtonModule, ReactiveFormsModule,FormsModule,CommonModule],
  templateUrl: './modify.component.html',
  styleUrl: './modify.component.css'
})
export class ModifyComponent implements OnInit {
  id!: number;
  userForm!: FormGroup;
  private addMode = true;

  constructor(private router: Router, private route: ActivatedRoute, private service: FapiService, private fb: FormBuilder) {

    // this.userForm = this.fb.group({
    //   name: [''],
    //   username: [''],
    //   email: [''],
    //   phone: ['']
    // });

    this.userForm = this.fb.group({
      id: ['', Validators.required],
      name: ['', Validators.required],
      username: ['', Validators.required],
      email: [''],
      phone: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]], // Adjust regex as needed
    });

  }

  ngOnInit() {
    this.addMode = this.router.url.split('?')[0].endsWith('/add');

    if (this.addMode) { } else {
      const id: number = +(this.route.snapshot.paramMap.get('id') ?? 0);
      this.service.getUser(id).subscribe({
        next: data => {
          console.log(data);
          // console.log(id);
          this.userForm.patchValue({
            id: data?.id || '',
            name: data?.name || '',
            username: data?.username || '',
            email: data?.email || '',
            phone: data?.phone || ''
          });
        },
        error: (err) => {
          // error handling
        },
      })
    }
  }

  goToBack() {
    this.router.navigate(['/info']);
  }

  onSave() { 
    // console.log(this.userForm.getRawValue())
    if (this.userForm.valid) {
      this.service.addData(this.userForm.value);
      this.router.navigate(['/info']);
      // Save the data
    } else {
      this.userForm.markAllAsTouched(); // This will highlight all invalid fields
    }
  }

}
