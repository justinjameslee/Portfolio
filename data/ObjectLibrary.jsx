import React from "react";
import * as Icon from "styled-icons";

const ObjectDictionary = {
  "Adobephotoshop": <Icon.simpleIcons.Adobephotoshop size="1.25em"/>,
  "Adobepremierepro": <Icon.simpleIcons.Adobepremierepro size="1.25em"/>,
  "Adobeaftereffects": <Icon.simpleIcons.Adobeaftereffects size="1.25em"/>,
  "html5" : <Icon.boxiconsLogos.Html5 size="1.25em"/>,
  "css3" : <Icon.boxiconsLogos.Css3 size="1.25em"/>,
  "js" : <Icon.boxiconsLogos.Javascript size="1.25em"/>,
  "jquery" : <Icon.boxiconsLogos.Jquery size="1.25em"/>,
  "react" : <Icon.boxiconsLogos.ReactLogo size="1.25em"/>,
  "html5" : <Icon.boxiconsLogos.Html5 size="1.25em"/>,
  "materialui" : <Icon.simpleIcons.MaterialUi size="1.25em"/>,
  "material" : <Icon.simpleIcons.Materialdesign size="1.25em"/>,
  "nextdotjs" : <Icon.simpleIcons.NextDotJs size="1.25em"/>,
  "sass" : <Icon.boxiconsLogos.Sass size="1.25em"/>,
  "php" : <Icon.simpleIcons.Php size="1.25em"/>,
  "bootstrap" : <Icon.boxiconsLogos.Bootstrap size="1.25em"/>
};

export default function ReturnObject(name) {
  return ObjectDictionary[name];
};