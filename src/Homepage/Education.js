import React from 'react';

function Education() {
  return (
    <section className="bg-transparent py-12">
      <div className="container mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-8">Education</h2>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* Education Item 1 */}
          <div className="bg-white shadow-lg p-6 border rounded-xl border-rose-900">
            <h3 className="text-xl font-semibold mb-2">Bachelor's Degree</h3>
            <p className="text-gray-600">University of Example</p>
            <p className="text-gray-600">Graduated: May 2022</p>
          </div>

          {/* Education Item 2 */}
          <div className="bg-white shadow-lg p-6 border rounded-xl border-rose-900">
            <h3 className="text-xl font-semibold mb-2">Master's Degree</h3>
            <p className="text-gray-600">Another University</p>
            <p className="text-gray-600">Graduated: December 2023</p>
          </div>

          {/* Education Item 3 */}
          <div className="bg-white shadow-lg p-6 border rounded-xl border-rose-900">
            <h3 className="text-xl font-semibold mb-2">Ph.D. in Something</h3>
            <p className="text-gray-600">Yet Another University</p>
            <p className="text-gray-600">Expected Graduation: 2025</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Education;
