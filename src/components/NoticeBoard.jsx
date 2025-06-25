import React, { useEffect, useState } from 'react';

export default function NoticeBoard() {
  const [notices, setNotices] = useState([]);
  const [events, setEvents] = useState([]);
  const [news, setNews] = useState([]);

  useEffect(() => {
    fetch("https://v1.nocodeapi.com/sanatanofficial/google_sheets/HubxHDCFxlyXXqWM?tabId=Notices", {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
        return res.json();
      })
      .then((data) => {
        // console.log("Fetched notices:", data);
        setNotices(data.data);
      })
      .catch((err) => console.error("Fetch error:", err));

    fetch("https://v1.nocodeapi.com/sanatanofficial/google_sheets/HubxHDCFxlyXXqWM?tabId=Events")
      .then((res) => res.json())
      .then((data) => setEvents(data.data))
      .catch((err) => console.error("Failed to fetch events:", err));

    fetch("https://v1.nocodeapi.com/sanatanofficial/google_sheets/HubxHDCFxlyXXqWM?tabId=News")
      .then((res) => res.json())
      .then((data) => setNews(data.data))
      .catch((err) => console.error("Failed to fetch news:", err));
  }, []);

  return (
    <section className="py-10 px-6 bg-white" id="notices">
      <h2 className="text-3xl font-bold text-center text-blue-800 mb-8">
        Notice Board & Updates
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Notices */}
        <div className="bg-yellow-100 p-4 rounded-lg shadow h-[300px] overflow-y-auto">
          <h3 className="text-xl font-semibold text-yellow-700 mb-3">📌 Notices</h3>
          <ul className="space-y-2">
            {notices.length > 0 ? (
              notices.map((notice, index) => (
                <li key={index} className="border-b pb-2">
                  <a
                    href={notice.URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block hover:bg-yellow-200 p-2 rounded transition"
                  >
                    <p className="text-blue-900 font-semibold">{notice.Title}</p>
                    <p className="text-sm text-gray-600">
                      {notice.Date} – {notice.Description}
                    </p>
                  </a>
                </li>
              ))
            ) : (
              <li>Loading notices...</li>
            )}
          </ul>
        </div>

        {/* Events */}
        <div className="bg-blue-100 p-4 rounded-lg shadow h-[300px] overflow-y-auto">
          <h3 className="text-xl font-semibold text-blue-700 mb-3">🎉 Events</h3>
          <ul className="space-y-2">
            {events.length > 0 ? (
              events.map((event, index) => (
                <li key={index} className="border-b pb-2">
                  <a
                    href={event.URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block hover:bg-blue-200 p-2 rounded transition"
                  >
                    <p className="text-blue-900 font-semibold">{event.Title}</p>
                    <p className="text-sm text-gray-600">
                      {event.Date} – {event.Description}
                    </p>
                  </a>
                </li>
              ))
            ) : (
              <li>Loading events...</li>
            )}
          </ul>
        </div>

        {/* News */}
        <div className="bg-orange-100 p-4 rounded-lg shadow h-[300px] overflow-y-auto">
          <h3 className="text-xl font-semibold text-orange-700 mb-3">📰 News</h3>
          <ul className="space-y-2">
            {news.length > 0 ? (
              news.map((item, index) => (
                <li key={index} className="border-b pb-2">
                  <a
                    href={item.URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block hover:bg-orange-200 p-2 rounded transition"
                  >
                    <p className="text-blue-900 font-semibold">{item.Title}</p>
                    <p className="text-sm text-gray-600">
                      {item.Date} – {item.Description}
                    </p>
                  </a>
                </li>
              ))
            ) : (
              <li>Loading news...</li>
            )}
          </ul>
        </div>
      </div>
    </section>
  );
}
