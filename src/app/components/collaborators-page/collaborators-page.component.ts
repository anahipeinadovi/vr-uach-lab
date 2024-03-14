import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { PageContent } from 'src/app/classes/collaborators-content';

@Component({
  selector: 'app-collaborators-page',
  templateUrl: './collaborators-page.component.html',
  styleUrls: ['./collaborators-page.component.css']
})
export class CollaboratorsPageComponent implements OnInit {
  defaultUrl = "https://raw.githubusercontent.com/Fuan200/info_web_site/main/";
  name:string|null = '';
  content!: PageContent;
  constructor(private route:ActivatedRoute, private http:HttpClient){}

  ngOnInit(): void {
    this.name = this.route.snapshot.paramMap.get('id');
    this.http.get(this.defaultUrl + this.name,{responseType:'text'}).subscribe({
      next:(res) => {
        this.content = JSON.parse(res);
      }
    })
  }
}
