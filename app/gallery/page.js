"use client";
import { useEffect, useState, useRef } from "react";
import "lightgallery/css/lightgallery.css";

function getApiUrl(nextCursor) {
  return `/api/gallery${nextCursor ? `?next_cursor=${nextCursor}` : ""}`;
}

export default function GalleryPage() {
  const [images, setImages] = useState([]);
  const [nextCursor, setNextCursor] = useState(null);
  const [loading, setLoading] = useState(false);
  const galleryRef = useRef(null);

  const fetchImages = async (cursor = null) => {
    setLoading(true);
    try {
      const res = await fetch(getApiUrl(cursor));
      const data = await res.json();
      if (Array.isArray(data.resources)) {
        setImages((prev) => [...prev, ...data.resources]);
        setNextCursor(data.next_cursor || null);
      } else {
        // Handle error or empty state
        setNextCursor(null);
      }
    } catch (e) {
      // Handle error (e.g., show a message)
      setNextCursor(null);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchImages();
  }, []);

  useEffect(() => {
    let instance;
    async function loadGallery() {
      const lightGallery = (await import("lightgallery")).default;
      if (galleryRef.current) {
        instance = lightGallery(galleryRef.current, {
          selector: ".gallery-item",
          download: false,
          getCaptionFromTitleOrAlt: false,
        });
      }
    }
    loadGallery();
    return () => {
      if (instance && typeof instance.destroy === "function") {
        instance.destroy();
      }
    };
  }, [images]);

  return (
    <div className="max-w-4xl mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold text-blue-900 mb-6">Gallery</h1>
      <p className="mb-8 text-gray-700">A showcase of our institute&apos;s activities, students, and events.</p>
      <div ref={galleryRef} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {images.map((img, idx) => (
          <a
            key={img.asset_id || idx}
            className="gallery-item block rounded shadow overflow-hidden cursor-pointer"
            href={img.secure_url}
            data-sub-html={`<div class='text-center p-2'>
              <div class='font-bold text-lg mb-1'>${img.title}</div>
              <div class='text-gray-600 text-sm'>${img.description}</div>
            </div>`}
          >
            <img src={img.secure_url} alt={img.description} className="w-full h-48 object-cover" />
          </a>
        ))}
      </div>
      {nextCursor && (
        <button
          onClick={() => fetchImages(nextCursor)}
          className="mt-6 px-6 py-2 bg-blue-700 text-white rounded shadow hover:bg-blue-800 transition"
          disabled={loading}
        >
          {loading ? "Loading..." : "Next"}
        </button>
      )}
    </div>
  );
}
