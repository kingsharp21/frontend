import React ,{ useState, useEffect} from "react";
import Article from "../../components/Article";

import feedService from "../../services/feedService";

function Feed() {
    const[feeds, setFeeds] = useState([])

    const getFeedByUserPreference = async(body) => {
        try {
          const res = await feedService.getUserPreferenceFeed({
                "category":"",
                "source":""
            })
          console.log(res);
          setFeeds(res)
         
        }catch (err){
            console.log(err);
        }
    }


    useEffect(()=>{
        getFeedByUserPreference()
    },[])

 
    return ( 
        <div className="feed">
          <div className="container feed-container">
            <div className="feed-header">
              <h2>News</h2>
              <p>Read the news online and save the trees</p>
            </div>
            <div className="filter grid">
              <div className="filter-input search">
                <label>Search News</label>
                <input
                  type="text"
                  onChange={()=>{}}
                  placeholder="Search news..."
                />
              </div>
              <div className="filter-input filter-by-authors ">
                <label>Select Start Date</label>
                <input
                  type="date"
                  onChange={()=>{}}
                  placeholder="Search news..."
                />
              </div>
              <div className="filter-input filter-by-Source ">
                <label>Filter by Source</label>
                {/* <Select
                  onChange={(newValue) => {
                    let sourceArr = "";
                    if (newValue.length > 0) {
                      newValue.forEach((source, index) => {
                        if (index == 0) {
                          sourceArr += `${source.value}`;
                        } else {
                          sourceArr += `,${source.value}`;
                        }
  
                        setSources(sourceArr);
                      });
                    } else {
                      setSources("");
                    }
                  }}
                  placeholder="Select or type to search source"
                  closeMenuOnSelect={false}
                  components={animatedComponents}
                  isMulti
                  options={sourceList}
                /> */}
              </div>
            </div>
            <p className="total-feeds">
              {`Total ${feeds.length} news found in this search criteria`}
            </p>
            <div className="feed-cards grid">
              {/* {news.length == 0? <Loading/>:''} */}
                {feeds.map((val, index)=>{
                    return (
                        <Article
                        key={index}
                        img= {val.urlToImage}
                        apiname= {val.author}
                        source={val.source}
                        category={val.category}
                        title={val.title}
                        url={val.url}
                        date={val.published_at}
                        desc={val.content}
                        />
                    )
                })}
                
               
                    
                  
            </div>
          </div>
        </div>
     );
}

export default Feed;