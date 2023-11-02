import FormSubmit from "./InvestorFormSubmit";

interface FormProps {
  id: string;
  __component: string;
  title: string;
  description: string;
  calendlyUrl: string;

}

export default function Form({ data }: { data: FormProps }) {

  return (
    <section  className=" py-6 lg:ml-6 bg-black text-gray-50">
    <div className="container custom-container mx-auto  flex-col justify-center p-4 space-y-8 md:p-10 lg:space-y-0 lg:justify-between lg:flex-col">
      <div className="mb-5 flex flex-col space-y-4 text-left">
        <h1 className="text-4xl custom-font-bold leading-none">{data.title}</h1>
        <p className="lg:text-lg custom-font-barlow">{data.description}</p>
      </div>
      
      {/* The form submit button will be below the other content */}
      <div className="flex flex-col-reverse lg:flex-row lg:items-center lg:space-x-4">

      <FormSubmit url={data.calendlyUrl}  />
    </div>
    </div>

  </section>
  
  
  );
}
