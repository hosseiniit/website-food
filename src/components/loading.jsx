import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
const LoadingCaptchaCode = () => {
  return (
    <>
      <SkeletonTheme baseColor="transparent" highlightColor="#CFCFCF">
        <Skeleton
          direction="rtl"
          style={{ width: "80px", height: "40px", left: "0", top: "-20px" }}
        />
      </SkeletonTheme>
    </>
  );
};

export default LoadingCaptchaCode;
