import axios from 'axios'

export const api = axios.create({
  baseURL: 'http://10.22.10.24:3333',
  timeout: 700,
})

// Para visualizar os dados do banco, acessar a pasta "api" via terminal e rodar "npx prisma studio"