export declare const useAbortController: () => {
    readonly abort: (reason?: string) => void;
    readonly controller: AbortController;
    readonly signal: AbortSignal;
};
