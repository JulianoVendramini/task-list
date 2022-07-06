import React, { useEffect } from 'react'

function useClickOutside<T = null>(ref: React.Ref<T>, callback: () => void) {
  const handleClick = (e: Event) => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore this ref won't be null at this point
    if (ref?.current?.contains(e.target)) {
      return
    }

    callback()
  }

  useEffect(() => {
    document.addEventListener('mousedown', handleClick)

    return () => {
      document.removeEventListener('mousedown', handleClick)
    }
  }, [])
}

export default useClickOutside
