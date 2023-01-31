import { create } from 'zustand'
import {devtools} from 'zustand/middleware'

const useThemeStore = create(devtools((set)=>({
    theme: 'light',
    changeTheme: (val)=>set({theme: val})
})))

export default useThemeStore