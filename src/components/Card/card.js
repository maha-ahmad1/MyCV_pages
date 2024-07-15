import React from "react";
import Image from "next/image";
export const Card = () => {
  return (
    <div>
      <div className="bg-gray-100">
        <section
          id="features"
          className="relative block px-6 py-10 md:py-20 md:px-10 "
        >
          <div className="relative mx-auto max-w-5xl text-center">
            <h2 className="block w-full text-[#333333] font-bold  text-3xl sm:text-4xl">
              دورات عالية الجودة، مدربين محترفين، وشهادات مهنية{" "}
            </h2>
            <p className="mx-auto my-4 w-full max-w-3xl bg-transparent text-center text-lg font-medium leading-relaxed tracking-wide text-[#0A0A0B]">
              إليك أكثر من 5000 دورة تدريبية، مزودة بمقاطع فيديو تعليمية،
              والعديد من المصادر المتنوعة لتناسب كل المهارات الوظيفية والشخصية،
              دوراتنا التعليمية تنشر يوميا لتساعدك في التأهيل لسوق العمل، وتحسين
              المهارات المهنية.
            </p>
          </div>

          <div className="relative mx-auto max-w-7xl z-10 grid grid-cols-1 gap-10 pt-14 sm:grid-cols-2 lg:grid-cols-3">
            <div className="shadow-sm   bg-white  p-10 text-center rounded-xl">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-md ">
                <Image
                  width={100}
                  height={100}
                  alt="Card1"
                  src="/assets/image/Icon Container.png"
                />
              </div>
              <h3 className="mt-6 text-[#0A0A0B] text-xl font-medium">
                اختر من بين أكثر البرامج التأهيل احترافيه
              </h3>
              <p className="my-2 mb-0 font-normal leading-relaxed tracking-wide text-[#4D4D4D] text-md">
                لدينا دورة تأهيلية لكل مهارة من المهارات الوظيفية تبدأ من (١٠
                ريال سعودي للساعة التدريبية ، لدينا كل التخصصات المطلوبة لتناسب
                الجميع.
              </p>
            </div>

            <div className="shadow-sm   bg-white  p-10 text-center rounded-xl">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-md ">
            <Image
                  width={100}
                  height={100}
                  alt="Card1"
                  src="/assets/image/Icon Container (1).png"
                />
              </div>
              <h3 className="mt-6 text-[#0A0A0B] text-xl font-medium">
                تعلم على يد خبراء معتمدين دوليا
              </h3>
              <p className="my-2 mb-0 font-normal leading-relaxed tracking-wide text-[#4D4D4D] text-md">
                كورسات الأعمال لدينا يقدمها أفضل مدربين لمساعدتك في التطوير
                المهني والتأهيل لسوق العمل
              </p>
            </div>

            <div className="shadow-sm   bg-white  p-10 text-center rounded-xl">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-md ">
                <Image
                  width={100}
                  height={100}
                  alt="Card1"
                  src="/assets/image/Icon Container (2).png"
                />
              </div>
              <h3 className="mt-6 text-[#0A0A0B] text-xl font-medium">
                احصل على شهادة معتمدة{" "}
              </h3>
              <p className="my-2 mb-0 font-normal leading-relaxed tracking-wide  text-[#4D4D4D] text-md">
                بعد إنتهاء تأهيل الرواد الشباب، تحصل على الشهادات المهنية
                المعتمدة مجانا، لمساعدتك في الحصول على أول وظيفة شاغرة.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
export default Card;
