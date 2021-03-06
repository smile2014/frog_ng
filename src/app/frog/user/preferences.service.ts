import { Injectable } from '@angular/core';
import { Http, Request, RequestMethod, Response, RequestOptions, URLSearchParams } from '@angular/http';

import { BehaviorSubject } from 'rxjs';

import { UserService } from './user.service';

@Injectable()
export class PreferencesService {
    private prefs: Object;
    private source: Object;
    private vis: boolean;
    public preferences: BehaviorSubject<Object>;
    public visible: BehaviorSubject<boolean>;

    constructor(private http: Http) {
        this.prefs = {};
        this.preferences = new BehaviorSubject<Object>(this.prefs);
        this.visible = new BehaviorSubject<boolean>(false);
        this.http.get('/frog/pref/').map(this.extractValue).subscribe(prefs => {
            this.prefs = prefs;
            this.source = Object.assign({}, this.prefs);
            this.preferences.next(this.prefs);
        });
    }
    extractValue(res: Response) {
        let body = res.json();
        return body.value || null;
    }
    setValue(key: string, value: any) {
        this.prefs[key] = value;
        let url = '/frog/pref/';
        let options = new RequestOptions();
        
        options.body = {
            key: key,
            val: value
        };
        options.withCredentials = true;
        this.http.post(url, options).map(this.extractValue).subscribe(data => {
            this.preferences.next(this.prefs);
        });;
    }
    discard() {
        this.prefs = Object.assign({}, this.source);
        this.preferences.next(this.prefs);
    }
    show() {
        this.vis = true;
        this.visible.next(this.vis);
    }
    hide() {
        this.vis = false;
        this.visible.next(this.vis);
    }
}