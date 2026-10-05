import { ImageResponse } from 'next/og'
import { readFile } from 'node:fs/promises'
import { join } from 'node:path'

const profilePicData = await readFile(join(process.cwd(), 'public/profilepic.jpeg'), 'base64')
const profilePicSrc = `data:image/jpeg;base64,${profilePicData}`

export const alt = 'Razim Manzoor Portfolio'
export const size = {
    width: 1200,
    height: 630,
}

export const contentType = 'image/png'

export default async function Image() {
    return new ImageResponse(
        (
            <div
                style={{
                    fontSize: 128,
                    background: 'black',
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    fontFamily: 'sans-serif',
                }}
            >
                <div style={{ display: 'flex', alignItems: 'center', gap: 40 }}>
                    {/* Profile Picture */}
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                        src={profilePicSrc}
                        alt="Razim Manzoor"
                        width={250}
                        height={250}
                        style={{
                            borderRadius: 125,
                            border: '4px solid #333',
                            objectFit: 'cover',
                        }}
                    />

                    {/* Text Loogo */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
                        <div style={{ fontWeight: 'bold', lineHeight: 0.9 }}>RAZIM.</div>
                    </div>
                </div>

                <div style={{ fontSize: 40, marginTop: 50, color: '#A0A0A0', letterSpacing: '-0.02em' }}>
                    Websites, Apps, AI & Automation
                </div>
            </div>
        ),
        {
            ...size,
        }
    )
}
