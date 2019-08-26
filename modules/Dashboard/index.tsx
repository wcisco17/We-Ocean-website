import Router from 'next/router';
import React from 'react';
import { useQuery } from 'react-apollo-hooks';
import { theme } from '../../assets/theme/index';
import Button from '../../components/Button';
import { CURRENT_USER } from '../../components/Resolvers/index';
import { Wrapper } from './styles';

interface IPropsDash { };

const Dash: React.FC<IPropsDash> = () => {
    const [datas, setData] = React.useState('');
    const [userId, setUserId] = React.useState(null);

    const logout = () => {
        localStorage.removeItem('@QR_DATA');
        localStorage.removeItem('@TOKEN');
        return Router.push({
            pathname: '/',
        });
    }

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
    }, [getData]);


    const auth = () => {
        const qr = datas.split("qr-").pop();
        const id = datas.split("id-").pop().replace(qr, '').replace(',qr-', '');
        setUserId(id);
    }

    React.useEffect(() => {
        auth();
    }, [auth]);

    const { data, loading } = useQuery(CURRENT_USER, {
        variables: {
            current: userId
        }
    });

    const nextPage = () => Router.push({
        pathname: '/points',
        query: { id: userId }
    })

    return (
        <React.Fragment>
            {
                loading ?
                    (
                        <div>Loading...</div>
                    ) : (
                        <Wrapper>
                            <div className="wrapper-container">
                                <h1>Welcome: {data.user.email}</h1>
                                <div className="wrapper-container_btn">
                                    <Button
                                        backgroundColor={theme.colors.danger}
                                        textColor={theme.colors.white}
                                        onClick={() => logout()}
                                        text='Sign Out'
                                    />
                                    <Button
                                        backgroundColor={theme.colors.primary}
                                        textColor={theme.colors.white}
                                        onClick={() => nextPage()}
                                        text='Add Points'
                                    />
                                </div>
                            </div>
                        </Wrapper>
                    )
            }
        </React.Fragment>
    )
}

export default Dash;
