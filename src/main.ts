import Aurelia from 'aurelia';
import { MyApp } from './my-app';
import {RouterConfiguration} from "@aurelia/router";

Aurelia
    .register(RouterConfiguration.customize({
        useUrlFragmentHash: false,
        //additiveInstructionDefault: false,
        //title: '${componentTitles} | Exedra Manager',
    }))
    .app(MyApp)
    .start();
