"use client";

import { useState, useRef, useEffect } from "react";

import styled from "styled-components";
import COLORS from "../data/colors";
import GenerateBtn from "@/app/computerEssentials/GenerateBtn.js";
import Question from "@/app/computerEssentials/Question.js";
import ExamQuestions from "./AllQuestions/ExamQuestions.js";

const Cont = styled.div`
    padding: 32px;
    max-width: 1000px;
    margin: 0 auto;
    @keyframes opacity {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }

    .opacity-anim {
        animation: opacity 0.5s ease;
    }

    .week {
        padding: 4px 8px;
        border: 1px solid ${(props) => props.colors.green1};
        cursor: pointer;
    }
    .week-active {
        p {
            font-weight: 700;
            color: ${(props) => props.colors.green4};
        }
        box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
        border: 2px solid ${(props) => props.colors.green4};
    }
`;
const PageRender = ({ weeksFetch, title }) => {
    // turn the array of arrays into a single array
    const fullQuestionList = [].concat.apply([], weeksFetch);
    // array of each and all weeks content
    const [weeks, setWeeks] = useState(weeksFetch);
    // the current week
    const [week, setWeek] = useState(0);
    // ref to the question
    const questionRef = useRef(null);
    // defaults to first weeks first question
    const [question, setQuestion] = useState(weeks[0][0]);
    // the show state of the question answ3er
    const [show, setShow] = useState(false);
    // selects a new random question and displays it
    const selectRandomQuestion = () => {
        setShow(false);
        const number = Math.floor(Math.random() * weeks[week].length);
        if (weeks[week][number].question == question.question) {
            selectRandomQuestion();
            return;
        }
        setQuestion(weeks[week][number]);

        try {
            if (questionRef != null) {
                questionRef?.current?.classList?.add("opacity-anim");
                setTimeout(() => {
                    questionRef?.current?.classList?.remove("opacity-anim");
                }, 500);
            }
        } catch (e) {}
    };

    // week buttons at top of page to select a new weeks content
    const [weekBtns, setWeekBtns] = useState(() => {
        let weekObj = [];
        for (let i = 0; i < weeks.length; i++) {
            weekObj.push(
                <div
                    onClick={() => setWeek(i)}
                    className={i == week ? "week week-active" : "week"}
                >
                    <p>Week {i + 1}</p>
                </div>
            );
        }
        return weekObj;
    });

    // updates the weeks ui when a different week is selected
    useEffect(() => {
        setWeekBtns((prev) => {
            let weekObj = [];
            for (let i = 0; i < weeks.length; i++) {
                weekObj.push(
                    <div
                        onClick={() => setWeek(i)}
                        className={i == week ? "week week-active" : "week"}
                    >
                        <p>Week {i + 1}</p>
                    </div>
                );
            }
            return weekObj;
        });
        selectRandomQuestion();
    }, [week]);
    return (
        <Cont colors={COLORS}>
            <h2 className="mar-bottom-8">{title} Study Quiz</h2>
            <div className="grey-line mar-bottom-16"></div>
            <div className="flex mar-bottom-32 flex-wrap">{weekBtns}</div>
            <div className="flex justify-center mar-bottom-32">
                <div onClick={selectRandomQuestion}>
                    <GenerateBtn />
                </div>
            </div>
            <div className=" flex-column align-center" ref={questionRef}>
                <Question question={question} show={show} setShow={setShow} />
            </div>
            <div className="mar-bottom-32"></div>
            <ExamQuestions fullQuestionList={fullQuestionList} />
        </Cont>
    );
};

export default PageRender;
