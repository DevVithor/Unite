import { prisma } from '../src/lib/prisma'

async function seed() {
    await prisma.event.create({
        data: {
            id: "4d07f652-9f1b-4ba4-9ae9-e7a17e9a833d",
            title: 'Unite Summit',
            slug: 'unite-summit',
            details: "Um evento p/ devs apaixonados(as) por código",
            maximumAttendees: 120,
        }
    })
}

seed().then(() => {
    console.log("Database seeded")
    prisma.$disconnect()
})