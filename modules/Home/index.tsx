import swal from '@sweetalert/with-react';
import Router from 'next/router';
import React, { useState } from 'react';
import { AWS_S3_BUCKET, BucketImages } from '../../assets/config/index';
import { theme } from '../../assets/theme/index';
import Button from '../../components/Button';
import { QrCodeReader } from './QrReader';
import { Text, Title, Wrapper } from './styles';

interface IProps { };

const HomePage: React.FC<IProps> = () => {
    const [result] = useState(null);
    // const nextPage = (link: string) => <Link href={link} />

    const handleScan = (data) => {
        if (data) {
            localStorage.setItem('@QR_DATA', data);
            swal.close();
            return Router.push({
                pathname: '/authenticated',
                query: { qr: JSON.stringify(data).slice(3, 7) }
            });
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
            <QrCodeReader
                data={result}
                handleError={handleError}
                handleScan={handleScan}
            />
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
                        text='Read Qr Code'
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
