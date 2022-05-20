import React from "react";
import Story from './Story';
import fetchData from "../Hooks/getData";
import { useParams } from "react-router-dom";

const ShowStories = (props) => {
  const { type } = useParams();
  const { isLoading, stories } = fetchData(type);
    // const { type } = props.match.params;
    // const { isLoading, stories } = fetchData(type ? type : 'top');

    return(
        <React.Fragment>
        {isLoading ? (
          <p className="loading">Loading...</p>
        ) : (
          <React.Fragment>
            {stories.map(({ data: story }) => (
              <Story key={story.id} story={story} />
            ))}
          </React.Fragment>
        )}
      </React.Fragment>
    );
 };

 export default ShowStories;