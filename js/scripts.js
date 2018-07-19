window.onload = function(){
    quizGame.init();
};

let quizGame = {
    init: function(){
        handlers.genCategory();
    },
    questions: [
        {  
            category: "math",
            questions: [
                {
                    question: "What is 1 + 1?",
                    correctAnswer: "2",
                    wrongAnswer: ["1", "3", "4"]
                },
                {
                    question: "What is 1 + 2?",
                    correctAnswer: "3",
                    wrongAnswer: ["1", "2", "4"]
                }
            ]
        },
        {
            category: "not math",
            questions: [
                {
                    question: "Is this math",
                    correctAnswer: "no",
                    wrongAnswer: ["yes", "bacon", "cheese"]
                }
            ]
        }
    ] //End questions
} //End quizGame


let handlers = {
    genCategory: function(){
        view.genCategory();
    }
};


let view = {
    genCategory: function(){
        // Select Parent Element
        let parent = document.querySelector(".category_card");

        for(let i = 0; i < quizGame.questions.length; i++){
            // Create Div
            let div = document.createElement("div");
            div.className = "category_card-container";
            parent.append(div);

            // Create P element
            let p = document.createElement("p");
            p.className = "category_card-header";
            p.textContent = quizGame.questions[i].category;
            div.append(p);
        }
    }
};