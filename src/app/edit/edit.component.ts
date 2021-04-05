import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {User} from '../User';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

  newUsername = '';
  newPassword = '';
  url = 'api/users/';
  user: User;
  users: User[] = [];
  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  }



  constructor(private activatedRoute: ActivatedRoute, private http: HttpClient, private router: Router) {
    console.log(this.users);
    this.activatedRoute.queryParams.subscribe(i => {
      console.log(i);
      this.http.get(this.url + i.id, this.httpOptions).subscribe((data: User) => {
        this.user = data;
        console.log(this.user);
      });
    });
  }

  ngOnInit() {

  }

  saveEdit(): void {
    this.http.put(this.url + this.user.id, this.user).subscribe((data: User) => {
      console.log(data);
      console.log(this.users);
      this.user = data;
      this.newUsername = data.username;
      this.newPassword = data.password;
      this.router.navigate(['/users']);
    });
  }

}
