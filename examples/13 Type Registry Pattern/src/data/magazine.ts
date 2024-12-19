export class Magazine {
    issueNumber() : number {
        return 42
    }
}

declare module '../lib/registry' {
    export interface Magazine {
        magazine: Magazine
    }
}