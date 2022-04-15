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
      <MediaQuery maxWidth={1279} minWidth={960}>
        <MediaQuery maxHeight={599}>
          <PhotoSwitch
            photoData={photoData}
            imgArr={imgArr}
            scaleMultiplier={0.65}
          />
        </MediaQuery>
        <MediaQuery minHeight={600}>
          <PhotoSwitch
            photoData={photoData}
            imgArr={imgArr}
            scaleMultiplier={0.9}
          />
        </MediaQuery>
      </MediaQuery>      
      <MediaQuery maxWidth={959} minWidth={640}>
        <PhotoSwitch
          photoData={photoData}
          imgArr={imgArr}
          scaleMultiplier={0.75}
        />
      </MediaQuery>
      <MediaQuery maxWidth={639} minWidth={480}>
        <PhotoSwitch
          photoData={photoData}
          imgArr={imgArr}
          scaleMultiplier={0.5}
        />
      </MediaQuery>
      <MediaQuery maxWidth={479}>
        <PhotoSwitch
          photoData={photoData}
          imgArr={imgArr}
          scaleMultiplier={0.4}
        />
      </MediaQuery>
    </>
  );
}
