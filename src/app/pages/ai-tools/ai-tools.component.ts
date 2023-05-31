import { Component, OnInit, computed, effect, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzListModule } from 'ng-zorro-antd/list';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { ListOfOptionImage, OptionImageData } from 'src/app/@core/data/list-of-option-image';
import { RouterLink } from '@angular/router';
@Component({
    selector: 'app-ai-tools',
    standalone: true,
    imports: [
        CommonModule,
        NzListModule,
        NzGridModule,
        NzCardModule,
        NzMenuModule,
        NzTypographyModule,
        RouterLink
    ],
    templateUrl: './ai-tools.component.html',
    styleUrls: ['./ai-tools.component.scss'],
})
export class AiToolsComponent implements OnInit {
    dataTrend: ListOfOptionImage[] = [];

    listMenu = signal([
        { name: 'All', value: 'all', active: true },
        { name: 'Audio', value: 'audio', active: false },
        { name: 'Video', value: 'video', active: false },
        { name: 'Image', value: 'image', active: false },
        { name: '3D', value: '3d', active: false },
    ]);

    dataAll = signal<ListOfOptionImage[]>([]);

    dataAllActive = computed(() => {
        let checkAll = this.listMenu().find(
            (item) => item.value === 'all'
        )?.active;
        if (checkAll) {
            return this.dataAll();
        } else {
            let dataActive: ListOfOptionImage[] = [];
            this.listMenu().forEach((item) => {
                if (item.active) {
                    let data = this.dataAll().filter(
                        (t) => t.value === item.value
                    );
                    dataActive.push(...data);
                }
            });
            return dataActive;
        }
    });

    constructor(private optionImageData: OptionImageData) {
        effect(() => console.log('da vao', this.listMenu()));
    }

    ngOnInit(): void {
        //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
        //Add 'implements OnInit' to the class.
        this.optionImageData.getDataOptionImage().subscribe((data) => {
            this.dataAll.set(data);

            this.dataTrend = data.filter(item => item.trend === true);
        })
    }

    listFiter(index: number) {
        // this.listMenu()[index].active = !this.listMenu()[index].active;
        let total = 0;
        this.listMenu.mutate((vaule) => {
            if (vaule[index].value === 'all') {
                vaule.forEach((item) => {
                    if (item.value === 'all') {
                        item.active = true;
                    } else {
                        item.active = false;
                    }
                });
            } else {
                vaule.forEach((item) => {
                    if (item.value === 'all') {
                        item.active = false;
                    }
                });

                vaule[index].active = !vaule[index].active;

                if (vaule.filter((item) => item.active === true).length == 0) {
                    vaule.forEach((item) => {
                        if (item.value === 'all') {
                            item.active = true;
                        }
                    });
                }
            }
        });
    }
}
