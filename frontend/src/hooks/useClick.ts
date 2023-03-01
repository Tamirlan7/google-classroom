import React from "react";

export function useOutsideClick(ref: React.RefObject<HTMLElement>, callback: () => void) {
    React.useEffect(() => {
        
      function handleClickOutside(event: Event ) {
        if (ref && ref.current && !ref.current.contains(event.target as typeof ref.current)) 
          callback();
      }

      document.addEventListener("mousedown", handleClickOutside);

      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };

    }, [ref]);
}