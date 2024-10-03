import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [RouterOutlet],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
})
export class AppComponent {
    title = 'front-end-test';
    ngOnInit(): void {
        this.title = 'front-end-pre-commit-test';
        // 1. 並將source code format 以及 import 排序、移除未使用import 加入pre-commit hook 中
        // 2. 新增vs code 寫作風格設定檔案 .vscode\settings.json
        // 3. 新增github CI 機制，確認每次push、pull request皆能正常build
    }
}
