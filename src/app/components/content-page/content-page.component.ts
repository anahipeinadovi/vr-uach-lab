import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { PageContent } from 'src/app/classes/page-content';

@Component({
  selector: 'app-content-page',
  templateUrl: './content-page.component.html',
  styleUrls: ['./content-page.component.css']
})
export class ContentPageComponent {
  defaultUrl = "https://raw.githubusercontent.com/Fuan200/info_web_site/main/";
  name:string|null = '';
  @Input({required: true, alias: 'pageContent'}) content!: PageContent;

}
