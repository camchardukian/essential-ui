import { createContext, useContext } from 'react';


export type ViewportSize = 'small' | 'medium' | 'large';

interface ViewportContextValue {
  size: ViewportSize;
}

// @TODO -- Maybe update this so that we calculate the initial value rather than itializing to medium
const ViewportContext = createContext<ViewportContextValue>({
  size: 'medium',
});

export function useViewportSize(): ViewportContextValue {
  return useContext(ViewportContext);
}

export default ViewportContext;