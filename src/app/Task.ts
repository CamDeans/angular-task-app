// create user interface for type Task
export interface Task {
    // the '?' in Angular JS is defining the 'id' as optional
    id?: number;
    text: string;
    day: string;
    reminder: boolean;
}