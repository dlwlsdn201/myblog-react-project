import create from 'zustand';

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
	visitCount: number;
	studyPost: number;
	project: number;
	increase: (type: string) => void;
	decrease: (type: string) => void;
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
	visitCount: 0,
	studyPost: 0,
	project: 0,
	increase: (type) => set((state) => ({ [type]: state[type].value + 1 })),
	decrease: (type) => set((state) => ({ [type]: state[type].value - 1 }))
}));

export default homeState;
