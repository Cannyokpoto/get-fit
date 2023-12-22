import React from "react";
import styled from "styled-components";

const ContactStyles = styled.div`

    width: 70vw;
    height: 550px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 150px;
    border-radius: 15px;
    gap: 15px;

    .tag{
        width: 40%;
        height: 70px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        /* border-radius: 15px; */
        background-color: transparent;

        
    h2{
            font-size: 40px;
        }

        p{
            font-size: 15px;
        }
    }


        form{
            width: 79%;
            height: 79%;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            justify-content: center;
            gap: 30px;
            background-color: transparent;

            .message-label{
                width: 100%;
                height: 150px;
                display: flex;
                flex-direction: column;
                align-items: flex-start;
                justify-content: center;
                font-size: 15px;
            }


            label{
            width: 100%;
            height: 40px;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            justify-content: center;
            font-size: 15px;


            input{
                background-color: var(--lightBlue_2);
                font-size: 15px;
                width: 100%;
                height: 100%;
                padding: 10px;
                border-radius: 4px;
                border: none;
        }

        
        textarea{
                background-color: var(--lightBlue_2);
                font-size: 15px;
                width: 100%;
                height: 100%;
                padding: 10px;
                border-radius: 4px;
                border: none;
        }
        
    }

        button{
                background-color: var(--mediumSlateBlue);
                color: var(--lightBlue_1);
                width: 15%;
                height: 60px;
                padding: 2px;
                display: flex;
                flex-direction: row;
                align-items: center;
                justify-content: center;
                border: none;
                border-radius: 4px;
                font-size: 15px;
                cursor: pointer;

                &:hover{
                    background-color: var(--darkBlue_2)
                }
        }

}

    @media (max-width: 500px){
        width: 90vw;
        height: 550px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin-top: 100px;
        border-radius: 15px;
        gap: 15px;

    .tag{
        width: 100%;
        height: 70px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        /* border-radius: 15px; */
        background-color: transparent;

        
    h2{
            font-size: 25px;
        }

        p{
            font-size: 15px;
        }
    }


        form{
            width: 100%;
            height: 79%;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            justify-content: center;
            gap: 30px;
            background-color: transparent;

            .message-label{
                width: 100%;
                height: 150px;
                display: flex;
                flex-direction: column;
                align-items: flex-start;
                justify-content: center;
                font-size: 15px;
            }


            label{
            width: 100%;
            height: 40px;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            justify-content: center;
            font-size: 15px;


            input{
                background-color: var(--lightBlue_2);
                font-size: 15px;
                width: 100%;
                height: 100%;
                padding: 10px;
                border-radius: 4px;
                border: none;
        }

        
        textarea{
                background-color: var(--lightBlue_2);
                font-size: 15px;
                width: 100%;
                height: 100%;
                padding: 10px;
                border-radius: 4px;
                border: none;
        }
        
    }

        button{
                background-color: var(--mediumSlateBlue);
                color: var(--lightBlue_1);
                width: 35%;
                height: 60px;
                padding: 2px;
                display: flex;
                flex-direction: row;
                align-items: center;
                justify-content: center;
                border: none;
                border-radius: 4px;
                font-size: 15px;
                cursor: pointer;

                &:hover{
                    background-color: var(--darkBlue_2)
                }
        }

}
    }
`;







function Contact(){

        return(
            <ContactStyles className="hero-section" id="contact">
                <div className="tag">
                    <h2>Get In Touch</h2>
                    <p>We would love to hear from you.</p>
                </div>
                <form action="" method="post">
                    <label htmlFor="name">Name
                        <input type="text" name="" id="name" />
                    </label>
                    <label htmlFor="email">Email
                        <input type="email" name="" id="email" />
                    </label>
                    <label htmlFor="subject">Subject
                        <input type="text" name="" id="email" />
                    </label>
                    <label htmlFor="message" className="message-label">Message
                        <textarea name="" id="" cols="50" rows="10"></textarea>
                    </label>
                    
                    <button>submit</button>
                </form>
            </ContactStyles>
        )
};


    

export default Contact;