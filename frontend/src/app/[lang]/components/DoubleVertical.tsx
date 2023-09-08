import FormSubmit from "./FormSubmit";
import Vertical from "./Vertical";

interface DoubleVerticalProps {
  id: string;
  __component: string;
  title1: string;
  description1: string;
  align1: string;
  title2: string;
  description2: string;
  align2: string;



}

export default function Form({ data }: { data: DoubleVerticalProps }) {

  return (
    <section className="py-6 bg-black text-gray-50">
      <div className="container mx-auto flex flex-col justify-center p-4 space-y-8 md:p-10 lg:space-y-0 lg:space-x-12 lg:justify-between lg:flex-row">
      <Vertical title={data.title1} description={data.description1} align={data.align1}/>
      <Vertical title={data.title2} description={data.description2} align={data.align2}/>

</div>
    </section>
  );
}
