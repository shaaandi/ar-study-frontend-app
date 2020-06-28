import React from 'react';
import styled from 'styled-components';

const Image = styled.img`
    ${({ size }) =>
        size === 'small' &&
        `
        width : 150px;
        height: 150px;
        border-radius : 75px;
        border : solid 3px gray;

        @media only screen and (max-width: 600px) {
              width : 100px;
        height: 100px;
        border-radius : 50px;
        border : solid 3px gray;
        }
    `}
`;

function ProfileImage({ src, size = 'small' }) {
    return <Image src={src} size={size} />;
}

export default ProfileImage;
