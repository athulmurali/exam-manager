const ASSIGNMENT_API_URL =
    "https://neu-course-manager.herokuapp.com/api/topic/TID/assignment";
const ASSIGN_DEL_API_URL =
    'https://neu-course-manager.herokuapp.com/api/assignment/AID';

const HOST_URL = "https://neu-course-manager.herokuapp.com"

let _singleton;
export default class AssignmentService {
    constructor(singletonToken) {
        if (_singleton !== singletonToken)
            throw new Error('Singleton!!!');
    }


    static get instance() {
        if(!this[_singleton])
            this[_singleton] = new AssignmentService(_singleton);
        return this[_singleton]
    }


    createAssignment(topicId, assignment) {
        return fetch(ASSIGNMENT_API_URL.replace('TID', topicId),
            { body: JSON.stringify(assignment),
                headers: { 'Content-Type': 'application/json' },
                method: 'POST'
            }).then(function (response)
        {

            return response.json(); })
    }

    deleteAssign(assignId) {
        return fetch(ASSIGN_DEL_API_URL.replace
        ('AID', assignId), {
            method: 'delete'
        }).then(function (response) {
            console.log(response)
            return response.json();
        })
    }

    findAllAssignmentsByTopicId(topicId) {
        return fetch(
            ASSIGNMENT_API_URL
                .replace('TID', topicId))
            .then(function (response) {
                return response.json();
            })
    }


}
