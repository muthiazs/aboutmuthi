import Lanyard from "../components/lanyard/Lanyard"; // pastikan path ini benar sesuai lokasi Lanyard

export default function Hero() {
  return (
    <section className="flex flex-col md:flex-row gap-6 p-6 md:p-12 items-start text-black">
      {/* Text section kiri */}
      <div className="flex-1">
        <h1 className="text-2xl font-bold text-black">Hi, I’m Muthi 👋🏼</h1>
        <p className="mt-2 text-sm text-black max-w-md">
          Enthusiastic Computer Science (Informatics) student at Diponegoro University with strong communication skills and a passion for learning. Proficient in team collaboration, seeking opportunities to develop skills and gain new experiences, actively exploring UI/UX Design, web and app development, and interested in scholarships and career opportunities. I am dedicated to contributing effectively to any team and constantly improving my knowledge.
        </p>
        <div className="flex gap-3 mt-4">
          {/* Social icons */}
        </div>
      </div>

      {/* Lanyard 3D - kanan */}
      <div className="w-full md:w-1/3 h-[300px] md:h-[400px] overflow-visible relative">
        <Lanyard position={[0, 0, 25]} gravity={[0, -40, 0]} />
      </div>
    </section>
  );
}
