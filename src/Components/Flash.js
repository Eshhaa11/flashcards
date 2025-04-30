import { useState } from "react";
import "./Flash.css";

const flashcards = [
    { id: 1, question: 'What is the capital of France?', answer: 'Paris' },
    { id: 2, question: 'Who wrote Hamlet?', answer: 'William Shakespeare' },
    { id: 3, question: 'What is the speed of light?', answer: '299,792,458 m/s' }
];

const Flash = () => {
    const [flippedCard, setFlippedCard] = useState(null);

    const handleFlip = (id) => {
        setFlippedCard(flippedCard === id ? null : id);
};

return (
    <div className="app-cont">
        <h1>FlashCard</h1>
    </div>
)

}