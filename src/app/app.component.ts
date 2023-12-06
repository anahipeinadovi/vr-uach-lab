import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'paginaservicio';

  url = "https://raw.githubusercontent.com/Fuan200/info_web_site/main/index.json";

  constructor(private http: HttpClient, private router: Router) { }

  showMenu: boolean = false;

  items: MenuItem[] | undefined;

  menuItems2: MenuItem[] | undefined;

  ngOnInit() {
    this.http.get(this.url, { responseType: 'text' }).subscribe({
      next: (res: string) => {
        let resObj = JSON.parse(res);

        this.items = [];
        this.menuItems2 = [];

        const firstItem = resObj[0];
        this.items?.push({
          label: firstItem.name,
          icon: firstItem.icon,
          command: () => {
            this.router.navigate(['/']);
          }
        });

        resObj.forEach((i: any) => {
          let mitems: MenuItem[] = [];
          i.subtopics.forEach((el: any) => {
            mitems.push({
              label: el.name,
              url: el.url
            });
          });

          this.menuItems2?.push({
            label: i.name,
            icon: i.icon,
            items: mitems
          });


        });
        this.menuItems2[0].command = () => {
          this.router.navigate(['/']);
        };
      }
    });
  }

}
