import axios from 'axios';
import jwt_decode from "jwt-decode";


const SET_AUTH_DATA = 'SET_AUTH_DATA'

const initialState = {
    id: null,
    email: null,
    name: null,
    surname: null,
    aftername: null,
    classNum: null,
    git: null,
    phoneNum: null,
    role: null,
    img: null,
    portfolioId: null,
    resumeId: null,
    isLogined: false
}

const authReducer = (action, state=initialState) => {
    switch (action.type) {
        case SET_AUTH_DATA:
            return {
                id: action.data.id,
                email: action.data.id,
                name: action.data.id,
                surname: action.data.id,
                aftername: action.data.id,
                classNum: action.data.id,
                git: action.data.id,
                phoneNum: action.data.id,
                role: action.data.id,
                img: action.data.id,
                portfolioId: action.data.id,
                resumeId: action.data.id,
                isLogined: true
            }
    }
}

const setAuthDAta = (id, email, name, surname, aftername,
                     classNum, git, phoneNum, role, img,
                     portfolioId, resumeId,) => {
                        return {type: SET_AUTH_DATA, data: {
                                                        id: id,
                                                        email: email,
                                                        name: name,
                                                        surname: surname,
                                                        aftername: aftername,
                                                        classNum: classNum,
                                                        git: git,
                                                        phoneNum: phoneNum,
                                                        role: role,
                                                        img: img,
                                                        portfolioId: portfolioId,
                                                        resumeId: resumeId,
                            }}
}

export const setAuthDAtaThunk = () => dispatch => {
    const url = 'http://localhost:3030/api/user/auth'
    axios.get(url, {}, {headers: {
        Authorization: 'Beer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NiwiZW1haWwiOiJibGFibGFiZGRkZGRkbGFAZ21haWwuY29tIiwibmFtZSI6IlZsYWRpbWlyIiwic3VybmFtZSI6Ikl2YW5vdiIsImFmdGVybmFtZSI6Ikl2YW5vdmljaCIsImNsYXNzTnVtIjoiQkwtMjEiLCJnaXQiOiJodHRwczovL2dpdGh1Yi5jb20iLCJwaG9uZU51bSI6Ijg5MDA1MjgzNTM1Iiwicm9sZSI6IkVNUExPWUVSIiwiaW1nIjoiMjcwNmZmYzYtNDU4Mi00YmI2LTg2OTktOWJkNDE5MTQ5OTVlLmpwZyIsInBvcnRmb2xpb0lkIjo2LCJyZXN1bWVJZCI6NiwiaWF0IjoxNjM5ODc3NzY3LCJleHAiOjE2Mzk5NjQxNjd9.OcyNzAfSB-Vij6fPnRgdqPUZWYz6K-XaoAdK7govwXs'
    }}).then(res => {
        console.log(res.data)
    })

    // authReducer(initial.userName, initial.userEmail, initial.userAva)
}

export default authReducer
