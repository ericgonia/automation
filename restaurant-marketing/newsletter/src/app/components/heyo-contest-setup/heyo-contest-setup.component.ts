import { Component, OnInit } from '@angular/core';
import { ElectronService } from 'ngx-electron';
import { ContestType } from '../../model';

@Component({
    selector: 'app-heyo-contest-setup',
    templateUrl: './heyo-contest-setup.component.html',
    styleUrls: ['./heyo-contest-setup.component.css']
})
export class HeyoContestSetupComponent implements OnInit {

    contestEndDate: string;

    constructor(private electron: ElectronService) { }

    setupContest() {
        this.electron.ipcRenderer.send('setup-heyo-contest', ContestType.DinnerForTwo);
    }

    ngOnInit() {
    }

}
