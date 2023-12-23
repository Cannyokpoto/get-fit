import { React } from "react";
import styled from "styled-components";
import ProgramsData from '../Data/programsData';



const ProgramsStyles = styled.div`

    width: 90vw;
    height: 350px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 200px;

    h2{
        width: 35vw;
        text-align: center;
        line-height: 1.5;

            span{
                color: var(--orange);
            }
        }

        .programs-wrapper{
            width: 100%;
            height: 90%;
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
            margin-top: 70px;

            .program{
                width: 20%;
                height: 350px;
                display: flex;
                flex-direction: column;
                align-items: flex-start;
                justify-content: center;
                gap: 20px;
                padding-left: 20px;
                border-radius: 10px;
                cursor: pointer;
                background-color: var(--caloryCard);
                color: var(--white);

                &:hover{
                    background: var(--planCard);
                }


                    span{
                    width: 15%;
                    height: 50px;
                    display: flex;
                    flex-direction: row;
                    align-items: center;
                    justify-content: center;
                    border-radius: 60%;

                    .icon{
                        color: var(--white);
                        width: 100%;
                        height: 40px;
                    }
                }

                h4{
                   
                    font-size: 20px;
                }

                p{
                    font-size: 17px;
                }

                .join{
                    width: 50%;
                    height: 50px;
                    display: flex;
                    flex-direction: row;
                    align-items: center;
                    justify-content: space-between;

                    img{
                        width: 20%;
                        height: 20px;
                    }
                }
            }
        }

        
        @media (max-width: 500px){
            width: 90vw;
            height: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            margin-top: 100px;

    h2{
        width: 100vw;
        text-align: center;
        font-size: 25px;

            span{
                color: var(--orange);
            }
        }

        .programs-wrapper{
            width: 100%;
            height: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 20px;
            margin-top: 30px;

            .program{
                width: 90%;
                height: 250px;
                display: flex;
                flex-direction: column;
                align-items: flex-start;
                justify-content: center;
                gap: 10px;
                padding-left: 20px;
                border-radius: 10px;
                cursor: pointer;
                background-color: var(--caloryCard);
                color: var(--white);

                &:hover{
                    background: var(--planCard);
                }


                    span{
                    width: 10%;
                    height: 50px;
                    display: flex;
                    flex-direction: row;
                    align-items: center;
                    justify-content: center;
                    border-radius: 60%;

                    .icon{
                        color: var(--white);
                        width: 100%;
                        height: 30px;
                    }
                }

                h4{
                   
                    font-size: 20px;
                }

                p{
                    font-size: 15px;
                }

                .join{
                    width: 50%;
                    height: 50px;
                    display: flex;
                    flex-direction: row;
                    align-items: center;
                    justify-content: flex-start;
                    gap: 20px;

                    img{
                        width: 10%;
                        height: 15px;
                    }
                }
            }
        }
        
}
    
`;

function Programs(props){

        return(
            <ProgramsStyles className="programs" id="programs">
                <h2>EXPLORE <span>OUR PROGRAMS</span> TO SHAPE YOU</h2>
        
                <div className="programs-wrapper">
                    {
                        ProgramsData.map((program) =>{
                            return(
                                <div className="program">
                                    <span><img src={program.image} alt="" className="icon" /></span>
                                    <h4>{program.heading}</h4>
                                    <p>{program.details}</p>
                                    <div className="join">
                                        <p>Join Now</p>
                                        <img src={program.arrow} alt="" />
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </ProgramsStyles>
        )
};


    

export default Programs;