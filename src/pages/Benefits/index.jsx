import { BenefitCard, HeroBenefit, TableBenefit } from "../../Components";
export default function Benefits() {
  return (
    <>
      <div className="">
        <HeroBenefit />
      </div>
      <section className=" bg-white">
        <BenefitCard />
      </section>

      <div className="flex justify-center bg-white">
        <TableBenefit />
      </div>
    </>
  );
}
