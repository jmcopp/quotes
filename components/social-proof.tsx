const industries = [
  "AEROSPACE",
  "ELECTRICAL",
  "TOOLING",
  "MEDICAL",
  "INSTRUMENTS",
  "JEWELRY",
  "RECREATIONAL",
];

export function Companies() {
  return (
    <section id="companies">
      <div className="py-1 pb-10">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center space-y-3 mb-8">
            <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200">
              USA ENGINEERING EXPERTISE
            </h3>
            <img
              src="/images/USA.svg"
              alt="USA Flag"
              className="h-16 mx-auto"
            />
            <p className="text-xl font-bold text-gray-800 dark:text-gray-200 pb-4">
              INDUSTRIES SERVED:
            </p>
          </div>
          <div className="relative mt-6">
            <div className="grid grid-cols-2 place-items-center gap-1 md:grid-cols-4 xl:grid-cols-7 xl:gap-2">
              {industries.map((industry, idx) => (
                <span
                  key={idx}
                  className="font-bold text-gray-800 dark:text-gray-200 text-2xl"
                >
                  {industry}
                </span>
              ))}
            </div>
            <div className="pointer-events-none absolute inset-y-0 left-0 h-full w-1/3 bg-gradient-to-r from-white dark:from-black"></div>
            <div className="pointer-events-none absolute inset-y-0 right-0 h-full w-1/3 bg-gradient-to-l from-white dark:from-black"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
