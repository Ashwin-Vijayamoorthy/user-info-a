// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
// export class FapiService {

//   constructor() { }
// }




// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs';

// @Injectable({
//   providedIn: 'root'
// })
// export class FapiService {
//   private apiUrl = 'https://jsonplaceholder.typicode.com/users'; // API URL

//   constructor(private http: HttpClient) { }

//   fetchData(): Observable<any> {
//     return this.http.get<any>(this.apiUrl);
//   }
// }


import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
// import { Observable } from 'rxjs';

export interface UserData {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
  website: string;
  company: string;
}

export interface Response {
  status: string;
}

@Injectable({
  providedIn: 'root'
})
export class FapiService {
  private apiUrl = 'https://jsonplaceholder.typicode.com/users'; // API URL 

  private users: UserData[] = [ { id: 1, name: 'John Doe', username: 'jdoe', email: 'john@example.com', phone: '555-5555', website: 'johnsite.com', company: 'John Inc.' },
    { id: 2, name: 'Jane Smith', username: 'jsmith', email: 'jane@example.com', phone: '555-5556', website: 'janesite.com', company: 'Jane Co.' },
    { id: 3, name: 'Mark Johnson', username: 'mjohnson', email: 'mark@example.com', phone: '555-5557', website: 'marksite.com', company: 'Mark Corp.' },
    { id: 4, name: 'Emily Davis', username: 'edavis', email: 'emily@example.com', phone: '555-5558', website: 'emilysite.com', company: 'Emily LLC' },
    { id: 5, name: 'Michael Brown', username: 'mbrown', email: 'michael@example.com', phone: '555-5559', website: 'michaelbrown.com', company: 'Michael Inc.' },
    { id: 6, name: 'Sarah Wilson', username: 'swilson', email: 'sarah@example.com', phone: '555-5560', website: 'sarahsite.com', company: 'Sarah Co.' },
    { id: 7, name: 'David Lee', username: 'dlee', email: 'david@example.com', phone: '555-5561', website: 'davidsite.com', company: 'David Corp.' },
    { id: 8, name: 'Laura Miller', username: 'lmiller', email: 'laura@example.com', phone: '555-5562', website: 'lauramsite.com', company: 'Laura LLC' },
    { id: 9, name: 'James Taylor', username: 'jtaylor', email: 'james@example.com', phone: '555-5563', website: 'jamestaylor.com', company: 'James Inc.' },
    { id: 10, name: 'Olivia Martinez', username: 'omartinez', email: 'olivia@example.com', phone: '555-5564', website: 'oliviamartinez.com', company: 'Olivia Co.' },
    { id: 11, name: 'William Anderson', username: 'wanderson', email: 'william@example.com', phone: '555-5565', website: 'williamanderson.com', company: 'William Inc.' },
    { id: 12, name: 'Sophia Thomas', username: 'sthomas', email: 'sophia@example.com', phone: '555-5566', website: 'sophiathomas.com', company: 'Sophia LLC' },
    
    ];
    

  getUsers() : UserData[]{
    return this.users;
  }

  getUser(id: number): Observable<UserData | undefined> {
    return of(this.users.find(user => user.id == id));
  }

  addData(user: UserData) {
    return of(this.users.unshift(user));
  }

  editUser(id: number, updatedUser: UserData): Observable<Response> {
    const index = this.users.findIndex((user) => user.id === id);
    const response = {
      status: 'failed'
    }

    if (index !== -1) {
      this.users[index] = updatedUser;
      response.status = 'success';
    }

    return of(response);
  }

  deleteData(id: number) {
    return of(this.users = this.users.filter((user) => user.id !== id));
  }
}