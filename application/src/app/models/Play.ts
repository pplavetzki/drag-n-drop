import { Task } from './Task';

export interface Play {
    name: string;
    hosts: string;
    host_list: Array<string>;
    gatherFacts: string;
    tasks:Array<Task>;
}