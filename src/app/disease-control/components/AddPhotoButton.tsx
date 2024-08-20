import React from 'react';
import styled from 'styled-components';

interface PhotoAddButtonProps {
    onAddPhoto: () => void;
}

const ButtonContainer = styled.div`
    position: fixed;
    bottom: 2rem;
    right: 2rem;
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    z-index: 10;
`;

const AddButton = styled.button`

    width: 3rem;
    height: 3rem;
    border-radius: 50%;
    background-color: #274c4b;
    filter: drop-shadow(1px 1px 10px rgba(0,0,0,0.25));
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    margin-left: 1rem;

    &:hover {
        background-color: #426968;
    }

    &:hover + div {
        opacity: 1;
    }
`;

const Tooltip = styled.div`
    position: relative;
    margin: auto 0;
    opacity: 0;
    background-color: #333;
    color: white;
    padding: 0.5rem;
    border-radius: 0.5rem;
    font-size: 0.875rem;
    margin-top: 0.5rem;
    white-space: nowrap;
`;

const PhotoAddButton: React.FC<PhotoAddButtonProps> = ({ onAddPhoto }) => {
    return (
        <ButtonContainer>
            <AddButton onClick={onAddPhoto}>
                <img src="/img/profile/add.svg" alt="Add" />
            </AddButton>
            <Tooltip>현재 식물 상태 업로드</Tooltip>    
            
        </ButtonContainer>
    );
};

export default PhotoAddButton;
