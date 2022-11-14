import { atom, selector } from 'recoil';
import festivallist from './list.json';

export const festivals = atom({
	key: 'festivals',
	default: [...festivallist['festivallist']].sort((a, b) => {
		return b.hits - a.hits;
	})
});

export const postListAtom = atom({
    key: "postList",
    default: [],
});

export const setPagesAtom = atom({
    key:"pages",
    default:[],
});

export const setPageAtom = atom({
    key:"page",
    default:1,
});

export const isValidAtom = atom({
    key:"isValid",
    default:false,
});

export const postSelector = selector({
    key:"postSelector",
    get:async({get})=>{
        //여기 채워넣기
    }
});

export const replSelector = selector({
    key:"replSelector",
    get:async({get})=>{
        //여기 채워넣기
    }
});

export let finalValueAtom = atom({
    key:"finalValue",
    default:null,
});