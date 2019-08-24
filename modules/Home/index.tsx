import swal from '@sweetalert/with-react';
import React, { useState } from 'react';
import { AWS_S3_BUCKET, BucketImages } from '../../assets/config/index';
import { theme } from '../../assets/theme/index';
import Button from '../../components/Button';
import { Text, Title, Wrapper } from './styles';
if (typeof window === 'undefined') {
    // do nothing
} else {
    var QrReader = require('react-qr-reader');
}

interface IProps { };

const HomePage: React.FC<IProps> = () => {
    const [result, setResult] = useState('');

    const handleScan = data => {
        console.log('[DATA]: ', data);

        if (data) {
            setResult(data);
        }
    }

    const handleError = err => {
        console.error(err)
    }

    const modal = () => swal({
        text: "Please Login",
        buttons: {
            cancel: "Close",
        },
        content: (
            <div>
                <QrReader
                    onError={handleError}
                    onScan={handleScan}
                    style={{ width: '60%', }}
                />
                <p>
                    Result:
                    {
                        result
                    }
                </p>
            </div>
        )
    });

    return (
        <Wrapper>
            <div className="text">
                <div className="wrapper-home_title">
                    <Title color={theme.colors.primary} size='29px'>
                        Welcome Back to We Ocean,
                     </Title>
                    <Text style={{
                        paddingTop: 15,
                        paddingBottom: 15
                    }} size='25px' color={'black'}>
                        Think impactfully about the environment, time to clean our ocean.
                </Text>
                    <Text
                        style={{
                            paddingTop: 15,
                            paddingBottom: 15
                        }}
                        size='20px'
                        color={theme.colors.grey.normal}>
                        Login or download the App to start earning points!
                </Text>
                </div>
                <div className="wrapper-home_button">
                    <Button
                        backgroundColor={theme.colors.primary}
                        textColor={theme.colors.white}
                        onClick={() => modal()}
                        text='Log In Now'
                    />
                    <div style={{ marginRight: 20 }} />
                    <Button
                        backgroundColor={theme.colors.white}
                        textColor={theme.colors.dark}
                        onClick={() => ''}
                        text='Download The App'
                        shadow
                    />
                </div>
            </div>

            <div className="image">
                <div className="wrap">
                    <img src={`${AWS_S3_BUCKET}/${BucketImages.RIGHT_BACKGROUND}`} alt={BucketImages.RIGHT_BACKGROUND} />
                </div>
            </div>
        </Wrapper>
    );
};

export default HomePage;
