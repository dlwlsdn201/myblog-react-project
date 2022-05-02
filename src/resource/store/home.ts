import create from 'zustand';

type State = {
	html: number;
	css: number;
	javascript: number;
	react: number;
	increase: (type: string) => void;
	decrease: (type: string) => void;
};

const HomeState = create<State>((set) => ({
	html: 70,
	css: 60,
	javascript: 70,
	react: 60,
	increase: (type) => set((state) => ({ [type]: state.html + 1 })),
	decrease: (type) => set((state) => ({ [type]: state.html - 1 }))
}));

export default HomeState;
