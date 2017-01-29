import { Task } from './Task';

export interface Play {
    name: string;
    hosts: string;
    gatherFacts: boolean;
    tasks:Array<Task>;
}