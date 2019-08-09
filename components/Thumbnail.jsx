import React from "react";
import MediaQuery from 'react-responsive';

export default function Thumbnail(props) {
  let style = {
    backgroundImage: `url(${props.img})`
  };
  let classes = "thumbnail";
  if (props.display) classes = "displayThumbnail";
  if (props.mobile) classes = "mobileThumbnail";

  const Mobile = props => <MediaQuery {...props} maxWidth={767} />;
  const Default = props => <MediaQuery {...props} minWidth={768} />;

  const Display = () => {
    if (props.display) {
      return (
        <div className={classes} style={style}>
          {props.children}
        </div>
      );
    }
    else {
      return (
        <div className="realMobileThumbnail" style={style}>
          {props.children}
        </div>
      );
    }
  };

  return (
    <div>
      <Default>
        <div className={classes} style={style}>
          {props.children}
        </div>
      </Default>
      <Mobile>
        {Display()}
      </Mobile>
    </div>
  );
}
