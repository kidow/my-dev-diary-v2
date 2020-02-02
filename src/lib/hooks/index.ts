import { useState } from 'react'

export function useObject<T>(initialState: T): [T, (obj: T) => void] {
  const [state, setState] = useState<T>(initialState)
  const onChange = (obj: T): void =>
    setState(prevState => ({ ...prevState, ...obj }))
  return [state, onChange]
}
