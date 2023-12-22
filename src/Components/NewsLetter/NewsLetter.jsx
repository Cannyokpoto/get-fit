import React from "react";
import styled from "styled-components";

const NewsLetterStyles = styled.div`

    width: 40vw;
    height: 220px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 100px;
    border-radius: 15px;
    background: var(--planCard);
    gap: 15px;

    h2{
            font-size: 40px;
            color: var(--white);
        }

        p{
            color: var(--white);
            font-size: 15px;
        }

        form{
            width: 79%;
            height: 50px;
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
            gap: 10px;
            background-color: transparent;


            input{
                background-color: var(--white);
                font-size: 15px;
                width: 75%;
                height: 100%;
                padding: 10px;
                border-radius: 4px;
                border: none;
        }

        button{
            background-color: var(--white);
            color: var(--black);
            width: 20%;
            height: 100%;
            padding: 2px;
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;
            border: none;
            border-radius: 4px;
            font-size: 15px;
        }
        
    }



    @media (max-width: 500px){
        width: 90vw;
        height: 220px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin-top: 100px;
        border-radius: 15px;
        background: var(--planCard);
        gap: 15px;

    h2{
            font-size: 25px;
            color: var(--white);
        }

        p{
            color: var(--white);
            font-size: 15px;
        }

        form{
            width: 90%;
            height: 120px;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            gap: 10px;
            background-color: var(--planCard);


            input{
                background-color: var(--white);
                font-size: 15px;
                width: 100%;
                height: 40px;
                padding: 10px;
                border-radius: 4px;
                border: none;
        }

        button{
            background-color: var(--white);
            color: var(--black);
            width: 30%;
            height: 40px;
            padding: 2px;
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;
            border: none;
            border-radius: 4px;
            font-size: 15px;
        }
        
    }

    }
`;

function NewsLetter(){

        return(
            <NewsLetterStyles className="news-letter">
                <h2>Join Newsletter</h2>
                <p>Get regular updates every week</p>
                <form action="" method="post">
                    <input type="email" name="" id="" placeholder="Enter your email" />
                    <button>Join</button>
                </form>
            </NewsLetterStyles>
        )
};


    

export default NewsLetter;