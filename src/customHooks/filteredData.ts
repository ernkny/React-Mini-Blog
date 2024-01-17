import { useEffect, useRef, useState } from 'react'
import { useBlogSearchQuery } from '../store/Hooks/blogHooks';
import { Blog } from '../types/Blog';
import { useGetBlogsQuery } from '../Apis/services/Blogs/blogApiSlice';
import { setQueryTextForSearch } from '../store/Actions/blogActions';

const filteredData = () => {
  const pageNumber = useRef<number>(1);
  const { data, refetch } = useGetBlogsQuery(pageNumber.current);
  const [filteredData, setFilteredData] = useState<Blog[]>(data || []);
  const [isLoading, setIsLoading] = useState(false);
  const searchedText = useBlogSearchQuery();
   

  const getNewData=async ()=>{
    setIsLoading(true);
    try {
      const newDataPromise = refetch();
      const newData = await newDataPromise.unwrap();
      if(newData.length>0){
        setFilteredData([...filteredData, ...newData]);
      }
    } catch (error) {
      console.error("Hata:", error);
    }
      setIsLoading(false);
  }

  useEffect(() => {
    setQueryTextForSearch("");
  }, []);

  useEffect(() => 
  {
    function handleScroll() {
      if (window.innerHeight+ window.scrollY >= document.body.scrollHeight) 
      {
        if (!isLoading)
         {
          pageNumber.current = pageNumber.current + 1;
          getNewData();
        }
      }
    }

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
   
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
   
  }, [searchedText, data, isLoading]);

  return { filteredData, refetch }; 
}

export default filteredData