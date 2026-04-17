import DynamicHero from "./DynamicHero";

function PageLayout({data, children}){
  return (
    <div>
      <DynamicHero
        title={data.title}
        description={data.description}
        image={data.image}
      />

      <div className="page-content">
        {children}
      </div>
    </div>
  );
}

export default PageLayout;