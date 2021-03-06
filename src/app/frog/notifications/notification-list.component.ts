import { Component, Input, OnDestroy } from '@angular/core';

import { Notification } from '../shared/models';
import { NotificationService } from './notification.service';

//

@Component({
    selector: 'notification-list',
    template: `
    <ul>
        <li *ngFor="let item of items"><notification [item]="item"></notification></li>
    </ul>`,
    styles: [
        'ul { position: fixed; top: 84px; right: 12px; width: 300px; }'
    ]
})
export class NotificationListComponent implements OnDestroy {
    @Input() notification;

    private items: Notification[];
    private sub;

    constructor(private service: NotificationService) {
        this.items = [];
        this.sub = this.service.added.subscribe(item => {
            this.items.push(item);
            if (item.timeout) {
                setTimeout(() => this.remove(item), item.timeout);
            }
        });
    }
    ngOnDestroy() {
        this.sub.unsubscribe();
    }
    remove(item: Notification) {
        let index = this.items.indexOf(item);
        this.items.splice(index, 1);
    }
}