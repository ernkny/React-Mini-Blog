import { useEffect, useState } from 'react'
import { useBlogSearchQuery } from '../store/Hooks/blogHooks';
import { Blog } from '../types/Blog';
import { useGetBlogsQuery } from '../Apis/services/Blogs/blogApiSlice';
import { setQueryTextForSearch } from '../store/Actions/blogActions';

const filteredData = (pageNumber:number) => {
 
  const { data, refetch } = useGetBlogsQuery(pageNumber);
  const [filteredData, setFilteredData] = useState<Blog[]>(data || []);
  const searchedText = useBlogSearchQuery();
   
  useEffect(() => {
    setQueryTextForSearch("");
  }, []);

  useEffect(() => 
  {
    const filtered = data?.filter((item: { Title: string; }) => {
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