import { SyntheticEvent } from 'react';
type AnyFn = (...args: any[]) => void;
export declare const createPreventDefault: <Fn extends AnyFn>(fn: Fn) => (event: SyntheticEvent) => void;
export {};
