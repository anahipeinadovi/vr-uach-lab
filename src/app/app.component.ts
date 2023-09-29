import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'paginaservicio';

    items: MenuItem[] | undefined;
  
    menuItems2: MenuItem[] | undefined;
  
    ngOnInit() {
        this.items = [
            {
                label: 'Inicio',
                icon: 'pi pi-fw pi-home',
            },
            {
                label: 'Desarrollo VR',
                icon: 'pi pi-fw pi-desktop',
            },
            {
                label: 'Proyectos',
                icon: 'pi pi-fw pi-pencil',
            },
            {
                label: 'Nosotros',
                icon: 'pi pi-fw pi-user',
            },
        ];
  
  
        this.menuItems2 = [
          {
              label: 'Inicio',
              icon: 'pi pi-fw pi-home',
              items: [
                  {
                      label: '¿Qué es VR?'
                  },
                  {
                      label: 'Unity'
                  },
                  {
                      label: 'Gafas de Realidad virtual'
                  }
              ]
          },
          {
              label: 'Desarrollo VR',
              icon: 'pi pi-fw pi-desktop',
              items: [
                  {
                      label: 'Curso Unity'
                  },
                  {
                      label: 'Herramientas'
                  },
                  {
                      label: 'Cuidados-salud-servicio de seguridad'
                  }
              ]
          },
          {
              label: 'Proyectos',
              icon: 'pi pi-fw pi-pencil',
              items: [
                  {
                      label: 'Proy 1 Carro'
                  }
              ]
          },
          {
              label: 'Nosotros',
              icon: 'pi pi-fw pi-user',
              items: [
                  {
                      label: 'Creadores proy 1'
                  }
              ]
          }
      ];
    }
}
