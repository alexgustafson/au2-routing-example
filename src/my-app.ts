import {IRoute} from "@aurelia/router";

export class MyApp {
  public message = 'Hello World!';

  static routes: IRoute[] = [
    {
      path: '',
      title: 'home',
      component: import('./home')
    },
    {
      path: 'artists',
      title: "Artists",
      component: import('./artists/artists')
    }
  ]

}
