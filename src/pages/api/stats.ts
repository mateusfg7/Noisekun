import { NextApiRequest, NextApiResponse } from 'next'
import { startOfDay, intervalToDuration } from 'date-fns'
import { umamiApi } from '../../services/api'
import { getUmamiToken } from '../../services/getUmamiToken'

interface StatsResponse {
  pageviews: {
    value: number
  }
  uniques: {
    value: number
  }
  bounces: {
    value: number
  }
  totaltime: {
    value: number
  }
}

export interface NoisekunStatsApiResponse {
  page_views: number
  uniques_views: number
  months_interval: number
}

async function stats(req: NextApiRequest, res: NextApiResponse) {
  const token = await getUmamiToken()

  umamiApi.defaults.headers.common.Authorization = `Bearer ${token}`

  const startDate = new Date('2020-01-01')
  const today = startOfDay(new Date())
  const dateRangeInterval = intervalToDuration({
    start: startDate,
    end: today
  })

  const statsResponse = await umamiApi.get<StatsResponse>(
    `/api/website/${process.env.UMAMI_WEBSITE_ID}/stats`,
    {
      params: {
        start_at: +startDate,
        end_at: +today
      }
    }
  )

  const statsData = {
    page_views: statsResponse.data.pageviews.value,
    uniques_views: statsResponse.data.uniques.value,
    months_interval: dateRangeInterval.months
  }

  res.status(200).json(statsData)
}

export default stats
