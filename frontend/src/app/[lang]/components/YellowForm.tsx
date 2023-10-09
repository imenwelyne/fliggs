import YellowFormSubmit from "./YellowFormSubmit";

interface YellowFormProps {
  id: string;
  __component: string;
  title: string;
  description: string;
  emailPlaceholder: string;
  firstNamePlaceholder: string;
  lastNamePlaceholder: string;


  submitButton: {
    text: string;
  };
}

export default function YellowForm({ data }: { data: YellowFormProps }) {

  return (
    <section id="registration-section" className="py-6 text-black" style={{ background: "#faff00" }}>
    <div className="container mx-auto  flex-col justify-center p-4 space-y-8 md:p-10 lg:space-y-0 lg:justify-between lg:flex-col">
      <div className="mb-5 flex flex-col space-y-4 text-left">
        <h1 className="text-4xl custom-font-bold leading-none">{data.title}</h1>
        <p className="lg:text-lg custom-font-barlow">{data.description}</p>
      </div>
      
      {/* The form submit button will be below the other content */}
      <div className="flex flex-col-reverse lg:flex-row lg:items-center lg:space-x-4">

      <YellowFormSubmit placeholderEmail={data.emailPlaceholder} placeholderFirstName={data.firstNamePlaceholder} placeholderLastName={data.lastNamePlaceholder} text={data.submitButton.text} />
    </div>
    </div>

  </section>
  
  
  );
}
