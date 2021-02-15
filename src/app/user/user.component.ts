import { Component, OnInit } from '@angular/core';
import {User} from '../User';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  users: User[] = [];
  url = 'api/users';

  constructor(private http: HttpClient, private router: Router) {
    this.http.get(this.url).subscribe((data: User[]) => {
      this.users = data;
    });
  }

  ngOnInit() {
  }

}
