export class Video {
    duration(): number {
        return 342
    }
}

declare module '../lib/registry' {
    export interface DataTypeRegistry {
        video: Video
    }
}