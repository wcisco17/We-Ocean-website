import Router from 'next/router';
import * as React from 'react';
import { AWS_S3_BUCKET, BucketImages } from '../../../assets/config/index';
import { theme } from '../../../assets/theme';
import Button from '../../../components/Button';
import { Points } from '../styles';

export default () => {
    const [datas, setData] = React.useState('');

    const checkItem = () => {
        if (localStorage.getItem('@QR_DATA') === null) {
            return Router.push(({
                pathname: '/'
            }));
        }
    }

    React.useEffect(() => {
        checkItem()
    }, [checkItem]);

    const checkToken = () => {
        if (localStorage.getItem('@TOKEN') === null) {
            return Router.push(({
                pathname: '/authenticated'
            }));
        }
    }

    React.useEffect(() => {
        checkToken()
    }, [checkToken]);

    const getData = () => {
        if (typeof localStorage === 'undefined') {
            // do nothing;
        } else {
            return setData(localStorage.getItem('@QR_DATA'));
        }
    }

    React.useEffect(() => {
        getData();
        console.log((datas));
    }, [getData]);

    return (
        <React.Fragment>
            <Button
                backgroundColor={theme.colors.danger}
                textColor={theme.colors.white}
                onClick={() => Router.push({
                    pathname: '/dashboard'
                })}
                text='Back'
            />
            <Points>
                <h1 style={{ textAlign: 'center' }} >Scan to Earn Points</h1>
                <img
                    src={`${AWS_S3_BUCKET}/${BucketImages.QRCODE}`}
                    alt={BucketImages.QRCODE}
                    style={{
                        width: '350px',
                        height: '350px',
                    }}
                />
            </Points>
        </React.Fragment>
    )
}
