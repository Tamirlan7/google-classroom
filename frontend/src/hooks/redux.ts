import { useSelector } from "react-redux";
import { TypedUseSelectorHook } from 'react-redux';
import rootReducer from '../reducers/index';

export const UseTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
type RootState = ReturnType<typeof rootReducer>;