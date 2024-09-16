import { FC } from 'react';
type DuosEditorPreviewDropZoneProps = {
    image: File | string | null;
    onChangeImage: (file: File) => void;
    removeArticleImage: () => void;
};
export declare const DuosEditorPreviewDropZone: FC<DuosEditorPreviewDropZoneProps>;
export {};
