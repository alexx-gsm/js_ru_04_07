import $ from 'jquery';
import AppDispatcher from './../dispatcher';
import { START, SUCCESS, FAIL } from './../constants';

export function loadAllArticlesCall() {
    return $.get('http://127.0.0.1:3000/api/articles')
}

export function asyncACFactory(apiCall, actionType) {
    return () => {
        AppDispatcher.dispatch({
            type: actionType + START
        });

        apiCall()
            .done(response => AppDispatcher.dispatch({
                type: actionType + SUCCESS,
                payload: { response }
            }))
            .fail(error => AppDispatcher.dispatch({
                type: actionType + FAIL,
                payload: { error }
            }))
    }
}