const QUESTION_API_URL =
    "https://neu-course-manager.herokuapp.com/api/exam/EID/question";
const QUESTION_DEL_API_URL =
    'https://neu-course-manager.herokuapp.com/api/question/QID';

const HOST_URL = "https://neu-course-manager.herokuapp.com"

let _singleton;
export default class QuestionService {
    constructor(singletonToken) {
        if (_singleton !== singletonToken)
            throw new Error('Singleton!!!');
    }


    static get instance() {
        if(!this[_singleton])
            this[_singleton] = new QuestionService(_singleton);
        return this[_singleton]
    }


    createEssayExamQuestion             (examId, question) {
        return fetch(QUESTION_API_URL.replace('EID', examId)
                .replace('question',"essay"),
            { body: JSON.stringify(question),
                headers: { 'Content-Type': 'application/json' },
                method: 'POST'
            }).then(function (response)
        {

            return response.json(); })
    }

    createFillInTheBlanksExamQuestion   (examId, question) {
        return fetch(QUESTION_API_URL.replace('EID', examId)
                .replace("question","blanks")
            ,
            { body: JSON.stringify(question),
                headers: { 'Content-Type': 'application/json' },
                method: 'POST'
            }).then(function (response)
        {

            return response.json(); })
    }

    createTrueOrFalseExamQuestion       (examId, question) {
        return fetch(QUESTION_API_URL.replace('EID', examId)
                .replace("question","truefalse"),
            { body: JSON.stringify(question),
                headers: { 'Content-Type': 'application/json' },
                method: 'POST'
            }).then(function (response)
        {

            return response.json(); })
    }

    createMultipleChoiceExamQuestion    (examId, question) {
        return fetch(QUESTION_API_URL.replace('EID', examId).replace("question","choice"),
            { body: JSON.stringify(question),
                headers: { 'Content-Type': 'application/json' },
                method: 'POST'
            }).then(function (response)
        {

            return response.json(); })
    }


    deleteQuestion(questionId) {
        return fetch(QUESTION_DEL_API_URL.replace
        ('QID', questionId), {
            method: 'delete'
        }).then(function (response) {
            return response;
        })
    }

    findQuestionsByExamId(examId) {
        return fetch(
            QUESTION_API_URL
                .replace('EID', examId))
            .then(function (response) {
                return response.json();
            })
    }



}
