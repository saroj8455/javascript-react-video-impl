# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Modern API data-fetching methods in React

`https://blog.logrocket.com/modern-api-data-fetching-methods-react/`

## How to Correctly Fetch Data in React (fix cannot read property of undefined)

`https://www.youtube.com/watch?v=Vfdy4qAoPYs`

## Cleanup Functions in React’s UseEffect Hook — Explained with examples

`https://hackernoon.com/cleanup-functions-in-reacts-useeffect-hook-explained`

## React api call

```jsx
const [data, setData] = useState(null);
const [user, setUser] = useState({});
const [error, setError] = useState(null);
const [loading, setLoading] = useState(false);

useEffect(() => {
  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        'https://jsonplaceholder.typicode.com/posts/-1'
      );
      if (!response.ok) {
        console.log('Hi');
        setError("Something wen't wrongs");
        return;
      }
      const jsonData = await response.json();
      setData(jsonData);
    } catch (error) {
      setError(error);
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  fetchData();
}, []);
```

## Most important : useEffect run twice for <React.StrictMode> and api call also happen twice

`fix for twice api call` `fix api call React.StrictMode`

```jsx
// Filename : useFetchData.jsx
import { useEffect, useRef, useState } from 'react';

export function useFetchData(url) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  // create a ref of useEffect run
  const effectRan = useRef(false);

  useEffect(() => {
    // wrap everything in ref
    if (!effectRan.current) {
      const fetchData = async () => {
        setLoading(true);
        try {
          const response = await fetch(url);
          if (!response.ok) {
            setError('Network response was not ok.');
            return;
          }
          const jsonData = await response.json();
          setData(jsonData);
        } catch (error) {
          setError(error);
          console.log(error);
        } finally {
          console.log('always execute finally');
          setLoading(false);
        }
      };
      fetchData();
      return () => {
        // clean up
        effectRan.current = true;
      };
    }
  }, [url]);
  return { data, loading, error };
}
```

<!-- Conditional Rendering logic optimization  using template literal -->

```jsx
// filename : FileExplore.jsx traditional
{
  folderData.type === 'folder' ? (
    <i
      className={showChildren ? 'fa fa-folder-open mt-1' : 'fa fa-folder mt-1'}
    ></i>
  ) : (
    <i className='fa fa-file pl-12'></i>
  );
}
```

```jsx
// filename : FileExplore.jsx optimize
<i
  className={`fa mt-1 ${
    folderData.type === 'folder'
      ? showChildren
        ? 'fa-folder-open'
        : 'fa-folder'
      : 'fa-file pl-12'
  }`}
></i>
```
