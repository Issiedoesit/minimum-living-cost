import { create } from 'zustand';
import { devtools } from 'zustand/middleware'



const useNavStore = create(devtools((set)=>({
    isNavOpen: false,
    changeIsNavOpen: () => set((state) => ({ isNavOpen: !state.isNavOpen})),
})))

export default useNavStore