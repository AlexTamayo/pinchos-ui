import { RootState } from '@/store';
import { tabIndexConfig } from '@/utils';
import { useSelector } from 'react-redux';

import type { ActiveContentOptions } from '@/store/slices/contentSlice';

export const useContentTabIndex = (componentId: ActiveContentOptions): number => {
  const activeContent = useSelector((state: RootState) => state.activeContent.current);
  
  return activeContent === componentId 
    ? tabIndexConfig.content[componentId]
    : -1;
}; 