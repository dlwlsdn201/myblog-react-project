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
	html: 20,
	css: 0,
	javascript: 0,
	react: 0,
	increase: (type) => set((state) => ({ [type]: state.html + 1 })),
	decrease: (type) => set((state) => ({ [type]: state.html - 1 }))
}));

export default HomeState;
