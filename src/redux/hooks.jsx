// THis file contains hooks for redux-toolkit
import {useDispatch, useSelector } from 'react-redux';

// Use (useAppDispatch||useAppSelector) throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = () => useDispatch();
export const useAppSelector= useSelector;
