import React from 'react';
import img from '../../services/assets/Capturar.svg';
import { ImgLoading } from '../Loading/LoadingStyle';

const Loading = () => {
    return (
        <div>
            <ImgLoading src={img.loading} alt="imagem de loading" />
            <p>CARREGANDO..</p>
        </div>
    );
};

export default Loading;