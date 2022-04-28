export interface Migration{
    run: () => Promise<string>
    drop: () => Promise<string>
}