export const EcommerceSectionBackground = () => {
  return (
    <div className="absolute w-full h-screen top-0 left-0 -z-10">
      <video
        src="/videos/background.mp4"
        muted
        playsInline
        autoPlay
        loop
        className="object-cover w-full h-full"
      />
      <div className="absolute inset-0 bg-black/50 backdrop-blur-[10px]"></div>
    </div>
  );
};
