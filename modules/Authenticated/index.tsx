import Router from 'next/router';
import * as React from 'react';
import { useMutation } from 'react-apollo-hooks';
import styled, { theme } from '../../assets/theme/index';
import Button from '../../components/Button';
import { AUTHENTICATED } from '../../components/Resolvers/index';
interface IProps { };

const Container = styled.section`
    background: lightblue;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    .container-header {
        background: white;
        width: 800px;
        height: 550px;
        border-radius: 20px;
    }
`;

const Auth: React.FC<IProps> = () => {
    const [datas, setData] = React.useState('');
    const [userId, setUserId] = React.useState(null);
    const [qrCode, setQrCode] = React.useState(null);

    const checkItem = () => {
        if (localStorage.getItem('@QR_DATA') === null) {
            return Router.push(({
                pathname: '/'
            }));
        }
    }

    React.useEffect(() => {
        checkItem();
    }, [checkItem]);

    const checkIfLoggedIn = () => {
        if (localStorage.getItem('@TOKEN')) {
            return Router.push(({
                pathname: '/dashboard'
            }));
        }
    }

    React.useEffect(() => {
        checkIfLoggedIn();
    }, [checkIfLoggedIn]);

    const logout = () => {
        localStorage.removeItem('@QR_DATA');
        localStorage.removeItem('@TOKEN');
        return Router.push({
            pathname: '/',
        });
    }

    const getData = () => {
        if (typeof localStorage === 'undefined') {
            // do nothing;
        } else {
            return setData(localStorage.getItem('@QR_DATA'));
        }
    }

    React.useEffect(() => {
        getData();
    }, [getData]);

    const auth = () => {
        const id = datas.split("qr-").pop();
        const qr = datas.split("id-").pop().replace(id, '').replace(',qr-', '');
        setQrCode(id);
        setUserId(qr);
    }

    React.useEffect(() => {
        auth();
    }, [auth]);

    const [authenticated, { loading, hasError, data }] = useMutation(AUTHENTICATED, {
        variables: {
            userId,
            qrCode,
        },
    });

    const login = () => {
        authenticated();
    }

    React.useEffect(() => {
        if (data) {
            Router.push({
                pathname: '/dashboard',
            });
            return localStorage.setItem('@TOKEN', data.authenticate.isLoggedIn)
        }
    }, [auth]);

    if (!loading) {
        return (
            <React.Fragment>
                {
                    hasError ? logout() : (

                        <Container>
                            <div className="container-header">
                                <h2 className="header">
                                    Welcome back:
                </h2 >
                                <Button
                                    backgroundColor={theme.colors.primary}
                                    textColor={theme.colors.white}
                                    onClick={() => login()}
                                    text='Log In'
                                />
                                <Button
                                    backgroundColor={theme.colors.primary}
                                    textColor={theme.colors.white}
                                    onClick={() => logout()}
                                    text='Back'
                                />
                            </div >
                        </Container >
                    )
                }
            </React.Fragment>
        );
    } else {
        return (<p>Waiting for authentication...</p>);
    }
}

export default Auth;
