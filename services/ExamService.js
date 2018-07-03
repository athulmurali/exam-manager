const EXAM_API_URL =
    "https://neu-course-manager.herokuapp.com/api/topic/TID/exam";
const EXAM_DEL_API_URL =
    'https://neu-course-manager.herokuapp.com/api/exam/EID';

const HOST_URL = "https://neu-course-manager.herokuapp.com"

let _singleton;
export default class ExamService {
    constructor(singletonToken) {
        if (_singleton !== singletonToken)
            throw new Error('Singleton!!!');
    }


    static get instance() {
        if(!this[_singleton])
            this[_singleton] = new ExamService(_singleton);
        return this[_singleton]
    }


    createAssignment(topicId, exam) {
        return fetch(EXAM_API_URL.replace('TID', topicId),
            { body: JSON.stringify(exam),
                headers: { 'Content-Type': 'application/json' },
                method: 'POST'
            }).then(function (response)
        {

            return response.json(); })
    }

    deleteExam(examId) {
        return fetch(EXAM_DEL_API_URL.replace
        ('EID', examId), {
            method: 'delete'
        }).then(function (response) {
            console.log(response)
            return response.json();
        })
    }

    findExamsByTopicId(topicId) {
        return fetch(
            EXAM_API_URL
                .replace('TID', topicId))
            .then(function (response) {
                return response.json();
            })
    }


}
