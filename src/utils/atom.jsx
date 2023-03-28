import { atom, selector } from 'recoil';
import festivallist from './list.json';
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist();

export const festivals = atom({
	key: 'festivals',
	default: [...festivallist['festivallist']].sort((a, b) => {
		return b.hits - a.hits;
	})
});

export const modalControl = atom({
	key: 'modalControl',
	default: false
});

export const postListAtom = atom({
	key: 'postList',
	default: []
});

export const setPagesAtom = atom({
	key: 'pages',
	default: []
});

export const setPageAtom = atom({
	key: 'page',
	default: 1
});

export const isValidAtom = atom({
	key: 'isValid',
	default: false
});

export const postSelector = selector({
	key: 'postSelector',
	get: async ({ get }) => {
		//여기 채워넣기
	}
});

export const LoginState = atom({
    key: "LoginState",
    default: false,
    effects_UNSTABLE: [persistAtom]
})

export const accessToken = atom({
    key: "accessToken",
    default: "",
})



export const replSelector = selector({
	key: 'replSelector',
	get: async ({ get }) => {
		//여기 채워넣기
	}
});

export let finalValueAtom = atom({
	key: 'finalValue',
	default: null
});

export const tabAtom = atom({
	key: 'tabAtom',
	default: ''
});
