import styled from '@emotion/styled';

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    height: 85%;
`

export const Form = styled.section`
    z-index: 11;
    margin-left: 80px;
    margin-top: 40px;
    width: 35vw;
    height: 75vh;
    background-color: #fff;
    opacity: 0.8;
    border-radius: 1.5rem;
    padding: 1em 1.5em;
    z-index: 2;

    transition: .8s;
    &:hover {
        opacity: 0.9;
        transform: scale(1.01);
    }
`

export const Title = styled.h1`
    margin-left: 20px;
    margin-top: 20px;
    font-size: 50px;
    color: rgba(255,74,86, 0.9);
    text-decoration: underline;
`

export const Input = styled.input`
    width: 90% !important;
    padding-left: 25px !important;
    margin-bottom: 20px;
    height: 30px;
    border-bottom-colors: none;
    border-left-colors: none;
    border-right-colors: none;
    border-top-colors: none;
    background: none repeat scroll 0 0 transparent;
    border-color: rgba(255,74,86, 0.9);
    border-image: none;
    border-radius: 20px 20px 20px 20px;
    border-style: solid solid solid solid;
    border-width: 1px 1px 1px 1px;
    color: rgba(255,74,86, 0.9);
    font-weight: bold;
    font-family: 'Helvetica Neue', sans-serif;
    font-size: 1em;
    line-height: 1.4em;
    padding: 5px 8px;
    transition: background-color 0.2s ease 0s;

    &:focus {
        background: none repeat scroll 0 0 rgba(255,74,86, 0.9);
        border-color: rgba(255,74,86, 0.9);
        outline-width: 0;
        color: #fff;
        font-weight: bold;
    }

    &:focus {
        color: #fff;
        font-weight: bold;

        &::placeholder {
            color: #fff;
            font-weight: bold;
        }
    }

    &::placeholder {
        color: rgba(255,74,86, 0.9);
        font-weight: bold;
    }
`

export const TextArea = styled.textarea`
    width: 92% !important;
    padding: 15px 0 0 25px !important;
    margin-bottom: 20px;
    height: 250px;
    border-bottom-colors: none;
    border-left-colors: none;
    border-right-colors: none;
    border-top-colors: none;
    background: none repeat scroll 0 0 transparent;
    border-color: rgba(255,74,86, 0.9);
    border-image: none;
    border-radius: 20px 20px 20px 20px;
    border-style: solid solid solid solid;
    border-width: 1px 1px 1px 1px;
    color: rgba(255,74,86, 0.9);
    font-weight: bold;
    font-family: 'Helvetica Neue', sans-serif;
    font-size: 1em;
    line-height: 1.4em;
    padding: 5px 8px;
    transition: background-color 0.2s ease 0s;

    &:focus {
        background: none repeat scroll 0 0 rgba(255,74,86, 0.9);
        border-color: rgba(255,74,86, 0.9);
        outline-width: 0;
        color: #fff;
        font-weight: bold;
    }

    &:focus {
        color: #fff;
        font-weight: bold;

        &::placeholder {
            color: #fff;
            font-weight: bold;
        }
    }

    &::placeholder {
        color: rgba(255,74,86, 0.9);
        font-weight: bold;
    }
`

export const SendBtn = styled.button`
    width: 200px;
    font-size: 16px;
    font-weight: 600;
    color: #fff;
    cursor: pointer;
    margin: 20px;
    height: 55px;
    text-align:center;
    border: none;
    background-size: 300% 100%;
    background-image: linear-gradient(to right, #ed6ea0, #ec8c69, #f7186a , #FBB03B);
    box-shadow: 0 4px 15px 0 rgba(236, 116, 149, 0.75);

    border-radius: 50px;
    moz-transition: all .4s ease-in-out;
    -o-transition: all .4s ease-in-out;
    -webkit-transition: all .4s ease-in-out;
    transition: all .4s ease-in-out;

    &:hover {
        background-position: 100% 0;
        moz-transition: all .4s ease-in-out;
        -o-transition: all .4s ease-in-out;
        -webkit-transition: all .4s ease-in-out;
        transition: all .4s ease-in-out;
    }

    &:focus {
        outline: none;
    }
`;