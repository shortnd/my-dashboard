import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Repo } from './repo';

@Injectable({
  providedIn: 'root'
})
export class GithubService {

  constructor(private http: HttpClient) { }

  getGithub(): Observable<any> {
    return this.http.get('https://api.github.com/users/shortnd/repos?sort=created');
  }
}
