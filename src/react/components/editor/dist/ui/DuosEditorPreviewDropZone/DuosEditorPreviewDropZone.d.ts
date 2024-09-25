import { FC } from 'react';
type DuosEditorPreviewDropZoneProps = {
    image: File | string | null;
    onChangeImage: (file: File) => void;
    removeArticleImage: () => void;
    error?: string;
};
export declare const DuosEditorPreviewDropZone: FC<DuosEditorPreviewDropZoneProps>;
export {};
