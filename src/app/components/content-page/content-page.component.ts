import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-content-page',
  templateUrl: './content-page.component.html',
  styleUrls: ['./content-page.component.css']
})
export class ContentPageComponent implements OnInit {
  defaultUrl = "https://raw.githubusercontent.com/Fuan200/info_web_site/main/";
  name:string|null = '';
  content: string = '';
  constructor(private route:ActivatedRoute, private http:HttpClient){}

  ngOnInit(): void {
    this.name = this.route.snapshot.paramMap.get('id');
    this.http.get(this.defaultUrl + this.name,{responseType:'text'}).subscribe({
      next:(res) => {
        this.content = res.toString();
      }
    })
  }
}
