import { Component } from '@angular/core';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { RouterLink, RouterOutlet } from '@angular/router';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    standalone: true,
    imports: [
        NzLayoutModule,
        NzMenuModule,
        RouterLink,
        NzIconModule,
        RouterOutlet,
        NzDropDownModule,
        NzAvatarModule,
        NzSelectModule,
        NzTypographyModule
    ],
})
export class AppComponent {}
