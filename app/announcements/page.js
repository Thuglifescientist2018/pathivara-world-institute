"use client";
export default function AnnouncementsPage() {
  return (
    <div className="max-w-2xl mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold text-blue-900 mb-6">Announcements</h1>
      <ul className="space-y-4">
        <li className="bg-blue-50 border-l-4 border-blue-600 p-4 rounded shadow">
          <span className="font-semibold text-blue-800">New Batch Starting Soon:</span> Admissions open for Computer Training and Science Bridge Course. Contact us for details!
        </li>
        <li className="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded shadow">
          <span className="font-semibold text-yellow-700">Holiday Notice:</span> The institute will remain closed on public holidays as per government notice.
        </li>
        <li className="bg-green-50 border-l-4 border-green-600 p-4 rounded shadow">
          <span className="font-semibold text-green-800">Congratulations:</span> Congratulations to our SEE graduates for their outstanding results!
        </li>
      </ul>
    </div>
  );
}