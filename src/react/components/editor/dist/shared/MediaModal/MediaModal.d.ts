import { FC, ReactNode } from 'react';
type MediaModalProps = {
    title: string;
    inputTitle: string;
    accept: string;
    acceptFormats: string[];
    dropzoneTitle?: string;
    uploadFile?: (selectedFile: File) => Promise<string>;
    getPreview?: (blobString: string) => ReactNode;
    add: (url: string) => void;
    inputType?: string;
};
export declare const MediaModal: FC<MediaModalProps>;
export {};
