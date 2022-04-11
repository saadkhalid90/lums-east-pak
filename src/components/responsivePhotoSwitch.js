import PhotoSwitch from "./photoSwitch.js";
import MediaQuery from "react-responsive";

export default function ResponsivePhotoSwitch({ 
  photoData, 
  imgArr, 
  scaleMultiplier = 1 
}) {
  return (
    <>
      <MediaQuery minWidth={1280}>
        <PhotoSwitch
          photoData={photoData}
          imgArr={imgArr}
        />
      </MediaQuery>
      <MediaQuery maxWidth={1280} minWidth={960}>
        <PhotoSwitch
          photoData={photoData}
          imgArr={imgArr}
          scaleMultiplier={0.9}
        />
      </MediaQuery>
      <MediaQuery maxWidth={960} minWidth={640}>
        <PhotoSwitch
          photoData={photoData}
          imgArr={imgArr}
          scaleMultiplier={0.75}
        />
      </MediaQuery>
      <MediaQuery maxWidth={640} minWidth={480}>
        <PhotoSwitch
          photoData={photoData}
          imgArr={imgArr}
          scaleMultiplier={0.5}
        />
      </MediaQuery>
      <MediaQuery maxWidth={480}>
        <PhotoSwitch
          photoData={photoData}
          imgArr={imgArr}
          scaleMultiplier={0.4}
        />
      </MediaQuery>
    </>
  );
}
