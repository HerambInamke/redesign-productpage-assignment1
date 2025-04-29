import React from 'react';
import { RouteObject } from 'react-router-dom';
import Home from '@/views/Home';

const sharedRoutes: RouteObject[] = [
    {
        path: '/',
        element: <Home />,
    },
    {
        path: '/about',
        element: <div>About Page</div>,
    },
    {
        path: '/contact',
        element: <div>Contact Page</div>,
    },
];

export default sharedRoutes;