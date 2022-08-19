import React, {useCallback, useState} from 'react';
import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux'

import styled from 'styled-components';
import {HomeOutlined} from '@ant-design/icons';
import {Button, Input} from 'antd';

import {LOG_OUT_REQUEST} from '../reducers/user';


const MenuHead = styled.ul`
    display: flex;
    justify-content: space-between;
    background-color: #ffffff;

    border-bottom: solid 1px #E2E2E2;
`;
const Item = styled.li`
    display: block;
    padding: 1em;
    font-size: 1rem;
    font-weight: bold;
    text-align: center;

    a{
        text-decoration: none;
        color: black;

        &.profile{
            margin-right: 2em;
        }

    }
`;
const Container = styled.div`
    display: flex;
    justify-content: center;
    text-align: center;
`;

const AppLayout = ({children}) => {
    const dispatch = useDispatch();

    const {me, logOutLoading} = useSelector((state) => state.user);

    const onLogOut = useCallback(() => {
        dispatch({
            type: LOG_OUT_REQUEST,
          });
    }, []);

    return(
        <div>
            {me ?
            <MenuHead>
                <Item>
                    <Link href='/profile'><a className='profile'>About</a></Link>
                    &nbsp;
                    <Link href='/'><a><HomeOutlined /></a></Link>
                </Item>
                <Item>
                    <Input.Search style={{width: '400px'}}/>
                </Item>
                <Item>
                    <Link href='/'><a>Recommend</a></Link>
                    &nbsp;&nbsp;
                    <Link href='/write'><a>Write</a></Link>
                    &nbsp;&nbsp;
                    <Button onClick={onLogOut} loading={logOutLoading}>LogOut</Button>
                </Item>
            </MenuHead>
            : 
            <MenuHead>
                <Item>
                    <Link href='/profile'><a className='profile'>About</a></Link>
                    &nbsp;
                    <Link href='/'><a><HomeOutlined /></a></Link>
                </Item>
                <Item>
                    <Input.Search style={{width: '400px'}}/>
                </Item>
                <Item>
                    <Link href='/'><a>Recommend</a></Link>
                    &nbsp;&nbsp;
                    <Link href='/login'><a>Login</a></Link>
                </Item>
            </MenuHead>
            }
            <Container>
                {children}
            </Container>
        </div>
    )
}

export default AppLayout;