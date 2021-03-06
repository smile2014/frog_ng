import { Injectable } from '@angular/core';

@Injectable()
export class StorageService {
    private storage: Storage;

    constructor() {
        this.storage = window.localStorage;
    }
    get(key: string) {
        return JSON.parse(this.storage.getItem(key));
    }
    set(key: string, value:any) {
        this.storage.setItem(key, JSON.stringify(value));
    }
    pop(key: string) {
        let result = this.get(key);
        this.storage.removeItem(key);
        
        return result;
    }
}