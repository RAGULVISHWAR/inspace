import React from 'react';

interface MapProps {
    src?: string;
    width?: string | number;
    height?: string | number;
    className?: string;
}
const Map = ({
    src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.429643811541!2d80.15008689999999!3d13.071934800000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52617b8a0ee05d%3A0xd66593fb9c412592!2sMax%20Mannequins!5e0!3m2!1sen!2sin!4v1742018052557!5m2!1sen!2sin",
    width = "100%",
    height = "450",
    className = "",
}: MapProps) => {
    return (
        <div className={`w-full ${className}`}>
            <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden' }}>
                <iframe
                    src={src}
                    width={width}
                    height={height}
                    style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Google Map"
                />
            </div>
        </div>
    );
};

export default Map;