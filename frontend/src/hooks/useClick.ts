import React from "react";

export function useOutsideClick(ref: React.RefObject<HTMLElement>, callback: () => void, additionalElement?: React.RefObject<HTMLElement>) {
  /* 
    if additional element is passed the clicks on it does not invoke callback (one of the parameters) 
    ref is required, clicks on it does not invoke callback
    callback is invoked whenever it clicks out of ref element or addditional elements(if it's passed) 
  */

    React.useEffect(() => {
        
      function handleClickOutside(event: Event ) {
        if (ref && ref.current && !ref.current.contains(event.target as typeof ref.current)) {
          const target = event.target as HTMLElement

          if (additionalElement && target.isEqualNode(additionalElement.current) || additionalElement?.current?.contains(target)) 
            return
          
          else callback()
        } 
      }

      document.addEventListener("mousedown", handleClickOutside);

      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };

    }, [ref]);
}