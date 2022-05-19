import React from "react";
import Story from './Story';
import fetchData from "../Hooks/getData.js";

const ShowStories = (props) => {
    const { type } = props.match.params;
    const { isLoading, stories } = fetchData(type);

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