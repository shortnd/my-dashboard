import { Repo } from './../repo';
import { Component, OnInit } from '@angular/core';
import { GithubService } from '../github.service';

@Component({
  selector: 'app-github',
  templateUrl: './github.component.html',
  styleUrls: ['./github.component.scss']
})
export class GithubComponent implements OnInit {

  repos: Repo[] = [];
  firstRepo: Repo;

  constructor(private http: GithubService) { }

  ngOnInit() {
    this.getRepos();
  }

  getRepos() {
    this.http.getGithub().subscribe(
      (repos) => {
        this.repos = repos;
        this.firstRepo = this.repos[0];
      }
    );
  }

}
