import type { NextApiRequest, NextApiResponse } from 'next'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({
    facebook: 'https://www.facebook.com/epickon',
    instagram: 'https://www.instagram.com/epickon',
    tiktok: 'https://www.tiktok.com/@epickon'
  })
}