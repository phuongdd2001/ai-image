import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzUploadChangeParam, NzUploadModule } from 'ng-zorro-antd/upload';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
@Component({
    selector: 'app-gen-video',
    standalone: true,
    imports: [CommonModule, NzUploadModule, NzGridModule, NzTabsModule ],
    providers: [NzMessageService],
    templateUrl: './gen-video.component.html',
    styleUrls: ['./gen-video.component.scss'],
})
export class GenVideoComponent {

    tabs = [1, 2, 3];

    constructor(private msg: NzMessageService) {}

    handleChange({ file, fileList }: NzUploadChangeParam): void {
        const status = file.status;
        if (status !== 'uploading') {
            console.log(file, fileList);
        }
        if (status === 'done') {
            this.msg.success(`${file.name} file uploaded successfully.`);
        } else if (status === 'error') {
            this.msg.error(`${file.name} file upload failed.`);
        }
    }
}
