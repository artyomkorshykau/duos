import { FC } from 'react';
import { DropzoneState } from 'react-dropzone';
type DropZoneProps = {
    getRootProps: DropzoneState['getRootProps'];
    getInputProps: DropzoneState['getInputProps'];
    accept: string[];
    className?: string;
    downloadButtonClassName?: string;
};
export declare const DropZone: FC<DropZoneProps>;
export {};
