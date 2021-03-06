
export class User {
    public id: number;
    public name: string;
    public email: string;
    public username: string;
    public prefs: Object;
    public isManager: boolean;
}

export class Comment {
    public id: number;
    public date: Date;
    public comment: string;
    public user: User;
}

export class Tag {
    public id: number;
    public name: string;
    public artist: boolean;
    public type: string;

    constructor(id: number, name: string, artist: boolean) {
        this.id = id;
        this.name = name;
        this.artist = artist;
        this.type = (this.id === 0) ? 'search' : 'tag';
    }
}

export interface IItem {
    hash: string;
    tags: Tag[];
    deleted: boolean;
    height: number;
    guid: string;
    id: number;
    title: string;
    author: User;
    modified: Date;
    created: Date;
    width: number;
    comment_count: number;
    source: string;
    small: string;
    thumbnail: string;
    comments?: Comment[];
    description: string;
    selected: boolean;
    like_count: number;
}


export class CImage implements IItem {
    hash: string;
    tags: Tag[];
    deleted: boolean;
    image: string;
    height: number;
    guid: string;
    id: number;
    title: string;
    author: User;
    modified: Date;
    created: Date;
    width: number;
    comment_count: number;
    source: string;
    small: string;
    thumbnail: string;
    comments: Comment[];
    description: string;
    selected: boolean;
    like_count: number;
}


export class CVideo implements IItem {
    hash: string;
    tags: Tag[];
    deleted: boolean;
    video: string;
    height: number;
    guid: string;
    id: number;
    title: string;
    author: User;
    modified: Date;
    created: Date;
    width: number;
    comment_count: number;
    source: string;
    small: string;
    thumbnail: string;
    poster: string;
    comments: Comment[];
    description: string;
    selected: boolean;
    framerate: number;
    like_count: number;
}


export class Notification {
    public text: string;
    public icon: string;
    public color: string;
    public timeout: number;

    constructor(text: string, icon: string, timeout: number = 5000) {
        this.text = text;
        this.icon = icon;
        this.timeout = timeout;
    }
}


export class Gallery {
    id: number;
    title: string;
    security: number;
    image_count: number;
    video_count: number;
    owner: User;
    description: string;
    uploads: boolean;
    parent: Gallery;
}
