import { ImageResponse } from 'next/og';

export const runtime = 'nodejs';
export const size = { width: 32, height: 32 };
export const contentType = 'image/png';

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 24,
          fontWeight: 800,
          background: 'linear-gradient(135deg, #4ECDA0 0%, #3b368a 100%)', // teal to indigo
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          borderRadius: '8px',
          fontFamily: 'sans-serif',
        }}
      >
        C
      </div>
    ),
    { ...size }
  );
}
