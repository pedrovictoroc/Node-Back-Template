export interface Migration {
    run: () => Promise<any>,
    drop: () => Promise<any>
}