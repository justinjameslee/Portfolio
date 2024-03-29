import React from "react";

export default function MobileThumbnail(props) {
  let style = {
    backgroundImage: `url(${props.img})`
  };
  let classes = "thumbnail";
  if (props.display) classes = "displayThumbnail";
  if (props.mobile) classes = "mobileThumbnail";

  return (
    <div className={classes} style={style}>
      {props.children}
    </div>
  );
}
