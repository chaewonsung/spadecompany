import React, { useEffect, useRef, useState } from 'react';
import { useLeftBarStore } from '../../store/useLeftBarStore';
import { IconResize } from '../ui/Icons';
import styles from './LeftBar.module';

const ResizeHandler = ({ barRef }) => {
  const [isResizing, setIsResizing] = useState(false);
  const setWidth = useLeftBarStore((state) => state.setWidth);
  const handlerRef = useRef();
  const barLeftRef = useRef();

  useEffect(() => {
    function handleMouseDown() {
      if (!barRef.current) return;
      barLeftRef.current = barRef.current.getBoundingClientRect().left;
      setIsResizing(true);
    }

    function handleMouseMove(e) {
      if (!isResizing) return;
      const newWidth = e.clientX - barLeftRef.current;
      setWidth(newWidth);
    }

    function handleMouseUp() {
      if (!isResizing) return;
      setIsResizing(false);
    }

    handlerRef.current.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);

    return () => {
      handlerRef.current.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isResizing, barRef]);

  return (
    <button ref={handlerRef} className={styles.resizeHandler}>
      <IconResize />
    </button>
  );
};

export default ResizeHandler;
