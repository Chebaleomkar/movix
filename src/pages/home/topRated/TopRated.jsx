import React, { useState } from 'react'
import ContentWrapper from '../../../components/contentWrapper/ContentWrapper';
import SwitchTabs from '../../../components/switchTabs/SwitchTabs';
import useFetch from '../../../hooks/useFetch';
import Carousel from '../../../components/carousel/Carousel';
import toast from 'react-hot-toast';

const TopRated = () => {
  const [endpoint ,setEndpoint] = useState("movie");
 const {data ,loading , error} = useFetch(`/${endpoint}/top_rated`)

 if(error){
  toast.error("Server is down ! visit again " , {position: 'top-center' , duration : 10*1000})
 }



  const onTabChange = (tab) =>{
    setEndpoint(tab === 'Movie' ? 'movie' : 'tv');
  }

  return (
    <div className="carouselSection">
        <ContentWrapper />
        <span className="carouselTitle">Top Rated</span>
        <SwitchTabs data={['Movies','TV Shows']} onTabChange={onTabChange} />
        <Carousel data={data?.results} loading={loading} endpoint={endpoint} />
    </div>
  )
}

export default TopRated;