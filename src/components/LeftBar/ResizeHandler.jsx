import React, { useEffect, useRef } from 'react';
import { useLeftBarStore } from '../../store/useLeftBarStore';
import { IconResize } from '../ui/Icons';
import styles from './LeftBar.module';

const ResizeHandler = ({ barRef }) => {
  const setWidth = useLeftBarStore((state) => state.setWidth);
  const isResizingRef = useRef(false);
  const handlerRef = useRef();
  const barLeftRef = useRef();

  useEffect(() => {
    function handleMouseDown() {
      if (!barRef.current) return;
      barLeftRef.current = barRef.current.getBoundingClientRect().left;
      isResizingRef.current = true;
    }

    function handleMouseMove(e) {
      if (!isResizingRef.current) return;
      const newWidth = e.clientX - barLeftRef.current;
      setWidth(newWidth);
    }

    function handleMouseUp() {
      if (!isResizingRef.current) return;
      isResizingRef.current = false;
    }

    handlerRef.current.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);

    return () => {
      handlerRef.current.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isResizingRef, barRef]);

  return (
    <button ref={handlerRef} className={styles.resizeHandler}>
      <IconResize />
    </button>
  );
};

export default ResizeHandler;
