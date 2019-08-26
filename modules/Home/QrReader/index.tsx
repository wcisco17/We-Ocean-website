import * as React from 'react';
if (typeof window === 'undefined') {
    // do nothing
} else {
    var QrReader = require('react-qr-reader');
}

interface IProps {
    handleError: (d: any) => void;
    handleScan: (e: any) => void;
    data: any;
}

export const QrCodeReader: React.FC<IProps> = ({ handleError, handleScan, data }) => {
    return (
        <div>
            <QrReader
                onError={handleError}
                onScan={handleScan}
                style={{
                    width: '60%',
                    display: 'inline-flex',
                    position: 'relative',
                    top: '-270px',

                }}
            />
            <p style={{
                position: 'absolute',
                top: '542px',
                left: 0,
                right: 0,
            }} >
                Result: {data}
            </p>
        </div>
    )
};
