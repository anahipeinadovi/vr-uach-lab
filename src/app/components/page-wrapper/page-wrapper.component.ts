import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PageContent } from 'src/app/classes/page-content';
import { CollaboratorsPageContent } from 'src/app/classes/collaborators-content';

@Component({
  selector: 'app-page-wrapper',
  templateUrl: './page-wrapper.component.html',
  styleUrls: ['./page-wrapper.component.css']
})
export class PageWrapperComponent implements OnInit{

  defaultUrl = "https://raw.githubusercontent.com/Fuan200/info_web_site/main/";
  name:string|null = '';
  content!: any;
  constructor(private route:ActivatedRoute, private http:HttpClient){}

  ngOnInit(): void {
    this.name = this.route.snapshot.paramMap.get('id');
    this.http.get(this.defaultUrl + this.name,{responseType:'text'}).subscribe({
      next:(res) => {
        this.content = JSON.parse(res);
        //alert(this.content);
      }
    })
  }

}
