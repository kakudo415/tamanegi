import * as webpush from 'web-push'

import { prisma } from '@/lib/db'

export async function POST() {
  const subscribers = await prisma.subscription.findMany({
    where: {
      basketId: 'NOT_IMPLEMENTED',
    }
  })
  webpush.setVapidDetails(
    process.env.VAPID_SUBJECT || '',
    process.env.VAPID_PUBLIC_KEY || '',
    process.env.VAPID_PRIVATE_KEY || '',
  )
  for (const subscriber of subscribers) {
    const pushSubscription = await prisma.pushSubscription.findUnique({
      where: {
        endpoint: subscriber.pushSubscriptionEndpoint,
      }
    })
    if (!pushSubscription) {
      continue
    }
    const subscription = {
      endpoint: pushSubscription.endpoint,
      keys: {
        p256dh: pushSubscription.keyP256dh,
        auth: pushSubscription.keyAuth,
      }
    }
    webpush.sendNotification(
      subscription,
      JSON.stringify({
        title: 'Tamanegi!',
        body: '!!!!!!!!!!!!!!!',
      }),
      {
        TTL: 60,
      }
    )
  }
  return new Response(null, {
    status: 200,
  })
}