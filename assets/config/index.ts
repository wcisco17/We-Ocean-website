export const AWS_S3_BUCKET = 'https://we-ocean.s3-ap-southeast-1.amazonaws.com';

export enum BucketImages {
    RIGHT_BACKGROUND = 'impact-right.png',
    QRCODE = 'qrcode.jpg',
};

export const pad = (n: number): number | string => n;

export function getQRCode(): string {
    const checkLocale = localStorage.getItem('@QR_DATA');
    const isLocale = String(checkLocale);
    if (!isLocale) return;
    return isLocale;
};