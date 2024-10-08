import { default as React } from 'react';
export type Option<Value> = {
    id: number | string;
    label: string;
    value: Value;
    isDefault?: boolean;
};
type SelectProps<OptionValue> = {
    options: Option<OptionValue>[];
    placeholder?: string;
    onChange?: (value: OptionValue) => void;
    error?: string;
};
export declare function Select<OptionValue>({ placeholder, options, onChange, error, }: SelectProps<OptionValue>): React.JSX.Element;
export {};
