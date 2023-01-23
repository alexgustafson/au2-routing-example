import {IRoute} from "@aurelia/router";

export class Artists {
    static routes: IRoute[] = [
        {
            path: 'list',
            title: 'list',
            component: import('./list')
        },
        {
            path: 'details/:id',
            title: "details",
            component: import('./artist-details')
        }, {
            path: '',
            redirectTo: 'list',
        }
    ]
}
