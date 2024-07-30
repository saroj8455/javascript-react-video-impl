export const folderData = {
  type: 'folder',
  name: 'parent',
  data: [
    {
      type: 'folder',
      name: 'root',
      data: [
        {
          type: 'folder',
          name: 'src',
          data: [
            {
              type: 'file',
              name: 'index.js',
            },
          ],
        },
        {
          type: 'folder',
          name: 'public',
          data: [
            {
              type: 'file',
              name: 'index.ts',
            },
          ],
        },
        {
          type: 'file',
          name: 'index.html',
        },
        {
          type: 'folder',
          name: 'data',
          data: [
            {
              type: 'folder',
              name: 'images',
              data: [
                {
                  type: 'file',
                  name: 'image.png',
                },
                {
                  type: 'file',
                  name: 'image2.webp',
                },
              ],
            },
            {
              type: 'file',
              name: 'logo.svg',
            },
          ],
        },
        {
          type: 'file',
          name: 'style.css',
        },
      ],
    },
  ],
};
