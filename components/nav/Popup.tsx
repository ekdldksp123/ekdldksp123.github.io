/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled';
import { useEffect } from 'react';

interface ModalProps {
    toggle: boolean,
    onClose: () => void,
    title: string,
    content: string,
}

const Modal: React.FC<ModalProps> = ({toggle, onClose, title, content}) => {
    useEffect(() => {
        if(toggle) document.body.style.cssText = `position: fixed; top: -${window.scrollY}px`
    }, [toggle]);

    return toggle ? (
        <StyledModalOverlay onClick={() => onClose()}>
            <StyledModal>
                <StyledModalHeader>
                    <Close href="#" onClick={() => onClose()}>x</Close>
                    <StyledModalTitle>{title}</StyledModalTitle>
                </StyledModalHeader>
                <StyledModalBody>{content}</StyledModalBody>
                <StyledModalFooter>
                    <ConfirmBtn/>
                </StyledModalFooter>
            </StyledModal>
        </StyledModalOverlay>
    ) : <></>;
}

export default Modal;

const StyledModalBody = styled.div`
    padding-top: 25px;
    text-align: center;
    font-size: 20px;
    color: #808080;
    width: 100%;
    height: 80px;
`;

const StyledModalHeader = styled.div`
    display: flex;
    flex-direction: row-reverse;
    padding: 15px 25px 15px 25px;
    border-top-left-radius: 25px;
    border-top-right-radius: 25px;
    background-color: #1ECD97;
    font-size: 25px;
`;

const StyledModal = styled.div`
    display: flex;
    flex-direction: column;
    background: white;
    width: 350px;
    height: 200px;
    border-radius: 25px;
    padding-bottom: 20px;
`;

const StyledModalTitle = styled.div`
    display: relative;
    margin: 0 auto;
    padding-top: 10px;
    font-size: 20px;
    font-weight: bold;
    color: white;
`
const StyledModalOverlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.5);
`;

const Close = styled.a`
    color: white;
    text-decoration: none;
`

const StyledModalFooter = styled.div`
    position: relative;
    #bottom: -50px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`

const ConfirmBtn = styled.button`
    outline:none;
    height: 40px;
    text-align: center;
    width: 130px;
    border-radius:40px;
    background: #fff;
    border: 2px solid #1ECD97;
    color:#1ECD97;
    letter-spacing:1px;
    text-shadow:0;
    font:{
        size:12px;
        weight:bold;
    }
    cursor: pointer;
    transition: all 0.25s ease;

    &:hover {
        color:white;
        background: #1ECD97;
    }
    &:active {
        letter-spacing: 2px ;
    }
    &:after {
        content:"CONFIRM";
    }
`