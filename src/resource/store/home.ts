import { type } from '@testing-library/user-event/dist/type';
import create from 'zustand';
import produce from 'immer';

export interface ISkillStateObj {
	value: number;
	color: string;
}

type State = {
	html: ISkillStateObj;
	css: ISkillStateObj;
	sass: ISkillStateObj;
	javascript: ISkillStateObj;
	react: ISkillStateObj;
	setting: boolean;
	visitCount: number;
	studyPost: number;
	project: number;
	increaseHTML: () => void;
	increaseCSS: () => void;
	increaseSASS: () => void;
	increaseJS: () => void;
	increaseREACT: () => void;
	decreaseHTML: () => void;
	decreaseCSS: () => void;
	decreaseSASS: () => void;
	decreaseJS: () => void;
	decreaseREACT: () => void;
	isSetting: () => void;
};

const homeState = create<State>((set) => ({
	html: {
		value: 70,
		color: '#e54c21'
	},
	css: {
		value: 60,
		color: '#007bc9'
	},
	sass: {
		value: 65,
		color: '#cd669a'
	},
	javascript: {
		value: 70,
		color: '#e5a228'
	},
	react: {
		value: 60,
		color: '#5ccfee'
	},
	setting: false,
	visitCount: 0,
	studyPost: 0,
	project: 0,
	increaseHTML: () =>
		set(
			produce((state) => {
				state.html.value = state.html.value + 1;
			})
		),
	increaseCSS: () =>
		set(
			produce((state) => {
				state.css.value = state.css.value + 1;
			})
		),
	increaseSASS: () =>
		set(
			produce((state) => {
				state.cass.value = state.cass.value + 1;
			})
		),
	increaseJS: () =>
		set(
			produce((state) => {
				state.javascript.value = state.javascript.value + 1;
			})
		),
	increaseREACT: () =>
		set(
			produce((state) => {
				state.react.value = state.react.value + 1;
			})
		),
	decreaseHTML: () =>
		set(
			produce((state) => {
				state.css.value = state.css.value - 1;
			})
		),
	decreaseCSS: () =>
		set(
			produce((state) => {
				state.css.value = state.css.value - 1;
			})
		),
	decreaseSASS: () =>
		set(
			produce((state) => {
				state.cass.value = state.cass.value - 1;
			})
		),
	decreaseJS: () =>
		set(
			produce((state) => {
				state.javascript.value = state.javascript.value - 1;
			})
		),
	decreaseREACT: () =>
		set(
			produce((state) => {
				state.react.value = state.react.value - 1;
			})
		),
	isSetting: () =>
		set(
			produce((state) => {
				state.setting = !state.setting;
			})
		)
}));

export default homeState;
