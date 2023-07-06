import { NextRequest } from 'next/server'

import { prisma } from '@/lib/db'

export async function POST(req: NextRequest) {
  const subscription = await req.json()

  await prisma.pushSubscription.upsert({
    where: {
      endpoint: subscription.endpoint,
    },
    update: {},
    create: {
      endpoint: subscription.endpoint,
      keyP256dh: subscription.keys.p256dh,
      keyAuth: subscription.keys.auth,
    },
  })

  const storedSubscription = await prisma.subscription.findFirst({
    where: {
      basketId: 'NOT_IMPLEMENTED',
      pushSubscriptionEndpoint: subscription.endpoint,
      deletedAt: null,
    }
  })
  if (storedSubscription == null) {
    await prisma.subscription.create({
      data: {
        basketId: 'NOT_IMPLEMENTED',
        pushSubscriptionEndpoint: subscription.endpoint,
      },
    })
  }

  return new Response(null, {
    status: 200,
  })
}