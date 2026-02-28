interface TeamCardProps {
  image: string;
  name: string;
  role: string;
  bgColor?: string;
}

const TeamCard = ({ image, name, role, bgColor }: TeamCardProps) => (
  /* Design: card 330 × 526px portrait, name 25px medium, role 18px regular opacity-70 */
  <div
    className="shrink-0 flex flex-col group cursor-pointer"
    style={{ width: "clamp(200px, 20vw, 350px)" }}
  >
    {/* Photo — aspect ratio 330:526, image zooms on card hover */}
    <div
      className="w-full overflow-hidden relative"
      style={{ paddingBottom: "159.39%" /* 526/330 */, background: bgColor ?? "transparent" }}
    >
      <img
        src={image}
        alt={name}
        className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-500 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] group-hover:scale-110"
      />
    </div>
    {/* Name — orange underline appears on hover */}
    <p
      className="mt-4 font-medium text-[#333336] leading-[1.1] relative inline-block"
      style={{ fontSize: "clamp(13px, 1.45vw, 25px)" }}
    >
      {name}
      <span className="absolute left-0 bottom-[-2px] h-[2px] w-0 bg-[#FF4400] transition-all duration-500 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] group-hover:w-full" />
    </p>
    {/* Role */}
    <p
      className="mt-2 font-normal text-[#333336] opacity-70"
      style={{ fontSize: "clamp(11px, 1.04vw, 18px)" }}
    >
      {role}
    </p>
  </div>
);

export default TeamCard;