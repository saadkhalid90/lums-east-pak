import { style } from "@mui/system";
import styles from "./css-modules/photo-comp.module.css";

export default function photoComp({ imgArr, scene, scaleMultiplier = 1 }) {
  return (
    <>
      {imgArr.map((img, imgIdx) => (
        <img
          src={img.img}
          key={`photoStoryImage${imgIdx}`}
          className={styles.scroll_image}
          style={{
            position: "absolute",
            top: `calc(50% - ${Math.round((img.width * scaleMultiplier) / img.ar / 2)}px)`,
            width: `${img.width * scaleMultiplier}px`,
            filter: scene === imgIdx ? "blur(0px)" : "blur(10px)",
            transform:
              scene === imgIdx
                ? `scale(1.08)`
                : (scene + 1) % 4 === imgIdx
                ? `scale(0.85)`
                : `scale(1)`,
            zIndex: scene === imgIdx ? `10` : `${imgIdx}`,
            opacity: (scene + 1) % 4 === imgIdx ? 0.5 : 1,
          }}
        />
      ))}
    </>
  );
}
