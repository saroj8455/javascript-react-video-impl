import React, { useState } from 'react';

export default function FileExplore({ folderData }) {
  // console.log(folderData);
  const [showChildren, setShowChildren] = useState(false);
  return (
    <div>
      <div className='file-explorer text-2xl flex flex-col gap-4 align-middle justify-center'>
        <div
          className='flex align-middle gap-2 justify-center'
          onClick={() => setShowChildren(!showChildren)}
        >
          <i
            className={`fa mt-1 ${
              folderData.type === 'folder'
                ? showChildren
                  ? 'fa-folder-open'
                  : 'fa-folder'
                : 'fa-file pl-12'
            }`}
          ></i>
          <span>{folderData.name}</span>
        </div>
        {showChildren &&
          folderData?.data?.map((items, index) => (
            <FileExplore folderData={items} key={index} />
          ))}
      </div>
    </div>
  );
}
