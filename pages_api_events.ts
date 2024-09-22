import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const API_KEY = 'AIzaSyC24ezqwMmny3UNBvvd0cQbQ-nWvggqoXw'
  const CALENDAR_ID = '65bac6ad6467485f15f77ff8fccc0f70ed4415e7d83404bf7e7aac3bb64cda91@group.calendar.google.com'

  try {
    const response = await fetch(`https://www.googleapis.com/calendar/v3/calendars/${CALENDAR_ID}/events?key=${API_KEY}&timeMin=${new Date().toISOString()}&maxResults=10&singleEvents=true&orderBy=startTime`)
    const data = await response.json()
    res.status(200).json(data.items)
  } catch (error) {
    console.error('Error fetching events:', error)
    res.status(500).json({ error: 'Error fetching events' })
  }
}