import { RouterProvider } from 'react-router-dom';
import { PhotoProvider, PhotoView , img} from 'react-photo-view';
import './App.css';
import router from './Router/Routes/Routes';

function App() {

  return (
    <div className='max-w-screen-xl mx-auto'>
      <RouterProvider router={router}></RouterProvider>
    <PhotoProvider>
      <PhotoView src={img}>
        <img src={img} alt="" />
      </PhotoView>
    </PhotoProvider>
    </div>
  );
}


export default App;
