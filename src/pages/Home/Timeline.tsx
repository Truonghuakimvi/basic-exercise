import { useInView } from "framer-motion";
import { useRef } from "react";

interface Props {
  title: string;
  subtitle: string;
  icon: string;
  isLeft?: boolean;
  isTop?: boolean;
  isBot?: boolean;
}

const Timeline: React.FC<Props> = ({
  title,
  subtitle,
  icon,
  isLeft = false,
  isTop = false,
  isBot = false,
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div
      className="flex gap-10"
      ref={ref}
      style={{
        transform: isInView ? "none" : `translateX(${isLeft ? "-10%" : "10%"})`,
        opacity: isInView ? 1 : 0,
        transition: "all 1.2s ease 0.3s",
      }}
    >
      {isLeft ? (
        <>
          <div
            className={`flex-1 ${isLeft && "text-right"} flex flex-col gap-6 ${
              isTop && "pt-20"
            } ${isBot && "pb-16"}`}
          >
            <div className="flex flex-col gap-2">
              <h1 className="text-3xl font-raleway font-semibold text-[#da853d]">
                {title}
              </h1>
              <span className="text-xl text-[#54595f] font-medium">
                {subtitle}
              </span>
            </div>
            <hr className="h-[2px] bg-[#ffe5b9]"></hr>
            <div className="flex gap-6 items-center">
              <p className="text-[#808080] text-sm">
                Nemo enim ipsam voluptatem quia voluptas sit atur aut odit aut
                fugit, sed quia consequuntur magni res.
              </p>
              <img className="w-[32px] h-[32px]" src={icon} alt="" />
            </div>
          </div>
          <div className="w-[10px] bg-[#f5e9d4] relative">
            {isTop && (
              <div
                className="flex justify-center items-center w-[25px] h-[25px] bg-[#f5e9d4] rounded-full 
                absolute top-0 left-1/2 translate-x-[-50%]"
              >
                <div className="w-[14px] h-[14px] bg-[#da853d] rounded-full"></div>
              </div>
            )}
            <div
              className={`flex justify-center items-center w-[28px] h-[28px] bg-[#f5e9d4] rounded-full 
                absolute ${
                  isTop ? "top-20" : "top-0"
                } left-1/2 translate-x-[-50%]`}
            >
              <div className="w-[16px] h-[16px] bg-[#fdf6ea] rounded-full"></div>
            </div>
            {isBot && (
              <div
                className="flex justify-center items-center w-[25px] h-[25px] bg-[#f5e9d4] rounded-full 
                absolute bottom-0 left-1/2 translate-x-[-50%]"
              >
                <div className="w-[14px] h-[14px] bg-[#da853d] rounded-full"></div>
              </div>
            )}
          </div>
          <div className="flex-1"></div>
        </>
      ) : (
        <>
          <div className="flex-1"></div>
          <div className="w-[10px] bg-[#f5e9d4] relative">
            {isTop && (
              <div
                className="flex justify-center items-center w-[25px] h-[25px] bg-[#f5e9d4] rounded-full 
                absolute top-0 left-1/2 translate-x-[-50%]"
              >
                <div className="w-[14px] h-[14px] bg-[#da853d] rounded-full"></div>
              </div>
            )}
            <div
              className={`flex justify-center items-center w-[28px] h-[28px] bg-[#f5e9d4] rounded-full 
                absolute ${
                  isTop ? "top-20" : "top-0"
                } left-1/2 translate-x-[-50%]`}
            >
              <div className="w-[16px] h-[16px] bg-[#fdf6ea] rounded-full"></div>
            </div>
            {isBot && (
              <div
                className="flex justify-center items-center w-[25px] h-[25px] bg-[#f5e9d4] rounded-full 
                absolute bottom-0 left-1/2 translate-x-[-50%]"
              >
                <div className="w-[14px] h-[14px] bg-[#da853d] rounded-full"></div>
              </div>
            )}
          </div>
          <div
            className={`flex-1 ${isLeft && "text-right"} flex flex-col gap-6 ${
              isTop && "pt-20"
            } ${isBot && "pb-16"}`}
          >
            <div className="flex flex-col gap-2">
              <h1 className="text-3xl font-raleway font-semibold text-[#da853d]">
                {title}
              </h1>
              <span className="text-xl text-[#54595f] font-medium">
                {subtitle}
              </span>
            </div>
            <hr className="h-[2px] bg-[#ffe5b9]"></hr>
            <div className="flex gap-6 items-center">
              <img className="w-[32px] h-[32px]" src={icon} alt="" />
              <p className="text-[#808080] text-sm">
                Nemo enim ipsam voluptatem quia voluptas sit atur aut odit aut
                fugit, sed quia consequuntur magni res.
              </p>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export { Timeline };
