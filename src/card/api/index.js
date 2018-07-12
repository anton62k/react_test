import {makeResponse} from "./response";

export function api(dateFilter, typeFilter) {
    return new Promise(resolve => {
        setTimeout(resolve, 500, makeResponse(dateFilter, typeFilter));
    });
}