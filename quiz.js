const quizData = [
    {
        question: "Mi az Advent?",
        a: "Az adventi időszak a keresztény naptárban Jézus születésére való felkészülés ideje.",
        b: "Az advent az év végi ünnepek összességét jelöli.",
        c: "Az adventi időszak a keresztény naptárban Jézus születésére való felkészülés ideje.",
        d: "Az advent a kereszténység pünkösd utáni időszaka.",
        correct: "a",
    },
    {
        question: "Mit jelent az advent szó?",
        a: "Várakozás",
        b: "Eljövetel",
        c: "Ünneplés",
        d: " Újjászületés",
        correct: "b",
    },
    {
        question: "Hány vasárnapból áll az adventi időszak?",
        a: "2",
        b: "3",
        c: "4",
        d: "5",
        correct: "c",
    },
    {
        question: "Mi az adventi koszorú eredeti célja?",
        a: "A ház díszítése",
        b: " Az adventi időszak napjainak számlálása",
        c: "A hit erősítése és az eljövetelre való készülés",
        d: "Az egyházi ünnep megjelölése",
        correct: "c",
    },
    {
        question: "Milyen színű gyertyák vannak hagyományosan az adventi koszorún?",
        a: "Fehér és kék",
        b: " Zöld és sárga",
        c: "Piros és arany",
        d: "Lila és rózsaszín",
        correct: "d",
    },
    {
        question: "Melyik gyertyát gyújtják meg advent harmadik vasárnapján?",
        a: "Az első lilát",
        b: "A rózsaszínt",
        c: " A második lilát",
        d: "A negyedik lilát",
        correct: "b",
    },
    {
        question: "Mit ünnepelnek advent első vasárnapján?",
        a: "Krisztus születését",
        b: "Az egyházi év kezdetét",
        c: "A bűnbánatot",
        d: " A remény vasárnapját",
        correct: "b",
    },
    {
        question: "Melyik szentet ünnepeljük advent idején, december 6-án?",
        a: "Szent Miklóst",
        b: "Szent Jánost",
        c: "Szent Annát",
        d: "Szent Pétert",
        correct: "a",
    },
    {
        question: "Hogyan kapcsolódik Pannonhalma adventhez?",
        a: "Adventi vásárokat szervez",
        b: "Egyáltalán nem kapcsolódik",
        c: "Zenei fesztivált tartanak",
        d: "Gyertyagyújtási hagyományokkal és lelki elmélyüléssel várják az eljövetelt",
        correct: "d",
    },
    {
        question: "Mi a jelentősége a rózsaszín gyertyának?",
        a: "A bűnbánat jelképe",
        b: "Az öröm vasárnapját jelöli",
        c: "A szeretet szimbóluma",
        d: "A hit megerősítése",
        correct: "b",
    },
    {
        question: "Melyik bibliai személy advent egyik központi alakja?",
        a: " Mózes",
        b: "Dávid király",
        c: "Keresztelő Szent János",
        d: " Szent Péter",
        correct: "c",
    },
    {
        question: "Mit jelképez az adventi koszorú kerek formája?",
        a: "A világ végtelenségét",
        b: "Az örökkévalóságot",
        c: "A Föld kerek formáját",
        d: "Az élet körforgását",
        correct: "b",
    },
    {
        question: "Melyik hagyományos adventi ének kapcsolódik szorosan az időszakhoz?",
        a: "Pásztorok, pásztorok",
        b: "Ó, jöjj, ó, jöjj, Emmanuel",
        c: "Mennyből az angyal",
        d: "Adeste Fideles",
        correct: "b",
    },
    {
        question: "Melyik bibliai eseményt kapcsolják az adventi várakozáshoz?",
        a: "Mózes vezetése a pusztában",
        b: "Szent István király koronázása",
        c: "A keresztség szertartása",
        d: "Jézus születése Betlehemben",
        correct: "d",
    },
    {
        question: "Milyen szimbólumok jelennek meg gyakran adventi időszakban?",
        a: "Csillagok és gyertyák",
        b: "Liliomok és rózsák",
        c: "Télapó és hóember",
        d: "Kereszt és galamb",
        correct: "a",
    },
];

const quiz = document.getElementById("quiz");
const countQestion = document.getElementById("count-question");
const tottleNumberOfQuestion = document.getElementById("tol-num-que");
const questionNumber = document.getElementById("question-number");
const questionTitle = document.getElementById("question");
const answerLable = document.querySelectorAll(".answer-lable");
const nextQuestionbtn = document.getElementById("next-question-btn");
const radioButtons = document.querySelectorAll("input[type='radio']");
const submitequiz = document.getElementById("submite");
const resultEl= document.getElementById("result");
const scoreEl=document.getElementById("score")
let currentQtn = 0;
let answerd = 0;

const loadQuiz = () => {
    countQestion.innerHTML = `${currentQtn + 1}`;
    tottleNumberOfQuestion.innerHTML = quizData.length;
    questionNumber.innerHTML = `${currentQtn + 1}`;
    questionTitle.innerHTML = quizData[currentQtn].question;
    answerLable[0].innerHTML = quizData[currentQtn].a;
    answerLable[1].innerHTML = quizData[currentQtn].b;
    answerLable[2].innerHTML = quizData[currentQtn].c;
    answerLable[3].innerHTML = quizData[currentQtn].d;
    // answerLable[4].innerHTML = quizData[currentQtn].d;

    reset();
    if(currentQtn==quizData.length-1){
        nextQuestionbtn.style.display="none";
        submitequiz.style.display="block"
    }

};

const reset = () => {
    radioButtons.forEach((radioButton) => {
        radioButton.checked = false;
    });
};

const getSelected = () => {
    let answer;
    radioButtons.forEach((radioButton) => {
        if (radioButton.checked) {
            answer = radioButton.value;
        }
    });
    return answer;
};

nextQuestionbtn.addEventListener("click", () => {
    let answer = getSelected();
    if (answer) {
        if (answer === quizData[currentQtn].correct) {
            answerd++;
        }
        currentQtn++;
        if (currentQtn < quizData.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = `<h2>You answered ${answerd}/${quizData.length} questions correctly!</h2>`;
        }
    } else {
        alert("Please select an answer!");
    }
});




submitequiz.addEventListener("click", () =>{
    let answer = getSelected()
    if(answer===quizData[currentQtn].correct){
        answerd++;
    };
    currentQtn++;
    if(getSelected()){
        quiz.style.display="none";
        resultEl.style.display="block";
        scoreEl.innerHTML=`<p>Köszönjük, hogy részt vett adventi kvízünk kitöltésében!</p> 
        <p>Kívánjuk, hogy az adventi időszak hozza el a lelki megújulást, és áldott, békés ünnepeket töltsön szeretteivel.</p>
         <p>  ${answerd} / ${quizData.length}</p>
      `
    }
})
loadQuiz();
