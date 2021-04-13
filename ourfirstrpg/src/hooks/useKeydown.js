import { useEffect } from 'react';

const useKeydown = (fn) => {
  useEffect(() => {
    window.addEventListener('keydown', fn);
    return () => window.removeEventListener('keydown', fn)
  }, [fn])
}

export default useKeydown;