import React from 'react';
import ImageError from '../../../../static/images/error.svg';

export const ErrorPage = () => {
    return (<div>
        <img src={ImageError} alt="notFound" />
    </div>)
}