import Card from "store/components/Card/card";
import { Tajawal } from "next/font/google";

const tajawal = Tajawal({
  subsets: ["arabic"],
  weight: ["200", "300", "400", "500", "700", "800", "900"], // Use `weight` instead of `weights`
});

export default function Home() {
  return (
    <div className={`${tajawal.className} h-screen bg-white`} dir="rtl">
      <Card />
    </div>
  );
}
