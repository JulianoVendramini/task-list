import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

prisma.user.create({
    data:{
        name: 'Juliano2',
        email: 'JulianoVendramini2@outlook.com',
        password: '123456',
        todos:{
            create: {
                title: 'Learn Prisma',
            }
        }
        
    }
}).then(()=>{
    console.log('user created')
})