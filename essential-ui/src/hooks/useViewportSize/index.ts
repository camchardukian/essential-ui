import { createContext, useContext } from 'react';


export type ViewportSize = 'small' | 'medium' | 'large';

interface ViewportContextValue {
  size: ViewportSize | null;
}

const ViewportContext = createContext<ViewportContextValue>({
  size: null,
});

export function useViewportSize(): ViewportContextValue {
  return useContext(ViewportContext);
}

export default ViewportContext;