import { useEffect, useState } from 'react';
import { useFetchData } from './hooks/useFetchData';
import { USERAPI } from './common/api';
import FileExplore from './components/FileExplore';
import { folderData } from './common/data';

function App() {
  const { loading, error, data: user } = useFetchData(USERAPI);
  const [users, setUsers] = useState({});

  useEffect(() => {
    console.log('useEffect run');
  }, []);

  return (
    <>
      <div className='flex flex-col gap-2 text-white min-h-screen bg-blue-600 justify-center items-center text-center'>
        <article>
          <h1 className='mb-2 border-bottom-1'>Recursive Folder Structure</h1>
          <FileExplore folderData={folderData} />
        </article>
        {/* <div className='icons-play mb-2 flex gap-2'>
          <i className='fas fa-heart text-red-600 text-3xl'></i>
          <i className='fas fa-folder text-3xl'></i>
          <i className='fas fa-file text-3xl'></i>
        </div> */}
        {loading && <div className='text-4xl'>Loading...Please wait!.</div>}
        {error && <div className='text-4xl'>Error: {error}</div>}
        {user && <p className='text-4xl'>{user.title}</p>}
      </div>
    </>
  );
}

export default App;
// how to code vscode screen with code
// I want to showcase some dummy code snippets
