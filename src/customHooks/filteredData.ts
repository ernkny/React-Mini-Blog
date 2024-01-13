import React, { useEffect, useState } from 'react'
import { useBlogSearchQuery } from '../store/Hooks/blogHooks';
import { Blog } from '../types/Blog';
import { useGetBlogsQuery } from '../Apis/services/Blogs/blogApiSlice';

const filteredData = () => {
  const { data, error, isLoading, refetch } = useGetBlogsQuery();
  const [filteredData, setFilteredData] = useState<Blog[]>(data || []);
  const searchedText = useBlogSearchQuery();

  useEffect(() => {
    const filtered = data?.filter(item => {
      const itemTextLowercased = item.Title.toLowerCase();
      const searchTextLowercased = searchedText?.toLowerCase() || '';
      return itemTextLowercased.includes(searchTextLowercased);
    });

    if (searchedText === undefined || searchedText === "" || searchedText === " ") {
      setFilteredData(data || []);
    } else {
      setFilteredData(filtered || []);
    }
  }, [searchedText, data]);

  return { filteredData, refetch }; 
}

export default filteredData