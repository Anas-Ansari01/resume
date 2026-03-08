import { configureStore } from '@reduxjs/toolkit'
import root from '../redux/reducer/index';
// import 'react-date-range/dist/styles.css'; 
// import 'react-date-range/dist/theme/default.css'; 
export default configureStore({
    reducer: root,
})