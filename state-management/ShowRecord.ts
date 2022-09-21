import { createContext } from 'react';

type ContextType = {
  [x: string]: any;
};

const ShowContext = createContext<ContextType>({});

export default ShowContext;
